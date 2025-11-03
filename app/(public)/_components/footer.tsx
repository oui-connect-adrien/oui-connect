import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { cn } from "@/shared/utils";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { Heart, Lightbulb, Users, Zap } from "lucide-react";
import projects from "./projects";

export const legalLinks = [
	{ label: "Mentions légales", href: "/legal" },
	{ label: "Confidentialité", href: "/privacy" },
];

export const collaborationLinks = [
	{ label: "Demander un devis", href: "/#quote-request" },
];

export const platformLinks = [
	{
		label: "Oui-Access : monitoring industriel",
		href: "https://access.oui-connect.fr",
		description: "Plateforme de supervision 24/7 et maintenance prédictive",
	},
	{
		label: "Oui-Scan : traçabilité pour les entreprises",
		href: "https://oui-scan.com",
		description: "Application mobile de gestion par QR codes",
	},
];

export const companyLinks = [
	{ label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
	{ label: "Notre équipe", href: "/notre-equipe" },
	{ label: "Contact", href: "/#contact" },
];

export const VALUES = [
	{ icon: Heart, label: "Passion" },
	{ icon: Lightbulb, label: "Innovation" },
	{ icon: Users, label: "Esprit d'équipe" },
	{ icon: Zap, label: "Co-création" },
];

export function Footer() {
	return (
		<footer
			className="relative bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
			role="contentinfo"
			data-voice-queries="solutions oui-connect,contact entreprise,technologies web industrielles"
			data-content-type="footer-business"
			data-ai-category="tech-industrial-footer"
			itemScope
			itemType="https://schema.org/Organization"
		>
			{/* Contenu sr-only pour voice search */}
			<p className="sr-only">
				Footer du site Oui-Connect, entreprise spécialisée dans les technologies
				du web au service des équipements industriels. Retrouvez nos solutions,
				coordonnées de contact et informations légales.
			</p>

			{/* Grille de fond subtile */}
			<div className={cn("absolute inset-0 opacity-30")} aria-hidden="true">
				<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-background" />
			</div>

			{/* Dégradé radial pour effet de focus */}
			<div
				className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"
				aria-hidden="true"
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				{/* Navigation principale */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 lg:mb-16">
					{/* Solutions */}
					<nav aria-labelledby="footer-solutions-title">
						<h3
							id="footer-solutions-title"
							className="font-semibold text-foreground mb-4 text-base"
						>
							Nos solutions
						</h3>
						<ul className="space-y-3" role="list">
							{projects &&
								Array.isArray(projects) &&
								projects.map((project) => (
									<li key={project.link} role="listitem">
										<Link
											href={project.link}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
										>
											{project.name}
										</Link>
									</li>
								))}
						</ul>
					</nav>

					{/* Plateformes */}
					<nav aria-labelledby="footer-platforms-title">
						<h3
							id="footer-platforms-title"
							className="font-semibold text-foreground mb-4 text-base"
						>
							Nos plateformes
						</h3>
						<ul className="space-y-3" role="list">
							{platformLinks.map((link, index) => (
								<li key={index} role="listitem">
									<Link
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
										title={link.description}
									>
										{link.label} ↗
									</Link>
								</li>
							))}
							{collaborationLinks.map((link, index) => (
								<li key={`collab-${index}`} role="listitem">
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Notre entreprise */}
					<nav aria-labelledby="footer-company-title">
						<h3
							id="footer-company-title"
							className="font-semibold text-foreground mb-4 text-base"
						>
							Notre entreprise
						</h3>
						<ul className="space-y-3" role="list">
							{companyLinks.map((link, index) => (
								<li key={index} role="listitem">
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
									>
										{link.label}
									</Link>
								</li>
							))}
							<li role="listitem">
								<Link
									href="https://www.linkedin.com/company/ouiconnect"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
									aria-label="Suivre Oui-Connect sur LinkedIn (nouvelle fenêtre)"
								>
									LinkedIn
								</Link>
							</li>
						</ul>
					</nav>

					{/* Notre identité */}
					<div>
						<h3 className="font-semibold text-foreground mb-4 text-base">
							Notre identité
						</h3>
						<div className="space-y-4">
							<div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									<span className="font-medium text-foreground">Vision :</span>{" "}
									Un monde où chaque acteur maîtrise ses données.
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									<span className="font-medium text-foreground">Mission :</span>{" "}
									Créer des solutions web simples et accessibles.
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground mb-3 font-medium">
									Nos valeurs :
								</p>
								<div className="grid grid-cols-2 gap-2">
									{VALUES.map((value, index) => (
										<div key={index} className="flex items-center gap-2">
											<value.icon
												className="h-3 w-3 text-primary shrink-0"
												aria-hidden="true"
											/>
											<span className="text-xs text-muted-foreground">
												{value.label}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Section Contact */}
				<div className="mb-12 lg:mb-16">
					<div className="max-w-md">
						<h3 className="font-semibold text-foreground mb-4 text-base">
							Contact
						</h3>
						<div
							itemProp="contactPoint"
							itemScope
							itemType="https://schema.org/ContactPoint"
							className="space-y-3"
						>
							<div className="flex items-center gap-3">
								<Mail
									className="h-4 w-4 text-primary shrink-0"
									aria-hidden="true"
								/>
								<div className="min-w-0 flex-1">
									<Tooltip>
										<TooltipTrigger asChild>
											<a
												href="mailto:contact@oui-connect.fr"
												itemProp="email"
												className="text-sm text-muted-foreground hover:text-foreground transition-colors block truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
												aria-label="Envoyer un email à Oui-Connect"
											>
												contact@oui-connect.fr
											</a>
										</TooltipTrigger>
										<TooltipContent role="tooltip">
											<p>contact@oui-connect.fr</p>
										</TooltipContent>
									</Tooltip>
								</div>
							</div>

							<div
								itemProp="areaServed"
								itemScope
								itemType="https://schema.org/Place"
								className="flex items-center gap-3"
							>
								<MapPin
									className="h-4 w-4 text-primary shrink-0"
									aria-hidden="true"
								/>
								<span className="text-sm text-muted-foreground">
									<span itemProp="name">France</span> et international
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright et informations légales */}
				<div className="pt-8 border-t border-border/30">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
							<p className="text-sm text-muted-foreground">
								© 2025 <span itemProp="name">Oui-Connect</span>. Tous droits
								réservés.
							</p>
							<nav
								className="flex items-center gap-4"
								aria-label="Liens légaux et navigation"
							>
								<Link
									href="/plan-du-site"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
								>
									Plan du site
								</Link>
								{legalLinks.map((link, index) => (
									<Link
										key={index}
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
									>
										{link.label}
									</Link>
								))}
							</nav>
						</div>
						<Link
							href="#"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm px-3 py-2 -m-2"
							aria-label="Retour en haut de la page"
						>
							<ArrowUp className="h-4 w-4" aria-hidden="true" />
							Retour en haut
						</Link>
					</div>
				</div>

				{/* Informations supplémentaires cachées pour le SEO */}
				<div className="sr-only">
					<span itemProp="foundingDate">2018</span>
					<span itemProp="foundingLocation">France</span>
					<span itemProp="industry">
						Technologies web et solutions industrielles
					</span>
					<span itemProp="description">
						Oui-Connect propose des solutions logicielles basées sur les
						dernières technologies du web pour améliorer la performance des
						équipements industriels.
					</span>
				</div>
			</div>
		</footer>
	);
}
