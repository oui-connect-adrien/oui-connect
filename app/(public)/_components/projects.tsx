import { Reveal, Slide } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const projects = [
	{
		id: "oui-diag",
		name: "Oui-Diag",
		imageUrl: "/oui-diag.jpg",
		description: "Diagnostics machines rapides",
		link: "/projects/oui-diag",
	},
	{
		id: "oui-access",
		name: "Oui-Access",
		imageUrl: "/oui-access.jpeg",
		description: "Supervision 24/7 de vos installations",
		link: "/projects/oui-access",
	},
	{
		id: "oui-scan",
		name: "Oui-Scan",
		imageUrl: "/oui-scan.jpg",
		description: "Identifiez, localisez et gérez vos équipements en un scan",
		link: "/projects/oui-scan",
	},
	{
		id: "oui-energy",
		name: "Oui-Energy",
		imageUrl: "/oui-energy.jpeg",
		description: "Suivi et optimisation de vos consommations énergétiques",
		link: "/projects/oui-energy",
	},
	{
		id: "installation-instrumentation",
		name: "Installation d'instrumentation",
		imageUrl: "/electric-wiring.jpg",
		description:
			"Nos partenaires installent vos instruments de mesure et boitier de monitoring",
		link: "/installation-instrumentation",
	},
];

export interface Project {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
	link: string;
}

export interface ProjectsProps {
	projects?: Project[];
	showCTA?: boolean;
	title?: string;
	description?: React.ReactNode;
}

export function Projects({
	projects: customProjects,
	showCTA = true,
	title = "Nos solutions",
	description,
}: ProjectsProps = {}) {
	const displayProjects = customProjects || projects;
	// Gestion du cas où il n'y a aucun projet
	if (!displayProjects || displayProjects.length === 0) {
		return (
			<section
				id="solutions"
				className="py-12 md:py-16 lg:py-24 bg-background"
				aria-label="Solutions technologiques Oui-Connect"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
							{title}
						</h2>
						<p className="text-muted-foreground">
							Aucune solution disponible pour le moment.
						</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section
			id="solutions"
			className="py-12 md:py-16 lg:py-24 bg-background"
			aria-label="Solutions technologiques Oui-Connect pour équipements industriels"
			role="region"
			data-voice-queries="solutions oui-connect,oui-diag,oui-access,oui-scan,oui-energy"
			data-content-type="solutions-showcase"
			itemScope
			itemType="https://schema.org/ItemList"
		>
			<p className="sr-only">
				Découvrez nos solutions technologiques : Oui-Diag pour le diagnostic,
				Oui-Access pour la surveillance, Oui-Scan pour la gestion par QR code,
				Oui-Energy pour la consommation énergétique et nos services
				d'installation.
			</p>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* En-tête */}
				<div className="text-left mb-12 md:mb-16">
					<div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-8">
						<div className="flex-1">
							<Reveal amount={0.2} delay={0} duration={0.4}>
								<h2
									id="solutions-title"
									className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
								>
									{title}
								</h2>
							</Reveal>
							<Slide direction="up" delay={0.1} duration={0.4}>
								<p
									id="solutions-description"
									className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4"
								>
									Des solutions innovantes pour optimiser vos équipements et
									installations. Complétées par nos{" "}
									<Link
										href="/installation-instrumentation"
										className="text-primary hover:text-primary/80 underline underline-offset-2 font-medium"
									>
										services d'instrumentation
									</Link>
									, nous vous accompagnons de A à Z.
								</p>
							</Slide>
						</div>
					</div>
				</div>

				{/* Grille des projets */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{displayProjects.map((project, index) => (
						<Reveal
							key={project.id}
							amount={0.2}
							delay={index * 0.1}
							duration={0.5}
						>
							<Link
								href={project.link}
								className="block group cursor-pointer tap-highlight-transparent active:scale-[0.98] transition-transform"
								aria-label={`Découvrir ${project.name} - ${project.description}`}
							>
								<Card className="h-full hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all duration-300 pt-0">
									<div className="relative w-full aspect-4/3 overflow-hidden rounded-t-xl">
										<Image
											src={project.imageUrl}
											alt={`${project.name} - ${project.description}`}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											priority={index < 3}
										/>
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold mb-2" itemProp="name">
											{project.name}
										</h3>
										<p
											className="text-muted-foreground text-sm leading-relaxed"
											itemProp="description"
										>
											{project.description}
										</p>
									</CardContent>
								</Card>
							</Link>
						</Reveal>
					))}
				</div>

				{/* Section complémentaire */}
				<div className="mt-16 md:mt-20">
					<Reveal amount={0.3} delay={0} duration={0.5}>
						<div className="text-center bg-linear-to-r from-primary/10 to-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20">
							<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
								Besoin d'une solution personnalisée ?
							</h3>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
								Nos équipes peuvent adapter nos solutions à vos besoins
								spécifiques ou développer des solutions sur mesure pour votre
								entreprise.
							</p>
							<p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
								Besoin d'une expertise technique ? Découvrez nos{" "}
								<Link
									href="/installation-instrumentation"
									className="text-primary hover:text-primary/80 underline underline-offset-2"
								>
									services d'installation d'instrumentation
								</Link>{" "}
								pour vos équipements industriels.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Link
									href="#contact"
									className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
								>
									Discuter de votre projet
								</Link>
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary bg-background border border-primary rounded-lg hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
								>
									Demander un devis
								</Link>
							</div>
						</div>
					</Reveal>
				</div>

				{/* Informations supplémentaires cachées pour le SEO */}
				<div className="sr-only">
					<span itemProp="numberOfItems">{displayProjects.length}</span>
					<span itemProp="itemListOrder">
						https://schema.org/ItemListOrderAscending
					</span>
					{displayProjects.map((project) => (
						<span
							key={project.id}
							itemProp="itemListElement"
							itemScope
							itemType="https://schema.org/ListItem"
						>
							<span itemProp="name">{project.name}</span>
							<span itemProp="description">{project.description}</span>
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
