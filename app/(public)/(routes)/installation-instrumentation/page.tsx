"use client";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const content = [
		{
			title: "Conservez l'historique de vos données",
			description:
				"Paramétrez vos propres alarmes afin d'être alerté n'importe ou et n'importe quand par mail ou SMS pour toutes dérives ou anomalies. Gérez vos alarmes et prévenez la personne adéquate via notre gestion des astreintes",
			content: (
				<div className="h-full w-full relative">
					<Image src="/oui-access-2.png" fill alt="oui-scan-1" />
				</div>
			),
		},
		{
			title: "Visualiser la performance détaillée de vos équipements",
			description:
				"Accédez et visualisez vos données en temps réel par des graphiques détaillés pour chacune de vos installations. Personnalisez l'affichage des éléments de votre tableau de bords",
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
				"Exportez vos données de manière sécurisée en .csv ou .pdd et faites vos propres modèles d'analyse de la performance de vos équipements afin d'identifier les sources d'anomalies et les corriger. Importer et partagez vos rapports d'analyse et d'entretien directement sur la plateforme.",
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
				"Soyez alertés en temps réels et depuis n'importe ou de toutes anomalies, pannes ou dérives de vos équipements ou installations.",
		},
		{
			title: "Centralisation",
			description:
				"Facilitez votre suivi énergétique en accédant à vos indicateurs de performance énergétique pour l'ensemble de vos installations en un seul endroit et économisez un temps considérable dans la gestion de vos installations.",
		},
		{
			title: "Accessibilité",
			description:
				"Accédez à notre application web à partir de tous vos appareils (Ordinateur, smartphone…) depuis n'importe où et à tout moment (24h/24 et 7j7).",
		},
		{
			title: "Sécurisé",
			description:
				"Parce que nous connaissons vos enjeux et défis vis-à-vis de la cybersécurité, nous mettons tout en œuvre pour sécuriser vos données à tout moment et éliminer tout risque de fuite.",
		},
		{
			title: "1/2 journée",
			description:
				"Sauf cas complexe, la mise en place de notre solution ne prend en général qu'une demi-journée par équipement industriel. Vous êtes ainsi en mesure de commencer à suivre vos indicateurs de performance énergétique très rapidement",
		},
		{
			title: "Personnalisable",
			description:
				"Personnalisez l'interface de votre solution ainsi que de nombreux paramètres (alarmes, graphiques…) à votre goût.",
		},
	];

	const advantages = [
		{
			title: "Surveillance en temps réel",
			description:
				"Surveillez en temps réel les paramètres critiques d'un procédé (pression, température, débit, niveau, etc.)",
		},
		{
			title: "Qualité et sécurité",
			description:
				"Garantissez la qualité et la sécurité de vos installations grâce à une instrumentation adaptée.",
		},
		{
			title: "Maintenance prédictive",
			description:
				"Réduisez les arrêts non planifiés grâce à une maintenance prédictive basée sur des données fiables.",
		},
		{
			title: "Optimisation énergétique",
			description:
				"Optimisez votre consommation énergétique et réduisez votre empreinte carbone de manière significative.",
		},
	];

	const services = [
		{
			title: "Audit et conseil technique",
			description:
				"Notre équipe d'experts analyse vos besoins et vous conseille sur les meilleures solutions d'instrumentation.",
		},
		{
			title: "Installation sur site",
			description:
				"Nous assurons l'installation complète dans le respect des normes de sécurité en vigueur.",
		},
		{
			title: "Calibration et mise en service",
			description:
				"Nos techniciens calibrent et mettent en service vos instruments pour garantir leur précision.",
		},
		{
			title: "Formation des équipes",
			description:
				"Nous formons vos équipes d'exploitation pour une utilisation optimale des instruments.",
		},
	];

	return (
		<>
			<div className="relative py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Instrumentation industrielle : un levier clé pour la performance
						énergétique et la compétitivité
					</h1>
					<div className="mt-8 max-w-4xl mx-auto text-lg text-center text-zinc-600">
						<p className="mb-6">
							Dans un contexte où la transition énergétique et l'optimisation
							des performances industrielles sont devenues des priorités,
							l'instrumentation joue un rôle fondamental. Bien plus qu'un simple
							outil de mesure, elle est aujourd'hui un véritable pilier pour
							améliorer la fiabilité des installations, réduire les
							consommations énergétiques et anticiper les dérives de production.
						</p>
						<p>
							C'est dans cet esprit que ENVA Consulting accompagne les
							industriels dans la conception, l'installation et l'optimisation
							de leurs systèmes d'instrumentation. Grâce à son expertise
							technique pointue, ENVA propose des solutions sur mesure pour
							chaque secteur, allant de l'agroalimentaire à la chimie, en
							passant par l'énergie et l'environnement.
						</p>
					</div>
					<div className="mt-12">
						<Link
							href="https://enva-consulting.fr/installation-d-instrumentation/"
							target="_blank"
						>
							<Button size={"lg"}>Découvrir Enva Consulting</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className="relative bg-zinc-100 py-8 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<h2 className="text-4xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto">
						Pourquoi investir dans l'instrumentation ?
					</h2>
					<p className="text-lg mt-4 text-center max-w-3xl">
						Ces avantages contribuent directement à la rentabilité et à la
						compétitivité des sites industriels.
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
						{advantages.map((value, index) => (
							<div key={index} className="flex flex-col items-start">
								<h4 className="font-semibold text-2xl">{value.title}</h4>
								<p className="text-md font-base mb-4 mt-8 text-zinc-700">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="py-8 flex flex-col gap-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<h2 className="text-4xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto">
						Une expertise complète au service des industriels
					</h2>
					<p className="text-lg text-center max-w-3xl">
						ENVA Consulting ne se limite pas à la fourniture et à l'installation
						d'instruments. Notre approche globale garantit un accompagnement de
						bout en bout, assurant des résultats concrets et mesurables.
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mt-12">
						{services.map((service, index) => (
							<div
								key={index}
								className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm"
							>
								<Star className="w-8 h-8 text-primary" />
								<h4 className="text-xl font-semibold mb-4 mt-4 text-zinc-700">
									{service.title}
								</h4>
								<p className="text-muted-foreground">{service.description}</p>
							</div>
						))}
					</div>

					<div className="mt-20 flex flex-col items-center gap-6">
						<h3 className="text-2xl font-semibold text-center">
							En savoir plus sur les solutions d'instrumentation
						</h3>
						<p className="text-center max-w-3xl text-zinc-600">
							Pour découvrir comment nous pouvons vous accompagner dans la
							maîtrise de vos procédés et l'amélioration de votre efficacité
							énergétique, contactez nos experts.
						</p>
						<Link href="/contact">
							<Button size={"lg"}>Demander un audit</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
