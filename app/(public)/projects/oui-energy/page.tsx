import { Reveal, SlideIn } from "@/shared/components/animations";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
	Award,
	BarChart3,
	Clock,
	CreditCard,
	Headphones,
	Palette,
	Shield,
	Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Oui-Energy - Optimisation énergétique industrielle",
	description:
		"Oui-Energy : solution d'optimisation énergétique pour l'industrie. Réduisez votre consommation, analysez vos données énergétiques et améliorez votre efficacité énergétique.",
	keywords: [
		"Oui-Energy",
		"optimisation énergétique",
		"efficacité énergétique industrielle",
		"réduction consommation énergie",
		"monitoring énergétique",
		"analyse données énergétiques",
		"économies d'énergie",
		"bilan énergétique industriel",
	],
	openGraph: {
		title: "Oui-Energy - Optimisation énergétique industrielle",
		description:
			"Solution d'optimisation énergétique pour l'industrie. Réduisez votre consommation et améliorez votre efficacité énergétique.",
		url: `${process.env.WEBSITE_URL}/projects/oui-energy`,
		type: "website",
		images: [
			{
				url: `${process.env.WEBSITE_URL}/oui-energy-1.png`,
				width: 1200,
				height: 630,
				alt: "Oui-Energy - Optimisation énergétique industrielle",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oui-Energy - Optimisation énergétique",
		description:
			"Solution d'optimisation énergétique pour réduire la consommation industrielle.",
		images: [`${process.env.WEBSITE_URL}/oui-energy-1.png`],
	},
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/projects/oui-energy`,
	},
};

function OuiEnergyPage() {
	const features = [
		{
			title: "Mesurer et surveiller",
			description:
				"Collectez et mesurez toutes les données et indicateurs de performance énergétiques nécessaires à votre suivi. Paramétrez vos propres alarmes afin d'être alerté n'importe où et n'importe quand.",
			image: "/oui-energy-2.jpeg",
		},
		{
			title: "Visualiser et analyser",
			description:
				"Visualisez vos données à l'aide de graphiques en temps réel. Synthétisez vos informations sous forme de rapports et de tableaux de bord énergétiques standards ou personnalisables.",
			image: "/oui-energy-3.png",
		},
		{
			title: "Installation simple et rapide",
			description:
				"Notre solution nécessite l'installation d'un petit boitier préconfiguré adaptable à toutes vos installations. L'installation se fait en moins d'une demi-journée.",
			image: "/oui-energy-4.png",
		},
		{
			title: "Connexion sécurisée",
			description:
				"Une fois installé nous connectons à distance le boîtier à internet. Les données sont ensuite transmises et stockées directement sur nos serveurs sécurisés.",
			image: "/oui-energy-5.png",
		},
	];

	const benefits = [
		{
			icon: Zap,
			title: "Temps réel",
			description:
				"Automatisez le suivi de votre consommation énergétique et soyez alerté en temps réel de toutes dérives, identifiez vos pertes énergétiques et réduisez votre facture énergétique.",
		},
		{
			icon: BarChart3,
			title: "Centralisation",
			description:
				"Facilitez votre suivi énergétique en accédant à vos indicateurs de performance énergétique pour l'ensemble de vos installations en un seul endroit.",
		},
		{
			icon: Shield,
			title: "Sécurisé",
			description:
				"Nous mettons tout en œuvre pour sécuriser vos données à tout moment et éliminer tout risque de fuite.",
		},
		{
			icon: Clock,
			title: "Installation rapide",
			description:
				"La mise en place du boitier de monitoring énergétique ne prend en général qu'une demi-journée par équipement industriel.",
		},
		{
			icon: Headphones,
			title: "Support gratuit",
			description:
				"Notre support est disponible gratuitement pour répondre à toutes vos difficultés. Vous recevrez une réponse dans un délai maximum de 48 heures ouvrées.",
		},
		{
			icon: Palette,
			title: "Personnalisable",
			description:
				"Personnalisez l'interface de votre solution ainsi que de nombreux paramètres (alarmes, graphiques…) à votre goût.",
		},
	];

	const guarantees = [
		{
			icon: Award,
			title: "Éligible aux CEE",
			description:
				"Notre solution est éligible aux Certificats d'Économies d'Énergie (IND-UT-134). Vous pouvez ainsi bénéficier d'une prime partielle ou totale de la part d'un fournisseur d'énergie.",
		},
		{
			icon: CreditCard,
			title: "3 mois offerts",
			description:
				"Bénéficiez de 3 mois gratuits à notre service de monitoring. Ainsi, vous ne prenez aucun risque en l'essayant.",
		},
		{
			icon: Shield,
			title: "Sans engagement",
			description:
				"L'accès à notre solution se fait sans engagement. Vous pouvez résilier votre abonnement à tout moment.",
		},
	];
	return (
		<>
			{/* Section Hero */}
			<section
				className="relative min-h-screen py-4 antialiased overflow-hidden flex items-center"
				aria-labelledby="oui-energy-title"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<SlideIn direction="up" delay={0} duration={0.4}>
								<h1
									id="oui-energy-title"
									className="text-4xl md:text-6xl font-bold text-foreground"
								>
									Oui-Energy
								</h1>
							</SlideIn>
							<SlideIn direction="up" delay={0.1} duration={0.4}>
								<h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
									Une solution de monitoring énergétique simple et accessible
								</h2>
							</SlideIn>
							<SlideIn direction="up" delay={0.2} duration={0.4}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Réduisez votre consommation et centralisez les données
									énergétiques de toutes vos installations grâce à notre
									solution de monitoring énergétique, éligible aux CEE.
								</p>
							</SlideIn>
							<SlideIn direction="up" delay={0.3} duration={0.4}>
								<Button asChild size="lg">
									<Link href="/#contact">Nous contacter</Link>
								</Button>
							</SlideIn>
						</div>
						<Reveal threshold={0.2} delay={0.2} duration={0.5}>
							<div className="relative aspect-4/3 rounded-2xl overflow-hidden">
								<Image
									src="/oui-energy-1.png"
									alt="Interface Oui-Energy"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Section Fonctionnalités */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Fonctionnalités principales
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Simplifiez-vous la vie, maîtrisez votre consommation d'énergie
								et faites de grosses économies de temps et d'argent grâce à une
								solution unique de monitoring énergétique.
							</p>
						</SlideIn>
					</div>

					<div className="grid gap-8">
						{features.map((feature, index) => (
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
												src={feature.image}
												alt={feature.title}
												fill
												className="object-cover"
											/>
										</div>
										<CardContent className="p-8">
											<h3 className="text-2xl font-semibold text-foreground mb-4">
												{feature.title}
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												{feature.description}
											</p>
										</CardContent>
									</div>
								</Card>
							</Reveal>
						))}
					</div>
				</div>
			</section>
			{/* Section Avantages */}
			<section className="py-16 md:py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Pourquoi choisir Oui-Energy ?
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Notre solution vous offre tous les outils nécessaires pour une
								gestion énergétique efficace et rentable.
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
									<CardContent className="p-6">
										<benefit.icon className="w-12 h-12 text-primary mb-4" />
										<h3 className="text-xl font-semibold text-foreground mb-3">
											{benefit.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{benefit.description}
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
			{/* Section Garanties */}
			<section className="py-16 md:py-24 bg-primary/5">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Des garanties solides pour limiter vos risques
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Pour vous aider à passer à l'action et enfin maîtriser votre
								consommation énergétique, nous vous proposons une offre
								totalement exceptionnelle.
							</p>
						</SlideIn>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{guarantees.map((guarantee, index) => (
							<Reveal
								key={index}
								threshold={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="h-full text-center">
									<CardContent className="p-8">
										<guarantee.icon className="w-12 h-12 text-primary mx-auto mb-6" />
										<h3 className="text-xl font-semibold text-foreground mb-4">
											{guarantee.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{guarantee.description}
										</p>
									</CardContent>
								</Card>
							</Reveal>
						))}
					</div>

					<div className="text-center mt-12">
						<p className="text-muted-foreground text-sm italic mb-8">
							*Hors frais éventuels de mise en place de la solution
						</p>
						<Reveal threshold={0.3} delay={0} duration={0.5}>
							<Button asChild size="lg">
								<Link href="/#contact">Nous contacter</Link>
							</Button>
						</Reveal>
					</div>
				</div>
			</section>
		</>
	);
}

export default OuiEnergyPage;
