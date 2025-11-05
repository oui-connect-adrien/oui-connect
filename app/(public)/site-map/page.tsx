import { Reveal, Slide } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileText, Phone, Users, Wrench } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Plan du site - Oui Connect",
	description:
		"Plan du site Oui Connect. Accédez rapidement à toutes nos pages : solutions industrielles, projets, équipe, contact, mentions légales. Navigation simplifiée.",
	keywords: [
		"plan du site Oui Connect",
		"navigation site web",
		"pages Oui Connect",
		"solutions industrielles",
		"monitoring industriel",
		"sitemap Oui Connect",
	],
	openGraph: {
		title: "Plan du site - Oui Connect",
		description:
			"Plan du site Oui Connect : accès rapide à toutes nos solutions de monitoring industriel et pages importantes.",
		url: `${process.env.WEBSITE_URL}/site-map`,
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Plan du site - Oui Connect",
		description: "Navigation simplifiée vers toutes les pages Oui Connect.",
	},
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/site-map`,
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function PlanDuSitePage() {
	const sections = [
		{
			title: "Solutions & Projets",
			icon: Building2,
			links: [
				{
					title: "Nos Solutions",
					href: "/#solutions",
					description: "Vue d'ensemble de nos solutions technologiques",
				},
				{
					title: "Oui-Access",
					href: "/projects/oui-access",
					description: "Supervision 24/7 et maintenance prédictive",
				},
				{
					title: "Oui-Energy",
					href: "/projects/oui-energy",
					description: "Optimisation énergétique industrielle",
				},
				{
					title: "Oui-Scan",
					href: "/projects/oui-scan",
					description: "Gestion par QR codes et traçabilité",
				},
				{
					title: "Oui-Diag",
					href: "/projects/oui-diag",
					description: "Diagnostic et analyse industrielle",
				},
			],
		},
		{
			title: "Services",
			icon: Wrench,
			links: [
				{
					title: "Installation d'instrumentation",
					href: "/installation-instrumentation",
					description:
						"Services d'installation et instrumentation industrielle",
				},
			],
		},
		{
			title: "Entreprise",
			icon: Users,
			links: [
				{
					title: "Qui sommes-nous",
					href: "/about",
					description: "Présentation de notre entreprise et notre mission",
				},
				{
					title: "Notre équipe",
					href: "/team",
					description: "Découvrez l'équipe Oui Connect",
				},
			],
		},
		{
			title: "Contact",
			icon: Phone,
			links: [
				{
					title: "Nous contacter",
					href: "/contact",
					description: "Formulaire de contact et informations",
				},
				{
					title: "Contact (section)",
					href: "/#contact",
					description: "Section contact de la page d'accueil",
				},
			],
		},
		{
			title: "Informations légales",
			icon: FileText,
			links: [
				{
					title: "Mentions légales",
					href: "/legal/terms",
					description: "Mentions légales et informations juridiques",
				},
				{
					title: "Politique de confidentialité",
					href: "/legal/privacy",
					description: "Protection des données et confidentialité",
				},
			],
		},
	];

	return (
		<div className="min-h-screen py-16 md:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* En-tête */}
				<div className="text-center mb-16">
					<Slide direction="up" delay={0} duration={0.4}>
						<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
							Plan du site
						</h1>
					</Slide>
					<Slide direction="up" delay={0.1} duration={0.4}>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Naviguez facilement sur notre site et découvrez toutes nos
							solutions de monitoring industriel, nos services et informations
							sur notre entreprise.
						</p>
					</Slide>
				</div>

				{/* Lien vers page d'accueil */}
				<div className="mb-12">
					<Reveal amount={0.2} delay={0} duration={0.4}>
						<Card className="bg-primary/5 border-primary/20">
							<CardContent className="p-8 text-center">
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Page d'accueil
								</h2>
								<p className="text-muted-foreground mb-6">
									Découvrez Oui Connect et nos solutions de digitalisation
									industrielle
								</p>
								<Link
									href="/"
									className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
								>
									Accueil - Oui Connect
								</Link>
							</CardContent>
						</Card>
					</Reveal>
				</div>

				{/* Sections du site */}
				<div className="grid gap-8">
					{sections.map((section, sectionIndex) => (
						<Reveal
							key={section.title}
							amount={0.2}
							delay={sectionIndex * 0.1}
							duration={0.5}
						>
							<Card>
								<CardContent className="p-8">
									<div className="flex items-center mb-6">
										<section.icon className="w-8 h-8 text-primary mr-4" />
										<h2 className="text-2xl font-semibold text-foreground">
											{section.title}
										</h2>
									</div>
									<div className="grid gap-4">
										{section.links.map((link) => (
											<div
												key={link.href}
												className="border-l-4 border-primary/30 pl-4"
											>
												<Link
													href={link.href}
													className="group block hover:bg-muted/50 p-3 rounded-lg transition-colors"
												>
													<h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
														{link.title}
													</h3>
													<p className="text-sm text-muted-foreground">
														{link.description}
													</p>
												</Link>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</Reveal>
					))}
				</div>

				{/* Section aide */}
				<div className="mt-16">
					<Reveal amount={0.2} delay={0} duration={0.4}>
						<Card className="bg-muted/30">
							<CardContent className="p-8 text-center">
								<h2 className="text-2xl font-semibold text-foreground mb-4">
									Besoin d'aide ?
								</h2>
								<p className="text-muted-foreground mb-6">
									Vous ne trouvez pas ce que vous cherchez ? N'hésitez pas à
									nous contacter directement.
								</p>
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
								>
									Nous contacter
								</Link>
							</CardContent>
						</Card>
					</Reveal>
				</div>

				{/* Informations SEO cachées */}
				<div className="sr-only">
					<h2>Navigation complète du site Oui Connect</h2>
					<p>
						Ce plan du site vous permet d'accéder rapidement à toutes nos pages
						: solutions de monitoring industriel (Oui-Access, Oui-Energy,
						Oui-Scan, Oui-Diag), services d'installation, informations sur notre
						équipe, contact et mentions légales.
					</p>
					<ul>
						{sections.map((section) =>
							section.links.map((link) => (
								<li key={link.href}>
									<a href={link.href}>
										{link.title} - {link.description}
									</a>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
