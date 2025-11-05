import { Reveal, Slide } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	CheckCircle,
	Gauge,
	Shield,
	TrendingUp,
	Users,
	Wrench,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Installation d'instrumentation industrielle - Oui Connect",
	description:
		"Installation d'instrumentation industrielle par ENVA Consulting. Surveillance temps réel, maintenance prédictive, optimisation énergétique. Expertise complète pour industriels.",
	keywords: [
		"installation instrumentation industrielle",
		"instrumentation process",
		"surveillance temps réel industrielle",
		"maintenance prédictive",
		"optimisation énergétique industrielle",
		"calibration instruments",
		"ENVA Consulting",
		"audit technique industriel",
		"formation instrumentation",
		"sécurité industrielle",
	],
	openGraph: {
		title: "Installation d'instrumentation industrielle - ENVA Consulting",
		description:
			"Installation d'instrumentation pour surveillance temps réel, maintenance prédictive et optimisation énergétique industrielle.",
		url: `${process.env.WEBSITE_URL}/installation-instrumentation`,
		type: "website",
		images: [
			{
				url: `${process.env.WEBSITE_URL}/electric-wiring.jpg`,
				width: 1200,
				height: 630,
				alt: "Installation d'instrumentation industrielle",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Installation d'instrumentation industrielle",
		description:
			"Expertise en installation d'instrumentation pour l'industrie avec ENVA Consulting.",
		images: [`${process.env.WEBSITE_URL}/electric-wiring.jpg`],
	},
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/installation-instrumentation`,
	},
};

function InstallationInstrumentationPage() {
	const advantages = [
		{
			icon: Gauge,
			title: "Surveillance en temps réel",
			description:
				"Surveillez en temps réel les paramètres critiques d'un procédé (pression, température, débit, niveau, etc.)",
		},
		{
			icon: Shield,
			title: "Qualité et sécurité",
			description:
				"Garantissez la qualité et la sécurité de vos installations grâce à une instrumentation adaptée.",
		},
		{
			icon: TrendingUp,
			title: "Maintenance prédictive",
			description:
				"Réduisez les arrêts non planifiés grâce à une maintenance prédictive basée sur des données fiables.",
		},
		{
			icon: CheckCircle,
			title: "Optimisation énergétique",
			description:
				"Optimisez votre consommation énergétique et réduisez votre empreinte carbone de manière significative.",
		},
	];

	const services = [
		{
			icon: Wrench,
			title: "Audit et conseil technique",
			description:
				"Notre équipe d'experts analyse vos besoins et vous conseille sur les meilleures solutions d'instrumentation.",
		},
		{
			icon: CheckCircle,
			title: "Installation sur site",
			description:
				"Nous assurons l'installation complète dans le respect des normes de sécurité en vigueur.",
		},
		{
			icon: Gauge,
			title: "Calibration et mise en service",
			description:
				"Nos techniciens calibrent et mettent en service vos instruments pour garantir leur précision.",
		},
		{
			icon: Users,
			title: "Formation des équipes",
			description:
				"Nous formons vos équipes d'exploitation pour une utilisation optimale des instruments.",
		},
	];

	return (
		<>
			{/* Section Hero */}
			<section
				className="relative min-h-screen py-4 antialiased overflow-hidden flex items-center"
				aria-labelledby="installation-title"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<Slide direction="up" delay={0} duration={0.4}>
								<h1
									id="installation-title"
									className="text-4xl md:text-6xl font-bold text-foreground"
								>
									Installation d'instrumentation
								</h1>
							</Slide>
							<Slide direction="up" delay={0.1} duration={0.4}>
								<h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
									Un levier clé pour la performance énergétique et la
									compétitivité
								</h2>
							</Slide>
							<Slide direction="up" delay={0.2} duration={0.4}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Dans un contexte où la transition énergétique et
									l'optimisation des performances industrielles sont devenues
									des priorités, l'instrumentation joue un rôle fondamental.
								</p>
							</Slide>
							<Slide direction="up" delay={0.3} duration={0.4}>
								<Button asChild size="lg">
									<Link
										href="https://enva-consulting.fr/installation-d-instrumentation/"
										target="_blank"
									>
										Découvrir Enva Consulting
									</Link>
								</Button>
							</Slide>
						</div>
						<Reveal amount={0.2} delay={0.2} duration={0.5}>
							<div className="relative aspect-4/3 rounded-2xl overflow-hidden">
								<Image
									src="/electric-wiring.jpg"
									alt="Installation d'instrumentation industrielle"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Section Avantages */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<Slide direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Pourquoi investir dans l'instrumentation ?
							</h2>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Ces avantages contribuent directement à la rentabilité et à la
								compétitivité des sites industriels.
							</p>
						</Slide>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{advantages.map((advantage, index) => (
							<Reveal
								key={index}
								amount={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="h-full">
									<CardContent className="p-8">
										<advantage.icon className="w-12 h-12 text-primary mb-6" />
										<h3 className="text-2xl font-semibold text-foreground mb-4">
											{advantage.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{advantage.description}
										</p>
									</CardContent>
								</Card>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Section Services */}
			<section className="py-16 md:py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<Slide direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Une expertise complète au service des industriels
							</h2>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								ENVA Consulting ne se limite pas à la fourniture et à
								l'installation d'instruments. Notre approche globale garantit un
								accompagnement de bout en bout, assurant des résultats concrets
								et mesurables.
							</p>
						</Slide>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<Reveal
								key={index}
								amount={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="h-full">
									<CardContent className="p-8">
										<service.icon className="w-12 h-12 text-primary mb-6" />
										<h3 className="text-xl font-semibold text-foreground mb-4">
											{service.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</Reveal>
						))}
					</div>

					<div className="text-center mt-16">
						<Slide direction="up" delay={0} duration={0.4}>
							<h3 className="text-2xl font-semibold text-foreground mb-4">
								En savoir plus sur les solutions d'instrumentation
							</h3>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
								Pour découvrir comment nous pouvons vous accompagner dans la
								maîtrise de vos procédés et l'amélioration de votre efficacité
								énergétique, contactez nos experts.
							</p>
						</Slide>
						<Slide direction="up" delay={0.2} duration={0.4}>
							<Button asChild size="lg">
								<Link href="/#contact">Demander un audit</Link>
							</Button>
						</Slide>
					</div>
				</div>
			</section>

			{/* Section Expertise et technologies */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<Slide direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Technologies et expertise instrumentale
							</h2>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Notre partenaire ENVA Consulting met à votre disposition une
								expertise approfondie dans l'installation d'instrumentation
								industrielle moderne et performante.
							</p>
						</Slide>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h3 className="text-2xl font-semibold text-foreground">
								Types d'instrumentation que nous installons
							</h3>
							<div className="space-y-4">
								<div className="border-l-4 border-primary/30 pl-4">
									<h4 className="font-medium text-foreground mb-1">
										Capteurs de température (TT)
									</h4>
									<p className="text-muted-foreground text-sm">
										Thermocouples, sondes PT100, capteurs infrarouges pour
										surveillance précise des températures de procédé.
									</p>
								</div>
								<div className="border-l-4 border-primary/30 pl-4">
									<h4 className="font-medium text-foreground mb-1">
										Capteurs de pression (PT)
									</h4>
									<p className="text-muted-foreground text-sm">
										Transmetteurs de pression différentielle, absolue et
										relative pour contrôle optimal des fluides.
									</p>
								</div>
								<div className="border-l-4 border-primary/30 pl-4">
									<h4 className="font-medium text-foreground mb-1">
										Débitmètres (FT)
									</h4>
									<p className="text-muted-foreground text-sm">
										Débitmètres électromagnétiques, à ultrasons, vortex pour
										mesure précise des flux.
									</p>
								</div>
								<div className="border-l-4 border-primary/30 pl-4">
									<h4 className="font-medium text-foreground mb-1">
										Analyseurs de gaz et liquides
									</h4>
									<p className="text-muted-foreground text-sm">
										Analyseurs d'oxygène, pH-mètres, conductimètres pour
										contrôle qualité en continu.
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<h3 className="text-2xl font-semibold text-foreground">
								Secteurs d'application
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-background p-4 rounded-lg border">
									<h4 className="font-medium text-foreground mb-2">
										Agroalimentaire
									</h4>
									<p className="text-muted-foreground text-sm">
										Contrôle température, pH, débits pour sécurité alimentaire.
									</p>
								</div>
								<div className="bg-background p-4 rounded-lg border">
									<h4 className="font-medium text-foreground mb-2">Chimie</h4>
									<p className="text-muted-foreground text-sm">
										Mesures précises pour procédés chimiques complexes.
									</p>
								</div>
								<div className="bg-background p-4 rounded-lg border">
									<h4 className="font-medium text-foreground mb-2">
										Pharmaceutique
									</h4>
									<p className="text-muted-foreground text-sm">
										Instrumentation conforme GMP pour production stérile.
									</p>
								</div>
								<div className="bg-background p-4 rounded-lg border">
									<h4 className="font-medium text-foreground mb-2">Énergie</h4>
									<p className="text-muted-foreground text-sm">
										Monitoring continu pour optimisation énergétique.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section ROI et bénéfices */}
			<section className="py-16 md:py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<Slide direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Retour sur investissement d'une instrumentation performante
							</h2>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								L'installation d'une instrumentation moderne génère des
								bénéfices mesurables et un retour sur investissement rapide pour
								votre industrie.
							</p>
						</Slide>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="text-center">
							<CardContent className="p-8">
								<div className="text-3xl font-bold text-primary mb-4">
									15-25%
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-3">
									Réduction énergétique
								</h3>
								<p className="text-muted-foreground text-sm">
									Économies d'énergie moyennes grâce au monitoring continu et à
									l'optimisation des procédés industriels.
								</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-8">
								<div className="text-3xl font-bold text-primary mb-4">
									30-40%
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-3">
									Réduction maintenances
								</h3>
								<p className="text-muted-foreground text-sm">
									Diminution des coûts de maintenance grâce à la maintenance
									prédictive et à la détection précoce des anomalies.
								</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-8">
								<div className="text-3xl font-bold text-primary mb-4">
									18-24
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-3">
									Mois d'amortissement
								</h3>
								<p className="text-muted-foreground text-sm">
									Durée moyenne d'amortissement des investissements en
									instrumentation industrielle moderne.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="mt-12 bg-primary/5 p-8 rounded-2xl">
						<h3 className="text-xl font-semibold text-foreground mb-4 text-center">
							Pourquoi choisir une instrumentation professionnelle ?
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h4 className="font-medium text-foreground mb-3">
									Conformité réglementaire
								</h4>
								<p className="text-muted-foreground text-sm mb-4">
									Respectez les normes ISO 9001, ISO 14001, et réglementations
									sectorielles grâce à une instrumentation certifiée et
									traçable.
								</p>
								<h4 className="font-medium text-foreground mb-3">
									Sécurité renforcée
								</h4>
								<p className="text-muted-foreground text-sm">
									Prévenez les accidents industriels par un monitoring continu
									des paramètres critiques et des systèmes d'alarme fiables.
								</p>
							</div>
							<div>
								<h4 className="font-medium text-foreground mb-3">
									Compétitivité accrue
								</h4>
								<p className="text-muted-foreground text-sm mb-4">
									Optimisez vos rendements, réduisez vos coûts et améliorez la
									qualité de vos produits par un contrôle précis des procédés.
								</p>
								<h4 className="font-medium text-foreground mb-3">Durabilité</h4>
								<p className="text-muted-foreground text-sm">
									Réduisez votre empreinte carbone et optimisez l'usage des
									ressources grâce à une gestion intelligente de l'énergie.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default InstallationInstrumentationPage;
