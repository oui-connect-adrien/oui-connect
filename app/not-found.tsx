import { Reveal, Slide } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-linear-to-br from-background to-background/50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center py-12 md:py-16 lg:py-24">
					{/* Icône */}
					<Reveal amount={0.2} delay={0} duration={0.4}>
						<div className="mb-8 flex justify-center">
							<div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
								<FileQuestion className="w-12 h-12 text-primary" />
							</div>
						</div>
					</Reveal>

					{/* Titre */}
					<Reveal amount={0.2} delay={0.1} duration={0.4}>
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
							404
						</h1>
					</Reveal>

					<Slide direction="up" delay={0.2} duration={0.4}>
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
							Page introuvable
						</h2>
					</Slide>

					<Slide direction="up" delay={0.3} duration={0.4}>
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
							Désolé, la page que vous recherchez n'existe pas ou a été
							déplacée. Vérifiez l'URL ou retournez à l'accueil pour explorer
							nos solutions.
						</p>
					</Slide>

					{/* Actions */}
					<Reveal amount={0.3} delay={0.4} duration={0.5}>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button asChild size="lg" className="w-full sm:w-auto gap-2">
								<Link href="/">
									<Home className="w-5 h-5" />
									Retour à l'accueil
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full sm:w-auto gap-2"
							>
								<Link href="/#solutions">
									<Search className="w-5 h-5" />
									Découvrir nos solutions
								</Link>
							</Button>
						</div>
					</Reveal>

					{/* Informations supplémentaires */}
					<Slide direction="up" delay={0.5} duration={0.4}>
						<div className="mt-16 p-6 md:p-8 bg-primary/5 rounded-xl border border-primary/10 max-w-2xl mx-auto">
							<h3 className="text-lg font-semibold text-foreground mb-3">
								Besoin d'aide ?
							</h3>
							<p className="text-muted-foreground leading-relaxed mb-4">
								Si vous pensez qu'il s'agit d'une erreur ou si vous avez besoin
								d'assistance, n'hésitez pas à nous contacter.
							</p>
							<Button asChild variant="link" className="p-0 h-auto">
								<Link href="/#contact">Contactez-nous</Link>
							</Button>
						</div>
					</Slide>

					{/* Contenu pour l'accessibilité */}
					<p className="sr-only">
						Erreur 404 - Page non trouvée. La page que vous recherchez n'existe
						pas sur le site Oui-Connect. Vous pouvez retourner à la page
						d'accueil ou explorer nos solutions de technologies web pour
						équipements industriels.
					</p>
				</div>
			</div>
		</div>
	);
}
