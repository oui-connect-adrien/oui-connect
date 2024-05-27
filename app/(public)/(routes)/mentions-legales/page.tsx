"use client";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const content = [
		{
			title: "Conservez l’historique de vos données",
			description:
				"Paramétrez vos propres alarmes afin d’être alerté n’importe ou et n’importe quand par mail ou SMS pour toutes dérives ou anomalies. Gérez vos alarmes et prévenez la personne adéquate via notre gestion des astreintes",
			content: (
				<div className="h-full w-full relative">
					<Image src="/oui-access-2.png" fill alt="oui-scan-1" />
				</div>
			),
		},
		{
			title: "Visualiser la performance détaillée de vos équipements",
			description:
				"Accédez et visualisez vos données en temps réel par des graphiques détaillés pour chacune de vos installations. Personnalisez l’affichage des éléments de votre tableau de bords",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-access-3.png"
						fill
						className="h-full w-full object-cover"
						alt="Oui Energy"
					/>
				</div>
			),
		},
		{
			title: "Analyser et exploiter vos données",
			description:
				"Exportez vos données de manière sécurisée en .csv ou .pdd et faites vos propres modèles d’analyse de la performance de vos équipements afin d’identifier les sources d’anomalies et les corriger. Importer et partagez vos rapports d’analyse et d’entretien directement sur la plateforme.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-access-4.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
	];

	const skills = [
		{
			title: "Alertes en Temps réel",
			description:
				"Soyez alertés en temps réels et depuis n’importe ou de toutes anomalies, pannes ou dérives de vos équipements ou installations.",
		},
		{
			title: "Centralisation",
			description:
				"Facilitez votre suivi énergétique en accédant à vos indicateurs de performance énergétique pour l’ensemble de vos installations en un seul endroit et économisez un temps considérable dans la gestion de vos installations.",
		},
		{
			title: "Accessibilité",
			description:
				"Accédez à notre application web à partir de tous vos appareils (Ordinateur, smartphone…) depuis n’importe où et à tout moment (24h/24 et 7j7).",
		},
		{
			title: "Sécurisé",
			description:
				"Parce que nous connaissons vos enjeux et défis vis-à-vis de la cybersécurité, nous mettons tout en œuvre pour sécuriser vos données à tout moment et éliminer tout risque de fuite.",
		},
		{
			title: "1/2 journée",
			description:
				"Sauf cas complexe, la mise en place de notre solution ne prend en général qu’une demi-journée par équipement industriel. Vous êtes ainsi en mesure de commencer à suivre vos indicateurs de performance énergétique très rapidement",
		},
		{
			title: "Personnalisable",
			description:
				"Personnalisez l’interface de votre solution ainsi que de nombreux paramètres (alarmes, graphiques…) à votre goût.",
		},
	];

	const advantages = [
		{
			title: "Mise en place de la solution",
			description:
				"Nous intervenons pour installer la solution sur place ou à distance en fonction de vos contraintes.",
		},
		{
			title: "Connexion de la solution à nos serveurs",
			description:
				"Nous connectons la solution à nos serveurs de manière entièrement sécurisée et nous nous adaptons là-aussi à vos contraintes.",
		},
		{
			title: "Accession au données",
			description:
				"Nous réceptionnons vos données et les affichons directement sur votre écran lorsque vous vous connectez à notre solution.",
		},
	];
	return (
		<>
			
		</>
	);
};

export default Page;
