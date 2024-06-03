"use client";

import Link from "next/link";
import { projects } from "../app/(public)/_components/projects-list";

const Footer = () => {
	return (
		<footer className="lg:container lg:mt-20 mt-10 py-12 sm:py-16 lg:py-20">
			<div className="mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
					<div>
						<h4 className="font-semibold mb-4">Nos solutions</h4>
						<nav className="space-y-2">
							{projects.map((project) => (
								<Link key={project.link} href={project.link}>
									<span className="cursor-pointer text-muted-foreground text-sm block py-2">
										{project.name}
									</span>
								</Link>
							))}
						</nav>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Collaborations</h4>
						<nav className="space-y-2 flex flex-col">
							<Link href="/#quote-request">
								<span className="cursor-pointer text-muted-foreground text-sm block py-2">
									Demander un devis
								</span>
							</Link>
							<Link href="/#partners">
								<span className="cursor-pointer text-muted-foreground text-sm block">
									Partenariats
								</span>
							</Link>
						</nav>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Notre entreprise</h4>
						<nav className="space-y-2 flex flex-col">
							<Link href="/qui-sommes-nous">
								<span className=" text-muted-foreground cursor-pointer text-sm block py-2">
									Qui sommes-nous ?
								</span>
							</Link>
							<span className="text-sm text-muted-foreground">
								Réseaux sociaux
							</span>
						</nav>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Notre identité</h4>
						<p className="text-sm text-muted-foreground">
							Notre vision est un monde où chaque acteur est en mesure de
							maîtriser chaque donnée entrante ou sortante de son environnement.{" "}
							<br /> <br />
							Pour cela, notre mission est de créer et éditer des services
							logiciels basés sur les dernières technologies du web, de manière
							simple et accessible partout et pour tous.
						</p>
						<p className="text-sm mt-4 mb-6 text-muted-foreground">
							Nos valeurs :{" "}
						</p>
						<ul className="text-sm list-disc ml-2 mt-2 text-muted-foreground">
							<li>Passion</li>
							<li>Inovation</li>
							<li>Esprit d'équipe</li>
							<li>Co-création</li>
						</ul>
					</div>
				</div>
				<div className="mt-12 lg:mt-10 border-t pt-8 sm:pt-10 lg:pt-12 text-sm">
					<div className="flex items-center justify-between">
						<p>© 2024 Oui-Connect. Tous droits réservés.</p>
						<Link href="/mentions-legales">
							<span className="cursor-pointer text-sm text-muted-foreground">
								Mentions légales
							</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
