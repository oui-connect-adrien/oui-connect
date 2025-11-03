import { Reveal, SlideIn } from "@/shared/components/animations";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { VALUES } from ".";

export function About() {
	return (
		<section
			id="qui-sommes-nous"
			className="py-12 md:py-16 lg:py-24 bg-linear-to-br from-background to-background/50"
			aria-label="À propos de Oui-Connect, solutions web pour équipements industriels"
			role="region"
			data-voice-queries="qui est oui-connect,entreprise technologies web,solutions industrielles"
			data-content-type="company-profile"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<p className="sr-only">
				Oui-Connect est une entreprise fondée en 2018 spécialisée dans les
				technologies du web au service des équipements et installations
				industriels. Nous proposons des solutions logicielles simples et
				accessibles pour maîtriser vos données.
			</p>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* En-tête */}
				<div className="text-left mb-12 md:mb-16">
					<div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-8">
						<div className="flex-1">
							<Reveal threshold={0.2} delay={0} duration={0.4}>
								<h2
									id="about-title"
									className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
								>
									Découvrez notre entreprise
								</h2>
							</Reveal>
							<SlideIn direction="up" delay={0.1} duration={0.4}>
								<p
									id="about-description"
									className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4"
								>
									Les dernières technologies du Web au service de vos
									équipements et installations.
								</p>
							</SlideIn>
						</div>
					</div>
				</div>

				{/* Présentation en deux colonnes */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
					<Reveal threshold={0.2} delay={0} duration={0.5}>
						<div className="space-y-6">
							<h3 className="text-2xl md:text-3xl font-semibold text-foreground">
								Présentation de Oui-Connect
							</h3>
							<div className="space-y-4 text-muted-foreground">
								<h4 className="text-lg font-medium text-foreground">
									Notre entreprise
								</h4>
								<p className="leading-relaxed">
									De nombreuses entreprises, petites ou grandes, sont encore
									aujourd'hui insuffisamment équipées pour maîtriser leurs
									données et ainsi optimiser leurs dépenses, leurs délais et la
									qualité de leurs services ou produits.
								</p>
								<p className="leading-relaxed">
									Fondée en{" "}
									<span
										className="font-semibold text-foreground"
										itemProp="foundingDate"
									>
										2018
									</span>
									, <span itemProp="name">Oui-Connect</span> est donc la
									concrétisation d'un projet innovant dont l'objectif consiste à
									rassembler les technologies du web afin d'améliorer la
									performance de vos équipements industriels.
								</p>
							</div>
						</div>
					</Reveal>

					<Reveal threshold={0.2} delay={0.1} duration={0.5}>
						<div className="space-y-6">
							<h3 className="text-2xl md:text-3xl font-semibold text-foreground">
								Notre vision et notre mission
							</h3>
							<div className="space-y-6">
								<div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
									<h4 className="text-lg font-medium text-foreground mb-3">
										Vision
									</h4>
									<p className="leading-relaxed text-muted-foreground">
										Notre vision est un monde où chaque acteur est en mesure de
										maîtriser de manière autonome chaque donnée entrante ou
										sortante de son environnement.
									</p>
								</div>
								<div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
									<h4 className="text-lg font-medium text-foreground mb-3">
										Mission
									</h4>
									<p className="leading-relaxed text-muted-foreground">
										Nous croyons en un monde où chacun peut garder le contrôle
										de ses données, simplement. C’est pourquoi nous créons des
										solutions logicielles web, accessibles, intuitives et
										pensées pour une adoption rapide, partout et par tous.
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>

				{/* Section Valeurs */}
				<div className="mb-16 md:mb-20">
					<SlideIn direction="up" delay={0} duration={0.4}>
						<div className="text-center mb-12">
							<h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
								Nos valeurs
							</h3>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								Les principes qui guident notre action quotidienne
							</p>
						</div>
					</SlideIn>

					<div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
						{VALUES.map((value, index) => (
							<Reveal
								key={value.id}
								threshold={0.2}
								delay={index * 0.1}
								duration={0.5}
							>
								<div className="group bg-background/80 p-6 md:p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg h-full">
									<div className="flex items-start gap-4">
										<div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
											<value.icon className="w-6 h-6 text-primary" />
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-semibold text-foreground mb-3">
												{value.title}
											</h4>
											<p className="text-muted-foreground leading-relaxed text-sm md:text-base">
												{value.description}
											</p>
										</div>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>

				{/* Appel à l'action */}
				<Reveal threshold={0.3} delay={0} duration={0.5}>
					<div className="text-center bg-linear-to-r from-primary/10 to-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20">
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
							Prêt à découvrir nos solutions ?
						</h3>
						<p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
							Laissez-nous vous accompagner dans la maîtrise de vos données et
							l'optimisation de vos équipements industriels.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button asChild size="lg" className="w-full sm:w-auto">
								<Link href="#solutions">Découvrir nos solutions</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full sm:w-auto"
							>
								<Link href="#contact">Nous contacter</Link>
							</Button>
						</div>
					</div>
				</Reveal>

				{/* Informations supplémentaires cachées pour le SEO */}
				<div className="sr-only">
					<span itemProp="foundingLocation">France</span>
					<span itemProp="industry">
						Technologies web et solutions industrielles
					</span>
					<span itemProp="numberOfEmployees">Équipe passionnée</span>
					<span itemProp="description">
						Oui-Connect propose des solutions logicielles basées sur les
						dernières technologies du web pour améliorer la performance des
						équipements industriels.
					</span>
				</div>
			</div>
		</section>
	);
}
