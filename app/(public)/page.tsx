import { StructuredData } from "../components/seo/structured-data";
import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";

export default function Home() {
	// Définir les sitelinks que vous voulez voir apparaître dans Google
	const siteLinks = [
		{
			name: "Oui-Access : monitoring industriel",
			url: "https://access.oui-connect.fr",
			description: "Plateforme de supervision 24/7 et maintenance prédictive",
		},
		{
			name: "Oui-Scan : traçabilité pour les entreprises",
			url: "https://oui-scan.com",
			description: "Application mobile de gestion par QR codes",
		},
		{
			name: "Nos Solutions",
			url: `${process.env.WEBSITE_URL}/#solutions`,
			description: "Découvrez toutes nos solutions de monitoring industriel",
		},
		{
			name: "Nous Contacter",
			url: `${process.env.WEBSITE_URL}/contact`,
			description: "Contactez notre équipe d'experts",
		},
	];

	return (
		<>
			<StructuredData siteLinks={siteLinks} />
			<Hero />
			<Projects />
			<About />
			<Contact />
		</>
	);
}
