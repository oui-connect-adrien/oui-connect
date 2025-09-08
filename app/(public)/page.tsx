import { About } from "./components/about/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects/projects";
import { StructuredData } from "../components/seo/structured-data";

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
