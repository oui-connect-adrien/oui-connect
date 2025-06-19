import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email, firstname, lastname, subject, phoneNumber, message } =
			await req.json();

		const emailSubject = `Message commercial de ${firstname} ${lastname} - ${subject} - ${phoneNumber} via le site oui-connect.fr`;
		const recipients = [
			process.env.EMAIL_USER || "support@oui-connect.fr",
			"b.warion@oui-connect.fr",
		];

		// Send email to both recipients
		const emailPromises = recipients.map(async (recipient) => {
			const formData = new FormData();
			formData.append("subject", emailSubject);
			formData.append("text", message);
			formData.append("email", recipient);

			const response = await fetch(
				"https://www.sms.scan.oui-connect.fr/email_management/send_email",
				{
					method: "POST",
					body: formData,
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

			// Check if response has content before parsing as JSON
			const responseText = await response.text();
			console.log(`API Response Text for ${recipient}:`, responseText);

			let result = null;
			if (responseText.trim()) {
				try {
					result = JSON.parse(responseText);
					console.log(`Email sent successfully to ${recipient}:`, result);
				} catch (parseError) {
					console.log(
						`Response is not JSON for ${recipient}, treating as plain text:`,
						responseText
					);
					result = { message: responseText };
				}
			} else {
				console.log(
					`Empty response from API for ${recipient}, assuming success`
				);
				result = { message: "Email sent successfully" };
			}

			return { recipient, result };
		});

		// Wait for all emails to be sent
		const emailResults = await Promise.all(emailPromises);
		console.log("All emails sent successfully:", emailResults);

		return NextResponse.json(
			{ message: "Email envoyé avec succès !" },
			{ status: 200 }
		);
	} catch (err) {
		console.error("Error sending email:", err);
		return NextResponse.json(
			{ message: "Erreur lors de l'envoi du mail" },
			{ status: 500 }
		);
	}
}
