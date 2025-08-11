import { Reveal, SlideIn } from "@/shared/components/animations";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
	CheckCircle,
	Gauge,
	Shield,
	TrendingUp,
	Users,
	Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<SlideIn direction="up" delay={0} duration={0.4}>
								<h1
									id="installation-title"
									className="text-4xl md:text-6xl font-bold text-foreground"
								>
									Installation d'instrumentation
								</h1>
							</SlideIn>
							<SlideIn direction="up" delay={0.1} duration={0.4}>
								<h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
									Un levier clé pour la performance énergétique et la
									compétitivité
								</h2>
							</SlideIn>
							<SlideIn direction="up" delay={0.2} duration={0.4}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Dans un contexte où la transition énergétique et
									l'optimisation des performances industrielles sont devenues
									des priorités, l'instrumentation joue un rôle fondamental.
								</p>
							</SlideIn>
							<SlideIn direction="up" delay={0.3} duration={0.4}>
								<Button asChild size="lg">
									<Link
										href="https://enva-consulting.fr/installation-d-instrumentation/"
										target="_blank"
									>
										Découvrir Enva Consulting
									</Link>
								</Button>
							</SlideIn>
						</div>
						<Reveal threshold={0.2} delay={0.2} duration={0.5}>
							<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Pourquoi investir dans l'instrumentation ?
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Ces avantages contribuent directement à la rentabilité et à la
								compétitivité des sites industriels.
							</p>
						</SlideIn>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{advantages.map((advantage, index) => (
							<Reveal
								key={index}
								threshold={0.2}
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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Une expertise complète au service des industriels
							</h2>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								ENVA Consulting ne se limite pas à la fourniture et à
								l'installation d'instruments. Notre approche globale garantit un
								accompagnement de bout en bout, assurant des résultats concrets
								et mesurables.
							</p>
						</SlideIn>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<Reveal
								key={index}
								threshold={0.2}
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
						<SlideIn direction="up" delay={0} duration={0.4}>
							<h3 className="text-2xl font-semibold text-foreground mb-4">
								En savoir plus sur les solutions d'instrumentation
							</h3>
						</SlideIn>
						<SlideIn direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
								Pour découvrir comment nous pouvons vous accompagner dans la
								maîtrise de vos procédés et l'amélioration de votre efficacité
								énergétique, contactez nos experts.
							</p>
						</SlideIn>
						<SlideIn direction="up" delay={0.2} duration={0.4}>
							<Button asChild size="lg">
								<Link href="/#contact">Demander un audit</Link>
							</Button>
						</SlideIn>
					</div>
				</div>
			</section>
		</>
	);
}

export default InstallationInstrumentationPage;
