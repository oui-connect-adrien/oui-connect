import { Reveal, SlideIn, Stagger } from "@/shared/components/animations";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export function Hero() {
	return (
		<section
			id="main-content"
			aria-labelledby="hero-title"
			data-voice-queries="gestion données produits,suivi produits,solutions web"
			data-business-intent="product-management-software"
			className="relative min-h-screen py-4 antialiased overflow-hidden flex items-center justify-center w-full flex-col px-4"
			itemScope
			itemType="https://schema.org/SoftwareApplication"
		>
			<p className="sr-only">
				Vous cherchez une solution pour maîtriser les données de vos produits ?
				Nos solutions web simples et accessibles vous permettent d'améliorer le
				suivi et la gestion de vos produits tout en gagnant du temps.
			</p>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-20">
				<div className="text-center space-y-8">
					{/* Titre principal optimisé SEO - Animation immédiate */}
					<SlideIn direction="up" delay={0} duration={0.4}>
						<h1
							id="hero-title"
							className="text-center text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mb-8 mt-8 md:mt-12"
						>
							Digitalisez vos équipements industriels avec Oui-Connect
						</h1>
					</SlideIn>

					{/* Description optimisée - Sans animation */}
					<h2 className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-500 text-center relative z-20 tracking-wide antialiased">
						<span itemProp="description">
							Améliorez le suivi et la gestion de votre matériel et gagnez du
							temps grâce à nos solutions web simples et accessibles.
						</span>
					</h2>

					{/* Informations techniques additionnelles */}
					<div className="sr-only">
						<span itemProp="applicationSubCategory">
							Gestion de données produits
						</span>
						<span itemProp="operatingSystem">Web</span>
						<span itemProp="softwareVersion">Latest</span>
						<span
							itemProp="offers"
							itemScope
							itemType="https://schema.org/Offer"
						>
							<span itemProp="availability">https://schema.org/InStock</span>
						</span>
					</div>

					{/* Boutons CTA optimisés - Animation au scroll avec Stagger */}
					<Reveal threshold={0.3} delay={0} duration={0.3}>
						<Stagger
							delay={0.1}
							staggerDelay={0.1}
							className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center relative z-20"
						>
							<Button
								asChild
								size="lg"
								className="text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							>
								<Link
									href="#solutions"
									aria-label="Découvrir nos solutions de gestion de données produits"
								>
									Découvrir nos solutions
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							>
								<Link href="#contact" aria-label="Nous contacter">
									Nous contacter
								</Link>
							</Button>
						</Stagger>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
