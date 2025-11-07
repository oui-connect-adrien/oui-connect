import { ContactForm } from "@/app/(public)/_components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contactez Oui-Connect pour vos projets de monitoring industriel, IoT et digitalisation. Devis gratuit et conseil personnalisé pour vos équipements industriels.",
	keywords: [
		"contact oui-connect",
		"devis monitoring industriel",
		"conseil IoT",
		"digitalisation industrie",
		"maintenance prédictive",
		"supervision équipements",
	],
	openGraph: {
		title: "Contact - Oui Connect",
		description:
			"Contactez-nous pour vos projets de monitoring industriel et digitalisation. Devis gratuit et conseil personnalisé.",
		url: `${process.env.WEBSITE_URL}/contact`,
		type: "website",
		images: [
			{
				url: `${process.env.WEBSITE_URL}/logo-oui-connect-700x700.jpg`,
				width: 700,
				height: 700,
				alt: "Contactez Oui Connect pour vos projets industriels",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Contact - Oui Connect",
		description:
			"Contactez-nous pour vos projets de monitoring industriel et digitalisation.",
	},
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/contact`,
	},
};

export default function ContactPage() {
	return (
		<div className="mask-[linear-gradient(to_top,transparent,white_10%,white_90%,transparent)] relative min-h-screen bg-grid-slate-100/70 pt-4 pb-32 antialiased overflow-hidden">
			<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-12 relative text-center text-zinc-700 max-w-6xl mx-auto">
					Contactez-nous
				</h1>
				<h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
					Vous avez une question ou souhaitez en savoir plus sur nos solutions ?
					N'hésitez pas à nous contacter via le formulaire ci-dessous.
				</h2>
				<div className="w-full lg:max-w-3xl mt-10">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
