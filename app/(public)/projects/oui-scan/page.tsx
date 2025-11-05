import { Reveal, Slide } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Database,
	QrCode,
	Settings,
	Smartphone,
	Users,
	Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Oui-Scan - Traçabilité et identification par QR Code",
	description:
		"Oui-Scan : solution de traçabilité industrielle par QR Code. Identifiez, suivez et gérez vos équipements, produits et inventaires avec notre système de scan intelligent.",
	keywords: [
		"Oui-Scan",
		"traçabilité industrielle",
		"QR Code industriel",
		"identification équipements",
		"gestion inventaire",
		"scan mobile",
		"traçabilité produits",
		"système de scan",
	],
	openGraph: {
		title: "Oui-Scan - Traçabilité et identification par QR Code",
		description:
			"Solution de traçabilité industrielle par QR Code. Identifiez et suivez vos équipements avec notre système de scan intelligent.",
		url: `${process.env.WEBSITE_URL}/projects/oui-scan`,
		type: "website",
		images: [
			{
				url: `${process.env.WEBSITE_URL}/oui-scan-1.png`,
				width: 1200,
				height: 630,
				alt: "Oui-Scan - Traçabilité par QR Code",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oui-Scan - Traçabilité QR Code",
		description:
			"Solution de traçabilité industrielle par QR Code pour identifier et suivre vos équipements.",
		images: [`${process.env.WEBSITE_URL}/oui-scan-1.png`],
	},
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/projects/oui-scan`,
	},
};

function OuiScanPage() {
	const features = [
		{
			title: "Gérez vos équipements en un scan depuis votre smartphone",
			description:
				"Un inventaire immédiat, une traçabilité complète et une gestion mobile, accessible à tous, en quelques clics.",
			image: "/oui-scan-1.png",
		},
		{
			title: "Accédez à un espace entièrement dédié à vos produits",
			description:
				"Créez des dossiers, stockez et partagez des documents liés à vos produits. Alimentez la vie de vos équipements en ajoutant vos rapports d'intervention, photos, descriptions, et tout autres documents liés à vos équipements.",
			image: "/oui-scan-2.png",
		},
		{
			title: "Accélérez et automatisez la gestion de vos stocks",
			description:
				"Rattachez automatiquement vos produits à des dépôts ou chantiers spécifiques à vos activités d'un simple scan et simplifiez le suivi de vos mouvements de stocks. Synchronisez avec votre ERP.",
			image: "/oui-scan-3.png",
		},
		{
			title: "Personnalisez votre gestion",
			description:
				"Créez des objets directement dans notre application. Personnalisez vos étiquettes à vos équipements pour définir l'état, les propriétés et tout autres caractéristiques que vous souhaitez.",
			image: "/oui-scan-4.png",
		},
	];

	const benefits = [
		{
			icon: Zap,
			title: "Immédiat",
			description:
				"Bénéficiez de notre solution instantanément dès votre commande",
		},
		{
			icon: Settings,
			title: "Flexible",
			description:
				"Nos offres s'adaptent à vos besoins en permanence. Revalorisez ou rétrogradez votre abonnement à tout moment et sans frais.",
		},
		{
			icon: Users,
			title: "Accompagnement",
			description:
				"Familiarisez-vous sans difficulté à notre solution grâce à notre accompagnement complet durant les premiers mois de votre abonnement.",
		},
	];

	return (
		<>
			{/* Section Hero */}
			<section
				className="relative min-h-screen py-4 antialiased overflow-hidden flex items-center"
				aria-labelledby="oui-scan-title"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<Slide direction="up" delay={0} duration={0.4}>
								<h1
									id="oui-scan-title"
									className="text-4xl md:text-6xl font-bold text-foreground"
								>
									Oui-Scan
								</h1>
							</Slide>
							<Slide direction="up" delay={0.1} duration={0.4}>
								<h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
									Suivez et gérez vos produits directement depuis votre
									smartphone
								</h2>
							</Slide>
							<Slide direction="up" delay={0.2} duration={0.4}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Maîtrisez la gestion de vos produits en quelques clics.
									Scannez le QR code de vos produits pour les ajouter à votre
									inventaire.
								</p>
							</Slide>
							<Slide direction="up" delay={0.3} duration={0.4}>
								<Button asChild size="lg">
									<Link href="/#contact">Demander une démo</Link>
								</Button>
							</Slide>
						</div>
						<Reveal amount={0.2} delay={0.2} duration={0.5}>
							<div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
								<video
									autoPlay
									loop
									muted
									className="w-full h-full object-cover"
									poster="/oui-scan-video.png"
								>
									<source src="/oui-scan.mov" type="video/mp4" />
									<Image
										src="/oui-scan-video.png"
										alt="Oui-Scan mobile app"
										fill
										className="object-cover"
									/>
								</video>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Section Fonctionnalités */}
			<section className="py-16 md:py-24 bg-muted/30">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<Slide direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Fonctionnalités principales
							</h2>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Une solution complète pour optimiser la gestion de vos produits
								et équipements industriels.
							</p>
						</Slide>
					</div>

					<div className="grid gap-8">
						{features.map((feature, index) => (
							<Reveal
								key={index}
								amount={0.2}
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
						<Slide direction="up" delay={0} duration={0.4}>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Les points forts d'Oui-Scan
							</h2>
						</Slide>
						<Slide direction="up" delay={0.1} duration={0.4}>
							<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
								Parce qu'Oui-Scan est la solution la plus simple et la plus
								efficace pour gérer vos produits.
							</p>
						</Slide>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<Reveal
								key={index}
								amount={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<Card className="h-full text-center">
									<CardContent className="p-8">
										<benefit.icon className="w-12 h-12 text-primary mx-auto mb-6" />
										<h3 className="text-xl font-semibold text-foreground mb-4">
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
						<Reveal amount={0.3} delay={0} duration={0.5}>
							<Button asChild size="lg">
								<Link href="/#contact">Demander une démo</Link>
							</Button>
						</Reveal>
					</div>
				</div>
			</section>

			{/* Section Technologies */}
			<section className="py-16 md:py-24 bg-primary/5">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<Reveal amount={0.2} delay={0} duration={0.5}>
						<div className="text-center">
							<div className="flex justify-center items-center gap-8 mb-8">
								<QrCode className="w-16 h-16 text-primary" />
								<Smartphone className="w-16 h-16 text-primary" />
								<Database className="w-16 h-16 text-primary" />
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
								Une technologie simple et efficace
							</h2>
							<p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
								Grâce à la technologie QR Code et à notre application mobile
								intuitive, transformez votre smartphone en un outil puissant de
								gestion d'inventaire.
							</p>
							<div className="bg-background p-8 rounded-2xl border max-w-4xl mx-auto">
								<p className="text-lg font-medium text-foreground">
									✓ Scan instantané des QR codes
									<br />
									✓ Synchronisation en temps réel
									<br />
									✓ Interface mobile optimisée
									<br />✓ Intégration avec vos systèmes existants
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}

export default OuiScanPage;
