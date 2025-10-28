"use server";

import z from "zod";
import { contactSchema } from "../schemas/contact-schema";
import {
	ActionStatus,
	ServerAction,
	createErrorResponse,
	createSuccessResponse,
	createValidationErrorResponse,
} from "../types/server-action";

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
	const secretKey = process.env.RECAPTCHA_SECRET_KEY;

	if (!secretKey) {
		console.error("RECAPTCHA_SECRET_KEY not configured");
		return false;
	}

	try {
		const response = await fetch(
			"https://www.google.com/recaptcha/api/siteverify",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${secretKey}&response=${token}`,
			}
		);

		const data = await response.json();

		// For reCAPTCHA v3, check both success and score
		return data.success && data.score > 0.5; // Adjust score threshold as needed
	} catch (error) {
		console.error("reCAPTCHA verification error:", error);
		return false;
	}
}

export const contact: ServerAction<
	z.infer<typeof contactSchema>,
	typeof contactSchema
> = async (_, formData) => {
	try {
		const rawData = {
			firstname: formData.get("firstname") as string,
			lastname: formData.get("lastname") as string,
			email: formData.get("email") as string,
			phoneNumber: formData.get("phoneNumber") as string,
			companyName: formData.get("companyName") as string,
			subject: formData.get("subject") as string,
			message: formData.get("message") as string,
			recaptchaToken: formData.get("recaptchaToken") as string,
		};

		// Validation des données avec Zod
		const validation = contactSchema.safeParse(rawData);
		if (!validation.success) {
			return createValidationErrorResponse(
				validation.error.flatten().fieldErrors,
				"Validation échouée. Veuillez vérifier votre saisie.",
				rawData
			);
		}

		const validatedData = validation.data;

		// Verify reCAPTCHA
		const isRecaptchaValid = await verifyRecaptcha(
			validatedData.recaptchaToken
		);
		if (!isRecaptchaValid) {
			return createErrorResponse(
				"Échec de la vérification CAPTCHA. Veuillez réessayer.",
				rawData
			);
		}

		// Création du sujet et du corps de l'email
		const emailSubject = `Message commercial de ${validatedData.firstname} ${validatedData.lastname} - ${validatedData.subject} - ${validatedData.phoneNumber || "Non renseigné"} via le site oui-connect.fr`;

		const emailBody = `
NOUVELLE DEMANDE DE CONTACT - Site oui-connect.fr

═══════════════════════════════════════
INFORMATIONS DU CONTACT
═══════════════════════════════════════

👤 Nom complet : ${validatedData.firstname} ${validatedData.lastname}
🏢 Entreprise : ${validatedData.companyName || "Non renseigné"}
📧 Email : ${validatedData.email}
📱 Téléphone : ${validatedData.phoneNumber || "Non renseigné"}

═══════════════════════════════════════
DÉTAILS DE LA DEMANDE
═══════════════════════════════════════

📋 Objet : ${validatedData.subject}

💬 Message :
${validatedData.message}

═══════════════════════════════════════
INFORMATIONS TECHNIQUES
═══════════════════════════════════════

📅 Date de réception : ${new Date().toLocaleString("fr-FR")}
🌐 Source : Site web oui-connect.fr
		`.trim();

		// Liste des destinataires
		const recipients = ["b.warion@oui-connect.fr", "g.capitaine@cometi.fr"];

		try {
			// Envoi des emails à tous les destinataires via l'API externe
			// L'API attend: subject (string), text (string), email (string)
			const emailPromises = recipients.map(async (recipient) => {
				const formData = new FormData();
				formData.append("subject", emailSubject);
				formData.append("text", emailBody);
				formData.append("email", recipient);

				const response = await fetch(
					`${process.env.API_URL}/email_management/send_email`,
					{
						method: "POST",
						body: formData,
						headers: {
							// Laisser le navigateur définir Content-Type pour multipart/form-data
						},
					}
				);

				console.log(`API Response Status for ${recipient}:`, response.status);
				console.log(
					`API Response Headers for ${recipient}:`,
					Object.fromEntries(response.headers.entries())
				);

				if (!response.ok) {
					const errorText = await response.text();
					console.error(`API Error Response for ${recipient}:`, errorText);
					throw new Error(
						`Email API responded with status: ${response.status} - ${errorText} for ${recipient}`
					);
				}

				// Vérifier si la réponse a du contenu à parser
				const contentLength = response.headers.get("content-length");
				let responseJson;

				if (contentLength === "0" || !contentLength) {
					responseJson = {
						data_type: "message",
						message: `Email envoyé avec succès à ${recipient}`,
					};
				} else {
					// Parser la réponse JSON selon la spec Swagger
					try {
						responseJson = await response.json();
						console.log(
							`Email sent successfully to ${recipient}:`,
							responseJson
						);

						// Vérifier que la réponse correspond à la spec Swagger
						if (responseJson.data_type === "message" && responseJson.message) {
							console.log(`Success message: ${responseJson.message}`);
						}
					} catch (parseError) {
						console.log(
							`Failed to parse JSON response for ${recipient}, treating as success`
						);
						responseJson = {
							data_type: "message",
							message: `Email envoyé avec succès à ${recipient}`,
						};
					}
				}

				return { recipient, result: responseJson };
			});

			// Attendre que tous les emails soient envoyés
			const emailResults = await Promise.all(emailPromises);
			console.log("All emails sent successfully:", emailResults);

			return createSuccessResponse(
				validatedData,
				"Votre message a été envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais."
			);
		} catch (emailError) {
			console.error("Erreur lors de l'envoi de l'email:", emailError);

			// Gestion des erreurs spécifiques de l'API
			if (emailError instanceof Error) {
				const errorMessage = emailError.message;

				// Erreurs de réseau
				if (
					errorMessage.includes("fetch") ||
					errorMessage.includes("network")
				) {
					return createErrorResponse(
						ActionStatus.ERROR,
						"Problème de connexion réseau. Veuillez réessayer plus tard."
					);
				}

				// Erreurs API (status 4xx, 5xx)
				if (errorMessage.includes("API responded with status")) {
					return createErrorResponse(
						ActionStatus.ERROR,
						"Erreur du service d'envoi d'email. Veuillez réessayer plus tard."
					);
				}
			}

			return createErrorResponse(
				ActionStatus.ERROR,
				"Erreur lors de l'envoi de votre message. Veuillez réessayer plus tard."
			);
		}
	} catch (error) {
		console.error("[SUBMIT_CONTACT_FORM]", error);
		return createErrorResponse(
			ActionStatus.ERROR,
			"Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
		);
	}
};
