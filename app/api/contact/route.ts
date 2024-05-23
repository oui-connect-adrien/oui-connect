import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const { email, firstname, lastname, subject, phoneNumber, message } =
			await req.json();
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: 587,
			secure: false, // Use TLS
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
			tls: {
				rejectUnauthorized: false, // Fix for self-signed certificates
			},
		});
		const mailData = {
			from: email,
			to: process.env.EMAIL_USER,
			cc: "support@oui-connect.fr",
			subject: `Message from ${firstname} ${lastname} - ${subject} - ${phoneNumber}`,
			text: message,
			html: `<div>${message}</div>`,
		};
		const info = await transporter.sendMail(mailData);
		console.log(info);
		return NextResponse.json(
			{ message: "Email envoyé avec succès !" },
			{ status: 200 }
		);
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ message: "Erreur lors de l'envoi du mail" },
			{ status: 500 }
		);
	}
}
