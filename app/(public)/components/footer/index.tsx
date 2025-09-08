import { Heart, Lightbulb, Users, Zap } from "lucide-react";

export const legalLinks = [
	{ label: "Mentions légales", href: "/legal" },
	{ label: "Confidentialité", href: "/privacy" },
];

export const collaborationLinks = [
	{ label: "Demander un devis", href: "/#quote-request" },
];

export const platformLinks = [
	{
		label: "Oui-Access : monitoring industriel",
		href: "https://access.oui-connect.fr",
		description: "Plateforme de supervision 24/7 et maintenance prédictive",
	},
	{
		label: "Oui-Scan : traçabilité pour les entreprises",
		href: "https://oui-scan.com",
		description: "Application mobile de gestion par QR codes",
	},
];

export const companyLinks = [
	{ label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
	{ label: "Notre équipe", href: "/notre-equipe" },
	{ label: "Contact", href: "/#contact" },
];

export const VALUES = [
	{ icon: Heart, label: "Passion" },
	{ icon: Lightbulb, label: "Innovation" },
	{ icon: Users, label: "Esprit d'équipe" },
	{ icon: Zap, label: "Co-création" },
];

export * from "./footer";
