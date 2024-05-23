"use client";
import Statistic from "@/app/(public)/_components/statistic-item";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Earth, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const content = [
		{
			title:
				"Des appareils de mesure technologiques très performants pour répondre à tous vos besoins",
			description:
				"Nous identifions conjointement les installations à auditer. Nous sélectionnons et préparons le matériel nécessaire à l’installation. Nous mettons en place les différents instruments de mesure nécessaires (FT, PT, TT).",
			content: (
				<div className="h-full w-full relative">
					<Image src="/evaluation-energetique-1.png" fill alt="oui-scan-1" />
				</div>
			),
		},
		{
			title:
				"Acquisition, historisation et exploitation des mesures à travers notre outil Oui-Energy",
			description:
				"L’acquisition des points de mesure est directement effectuée à l’aide de notre outil Oui-Energy, de n’importe où. Toutes les données sont historisées sur le serveur et accessibles à partir de notre outil. Nous nous adaptons à vos exigences concernant la sécurité de vos données.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/evaluation-energetique-2.png"
						width={300}
						height={400}
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Analyse et établissement d’un schéma directeur énergétique",
			description:
				"Nous exploitons et analysons toutes les données relevées directement à partir du logiciel afin de détecter les sources de gaspillages. Nous éditons un premier rapport d’analyse de vos infrastructures et installations. Nous évaluons ensuite plusieurs scénarios de manière à évaluer la meilleure stratégie d’amélioration de vos performances énergétiques. Nous établissons une feuille de route optimisée en fonction de votre vision stratégique et nos analyses afin d’atteindre vos objectifs de performance énergétique.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/evaluation-energetique-3.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Propositions de solutions",
			description:
				"Nous rédigeons un rapport détaillé de nos recommandations et préconisations d’investissement pour vous permettre d’améliorer votre efficacité énergétique avec le meilleur retour sur investissement possible. Nous vous recommandons des solutions à la fois techniques (APS) et financières (CAPEX, chiffrages, aides possibles…). Nous restons disponibles pour répondre à vos éventuelles questions ou remarques.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/evaluation-energetique-4.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
	];

	const stats = [
		{
			value: 40,
			label: "Bénéficiez de plus de 40 ans d'expertise",
			duration: 2.5,
		},
		{
			icon: <Earth size={64} />,
			label: "Une couverture sur la France entière",
		},
		{
			value: "A à Z",
			label: "De l’avant-projet jusqu’à la réalisation clef en main",
		},
	];
	const skills = [
		{
			label:
				"De situer les différentes sources de pertes énergétiques au sein de vos installations",
		},
		{
			label:
				"De suivre un plan d’action précis pour vous permettre d’optimiser votre énergie",
		},
		{
			label:
				"D’identifier les investissements à prioriser afin d’optimiser votre performance énergétique",
		},
		{
			label:
				"De mettre en oeuvre ces solutions techniques et d’atteindre vos objectifs stratégiques",
		},
		{
			label:
				"De déterminer l’impact financier qu’auront ces investissements ainsi que les aides disponibles",
		},
	];
	return (
		<>
			<div className="relative py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Réalisez une évaluation énergétique
					</h1>
					<div className="grid lg:grid-cols-2 gap-8 mt-14 py-4">
						<div className="flex flex-col gap-8 text-center lg:text-left lg:items-start items-center">
							<h2 className="relative font-regular text-base md:text-2xl tracking-wide mb-8 max-w-3xl mx-auto antialiased">
								Détectez les sources de gaspillage énergétique de vos
								installations industrielles et identifiez les actions
								correctives à mettre en place.
							</h2>
							<Link href="/contact">
								<Button size={"lg"}>Demander un devis</Button>
							</Link>
						</div>
						<div className="relative rounded-md w-[420px] h-[320px] mx-auto">
							<Image
								src="/evaluation-energetique.png"
								alt="Evaluation énergétique"
								fill
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-[500px] py-4 antialiased overflow-hidden">
				<StickyScroll content={content} />
			</div>
			<section
				id="hero"
				className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_90%,transparent)] [webkit-mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] relative min-h-screen bg-grid-slate-100/70 py-4 antialiased overflow-hidden"
			>
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<div className="mb-12">
						<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
							Nos garanties
						</h2>

						<p className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto">
							Notre partenaire est reconnu et référencé parmi les plus grands
							industriels au monde.
						</p>
						<div className="grid lg:grid-cols-3 gap-8 w-full">
							{stats.map((stat, index) => (
								<Statistic key={index} {...stat} />
							))}
						</div>
						<div className="mt-20">
							<h3 className="text-xl font-base mb-4 text-center text-neutral-700 max-w-6xl mx-auto">
								En plus de cette étude, vous avez la possibilité de profiter de
								l’abonnement à notre solution web de monitoring des indicateurs
								de performance énergétique, éligible aux CEE, gratuitement
								pendant 1 an.
							</h3>
						</div>
					</div>
				</div>
			</section>
			<div className="relative bg-zinc-100 py-8 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<h3 className="text-4xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto">
						Pourquoi nous choisir ?
					</h3>
					<p className="text-lg mt-4 text-center">
						A la suite de notre évaluation énergétique, vous serez en mesure :
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 mt-16">
						{skills.map((value, index) => (
							<div key={index} className="flex flex-col items-center">
								<Star className="w-12 h-12 text-primary" />
								<h4 className="text-md text-center font-semibold mb-4 mt-8 text-zinc-700">
									{value.label}
								</h4>
							</div>
						))}
					</div>
					<Link href="/contact">
						<Button size="lg" className="mt-8">
							Demander un devis
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Page;
