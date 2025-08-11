import { Reveal, SlideIn } from "@/shared/components/animations";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Bell, Clock, Monitor, Settings, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function OuiAccessPage() {
	const features = [
		{
			title: "Conservez l'historique de vos données",
			description:
				"Paramétrez vos propres alarmes afin d'être alerté n'importe où et n'importe quand par mail ou SMS pour toutes dérives ou anomalies. Gérez vos alarmes et prévenez la personne adéquate via notre gestion des astreintes.",
			image: "/oui-access-2.png",
		},
		{
			title: "Visualiser la performance détaillée de vos équipements",
			description:
				"Accédez et visualisez vos données en temps réel par des graphiques détaillés pour chacune de vos installations. Personnalisez l'affichage des éléments de votre tableau de bord.",
			image: "/oui-access-3.png",
		},
		{
			title: "Analyser et exploiter vos données",
			description:
				"Exportez vos données de manière sécurisée en .csv ou .pdf et faites vos propres modèles d'analyse de la performance de vos équipements afin d'identifier les sources d'anomalies et les corriger.",
			image: "/oui-access-4.png",
		},
	];

	const benefits = [
		{
			icon: Bell,
			title: "Alertes en temps réel",
			description:
				"Soyez alertés en temps réel et depuis n'importe où de toutes anomalies, pannes ou dérives de vos équipements ou installations.",
		},
		{
			icon: Monitor,
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
				"La mise en place de notre solution ne prend en général qu'une demi-journée par équipement industriel.",
		},
		{
			icon: Settings,
			title: "Personnalisable",
			description:
				"Personnalisez l'interface de votre solution ainsi que de nombreux paramètres (alarmes, graphiques…) à votre goût.",
		},
	];

	const installationSteps = [
		{
			title: "Mise en place de la solution",
			description:
				"Nous intervenons pour installer la solution sur place ou à distance en fonction de vos contraintes.",
		},
		{
			title: "Connexion sécurisée",
			description:
				"Nous connectons la solution à nos serveurs de manière entièrement sécurisée et nous nous adaptons à vos contraintes.",
		},
		{
			title: "Accès aux données",
			description:
				"Nous réceptionnons vos données et les affichons directement sur votre écran lorsque vous vous connectez à notre solution.",
		},
	];

	return (
		<>
			{/* Section Hero */}
			<section
				className="relative min-h-screen py-4 antialiased overflow-hidden flex items-center"
				aria-labelledby="oui-access-title"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<SlideIn direction="up" delay={0} duration={0.4}>
								<h1
									id="oui-access-title"
									className="text-4xl md:text-6xl font-bold text-foreground"
								>
									Oui-Access
								</h1>
							</SlideIn>
							<SlideIn direction="up" delay={0.1} duration={0.4}>
								<h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
									Surveillez vos installations à distance grâce à notre système
									de supervision industrielle
								</h2>
							</SlideIn>
							<SlideIn direction="up" delay={0.2} duration={0.4}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Réduisez considérablement vos délais d'intervention de
									maintenance en cas d'anomalies sur vos équipements avec notre
									solution de supervision industrielle.
								</p>
							</SlideIn>
							<SlideIn direction="up" delay={0.3} duration={0.4}>
								<Button asChild size="lg">
									<Link href="/#contact">Choisir un abonnement</Link>
								</Button>
							</SlideIn>
						</div>
						<Reveal threshold={0.2} delay={0.2} duration={0.5}>
							<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
								<Image
									src="/oui-access-1.png"
									alt="Interface Oui-Access"
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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Fonctionnalités principales
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Surveillez à distance et avec précision l'état et la performance
								de vos équipements et gagnez en productivité.
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
										className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
									>
										<div
											className={`relative aspect-[4/3] ${index % 2 === 1 ? "md:col-start-2" : ""}`}
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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Pourquoi choisir Oui-Access ?
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Notre solution vous offre tous les outils nécessaires pour une
								supervision industrielle efficace.
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
				</div>
			</section>

			{/* Section Installation */}
			<section className="py-16 md:py-24 bg-primary/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Une installation très rapide
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Le processus d'installation est à la fois simple, rapide et
								sécurisé de manière à ce que vous puissiez en profiter très
								rapidement.
							</p>
						</SlideIn>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{installationSteps.map((step, index) => (
							<Reveal
								key={index}
								threshold={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="h-full text-center">
									<CardContent className="p-8">
										<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6">
											{index + 1}
										</div>
										<h3 className="text-xl font-semibold text-foreground mb-4">
											{step.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{step.description}
										</p>
									</CardContent>
								</Card>
							</Reveal>
						))}
					</div>

					<div className="text-center mt-12">
						<Reveal threshold={0.3} delay={0} duration={0.5}>
							<Button asChild size="lg">
								<Link href="/#contact">Choisir un abonnement</Link>
							</Button>
						</Reveal>
					</div>
				</div>
			</section>
		</>
	);
}

export default OuiAccessPage;
