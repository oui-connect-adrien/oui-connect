"use server";

import { checkBotId } from "botid/server";
import { contactSchema } from "../schemas/contact-schema";
import { ActionState, ActionStatus } from "../types/server-action";

export const contact = async (
	_: ActionState | undefined,
	formData: FormData
): Promise<ActionState> => {
	try {
		// Vérification BotID pour bloquer les bots automatisés
		const verification = await checkBotId();

		if (verification.isBot) {
			return {
				status: ActionStatus.ERROR,
				message: "Accès refusé. Veuillez réessayer.",
			};
		}
		const rawData = {
			firstname: formData.get("firstname") as string,
			lastname: formData.get("lastname") as string,
			email: formData.get("email") as string,
			phoneNumber: formData.get("phoneNumber") as string,
			companyName: formData.get("companyName") as string,
			subject: formData.get("subject") as string,
			message: formData.get("message") as string,
		};

		// Validation des données avec Zod
		const validation = contactSchema.safeParse(rawData);
		if (!validation.success) {
			return {
				status: ActionStatus.VALIDATION_ERROR,
				message: validation.error.issues[0]?.message || "Validation échouée. Veuillez vérifier votre saisie.",
			};
		}

		const validatedData = validation.data;

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

			return {
				status: ActionStatus.SUCCESS,
				message: "Votre message a été envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais.",
				data: validatedData,
			};
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
					return {
						status: ActionStatus.ERROR,
						message: "Problème de connexion réseau. Veuillez réessayer plus tard.",
					};
				}

				// Erreurs API (status 4xx, 5xx)
				if (errorMessage.includes("API responded with status")) {
					return {
						status: ActionStatus.ERROR,
						message: "Erreur du service d'envoi d'email. Veuillez réessayer plus tard.",
					};
				}
			}

			return {
				status: ActionStatus.ERROR,
				message: "Erreur lors de l'envoi de votre message. Veuillez réessayer plus tard.",
			};
		}
	} catch (error) {
		console.error("[SUBMIT_CONTACT_FORM]", error);
		return {
			status: ActionStatus.ERROR,
			message: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
		};
	}
};
