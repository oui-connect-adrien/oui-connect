import { Reveal, SlideIn } from "@/shared/components/animations";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Star } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Oui-Diag - Évaluation énergétique industrielle",
	description:
		"Oui-Diag : service d'évaluation énergétique industrielle. Audit complet, analyse des performances, identification des gaspillages énergétiques et recommandations d'optimisation.",
	keywords: [
		"Oui-Diag",
		"évaluation énergétique industrielle",
		"audit énergétique",
		"diagnostic énergétique",
		"analyse performance énergétique",
		"gaspillage énergétique",
		"optimisation énergétique",
		"efficacité énergétique industrielle",
		"CEE Certificats Économies Énergie",
	],
	openGraph: {
		title: "Oui-Diag - Évaluation énergétique industrielle",
		description:
			"Service d'évaluation énergétique pour l'industrie. Audit complet et recommandations pour optimiser vos performances énergétiques.",
		url: `${process.env.WEBSITE_URL}/projects/oui-diag`,
		type: "website",
		images: [
			{
				url: `${process.env.WEBSITE_URL}/evaluation-energetique.png`,
				width: 1200,
				height: 630,
				alt: "Oui-Diag - Évaluation énergétique industrielle",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oui-Diag - Évaluation énergétique",
		description:
			"Service d'évaluation énergétique industrielle pour optimiser vos performances.",
		images: [`${process.env.WEBSITE_URL}/evaluation-energetique.png`],
	},
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/projects/oui-diag`,
	},
};

export default function OuiDiagPage() {
	const processSteps = [
		{
			title: "Audit et préparation",
			description:
				"Nous identifions conjointement les installations à auditer. Nous sélectionnons et préparons le matériel nécessaire à l'installation. Nous mettons en place les différents instruments de mesure nécessaires (FT, PT, TT).",
			image: "/evaluation-energetique-1.png",
		},
		{
			title: "Acquisition des données",
			description:
				"L'acquisition des points de mesure est directement effectuée à l'aide de notre outil Oui-Energy, de n'importe où. Toutes les données sont historisées sur le serveur et accessibles à partir de notre outil.",
			image: "/evaluation-energetique-2.png",
		},
		{
			title: "Analyse énergétique",
			description:
				"Nous exploitons et analysons toutes les données relevées pour détecter les sources de gaspillages. Nous établissons une feuille de route optimisée selon votre vision stratégique.",
			image: "/evaluation-energetique-3.png",
		},
		{
			title: "Propositions de solutions",
			description:
				"Nous rédigeons un rapport détaillé de nos recommandations et préconisations d'investissement pour améliorer votre efficacité énergétique avec le meilleur retour sur investissement.",
			image: "/evaluation-energetique-4.png",
		},
	];

	const benefits = [
		"Situer les différentes sources de pertes énergétiques au sein de vos installations",
		"Suivre un plan d'action précis pour optimiser votre énergie",
		"Identifier les investissements à prioriser pour optimiser votre performance énergétique",
		"Mettre en œuvre ces solutions techniques et atteindre vos objectifs stratégiques",
		"Déterminer l'impact financier qu'auront ces investissements ainsi que les aides disponibles",
	];

	return (
		<>
			{/* Section Hero */}
			<section
				className="relative min-h-screen py-4 antialiased overflow-hidden flex items-center"
				aria-labelledby="oui-diag-title"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<SlideIn direction="up" delay={0} duration={0.4}>
								<h1
									id="oui-diag-title"
									className="text-4xl md:text-6xl font-bold text-foreground"
								>
									Oui-Diag
								</h1>
							</SlideIn>
							<SlideIn direction="up" delay={0.1} duration={0.4}>
								<h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
									Réalisez une évaluation énergétique complète de vos
									installations industrielles
								</h2>
							</SlideIn>
							<SlideIn direction="up" delay={0.2} duration={0.4}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Détectez les sources de gaspillage énergétique et identifiez
									les actions correctives à mettre en place pour optimiser vos
									performances.
								</p>
							</SlideIn>
							<SlideIn direction="up" delay={0.3} duration={0.4}>
								<Button asChild size="lg">
									<Link href="/#contact">Demander un devis</Link>
								</Button>
							</SlideIn>
						</div>
						<Reveal threshold={0.2} delay={0.2} duration={0.5}>
							<div className="relative aspect-4/3 rounded-2xl overflow-hidden">
								<Image
									src="/evaluation-energetique.png"
									alt="Évaluation énergétique Oui-Diag"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Section Processus */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Notre processus d'évaluation
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Une approche méthodique en 4 étapes pour une évaluation
								énergétique complète et des résultats concrets.
							</p>
						</SlideIn>
					</div>

					<div className="grid gap-8">
						{processSteps.map((step, index) => (
							<Reveal
								key={index}
								threshold={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="overflow-hidden">
									<div
										className={`grid md:grid-cols-2 gap-8 items-center ${
											index % 2 === 1 ? "md:grid-flow-dense" : ""
										}`}
									>
										<div
											className={`relative aspect-4/3 ${
												index % 2 === 1 ? "md:col-start-2" : ""
											}`}
										>
											<Image
												src={step.image}
												alt={step.title}
												fill
												className="object-cover"
											/>
										</div>
										<CardContent className="p-8">
											<div className="flex items-center gap-4 mb-4">
												<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
													{index + 1}
												</div>
												<h3 className="text-2xl font-semibold text-foreground">
													{step.title}
												</h3>
											</div>
											<p className="text-muted-foreground leading-relaxed">
												{step.description}
											</p>
										</CardContent>
									</div>
								</Card>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Section Bénéfices */}
			<section className="py-16 md:py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Pourquoi choisir Oui-Diag ?
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								À la suite de notre évaluation énergétique, vous serez en mesure
								de :
							</p>
						</SlideIn>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<Reveal
								key={index}
								threshold={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="h-full">
									<CardContent className="p-6 flex flex-col items-center text-center">
										<Star className="w-12 h-12 text-primary mb-4" />
										<p className="text-muted-foreground leading-relaxed">
											{benefit}
										</p>
									</CardContent>
								</Card>
							</Reveal>
						))}
					</div>

					<div className="text-center mt-12">
						<Reveal threshold={0.3} delay={0} duration={0.5}>
							<Button asChild size="lg">
								<Link href="/#contact">Demander un devis</Link>
							</Button>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Section Garantie */}
			<aside className="py-16 md:py-24 bg-primary/5">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<Reveal threshold={0.2} delay={0} duration={0.5}>
						<div className="text-center">
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
								Notre garantie
							</h2>
							<p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
								Notre partenaire est reconnu et référencé parmi les plus grands
								industriels au monde.
							</p>
							<div className="bg-background p-8 rounded-2xl border max-w-4xl mx-auto">
								<p className="text-lg font-medium text-foreground">
									En plus de cette étude, vous avez la possibilité de profiter
									de l'abonnement à notre solution web de monitoring des
									indicateurs de performance énergétique, éligible aux CEE,
									gratuitement pendant 1 an.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</aside>
		</>
	);
}
