import { Home, Info, Mail } from "lucide-react";

export const navbarItems = [
	//home
	{
		label: "Accueil",
		href: "/",
		icon: Home,
	},
	//solutions
	{
		label: "Nos solutions",
		href: "/#solutions",
		icon: Home,
		submenu: [
			{ label: "Bilan Energétique", href: "/solutions/bilan-energetique" },
			{
				label: "Monitoring Energétique",
				href: "/solutions/monitoring-energetique",
			},
			{ label: "Oui-Scan", href: "/solutions/oui-scan" },
		],
	},
	{
		label: "Qui sommes-nous ?",
		href: "/#qui-sommes-nous",
		icon: Mail,
	},
	{
		label: "Nous Contacter",
		href: "/#contact",
		icon: Info,
	},
];

export * from "./navbar";
