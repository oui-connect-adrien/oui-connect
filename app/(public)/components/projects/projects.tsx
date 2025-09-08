import { Reveal, SlideIn } from "@/shared/components/animations";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from ".";

export function Projects() {
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

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* En-tête */}
				<div className="text-left mb-12 md:mb-16">
					<div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-8">
						<div className="flex-1">
							<Reveal threshold={0.2} delay={0} duration={0.4}>
								<h2
									id="solutions-title"
									className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
								>
									Nos solutions
								</h2>
							</Reveal>
							<SlideIn direction="up" delay={0.1} duration={0.4}>
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
							</SlideIn>
						</div>
					</div>
				</div>

				{/* Grille des projets */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<Reveal
							key={project.id}
							threshold={0.2}
							delay={index * 0.1}
							duration={0.5}
						>
							<Link
								href={project.link}
								className="block"
								aria-label={`Découvrir ${project.name} - ${project.description}`}
							>
								<Card className="h-full hover:shadow-md transition-shadow pt-0">
									<div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
										<Image
											src={project.imageUrl}
											alt={project.name}
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
					<Reveal threshold={0.3} delay={0} duration={0.5}>
						<div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20">
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
					<span itemProp="numberOfItems">{projects.length}</span>
					<span itemProp="itemListOrder">
						https://schema.org/ItemListOrderAscending
					</span>
					{projects.map((project) => (
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
