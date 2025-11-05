import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactFormWrapper } from "./contact-form-wrapper";

export function Contact() {
	return (
		<section
			id="contact"
			className="py-12 md:py-16 lg:py-24 bg-linear-to-br from-background to-background/50"
			aria-label="Contact Oui-Connect, solutions web pour équipements industriels"
			role="region"
			data-voice-queries="contacter oui-connect,contact entreprise,devis solutions web"
			data-business-hours="support-technique"
			data-contact-methods="email,formulaire,téléphone"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<p className="sr-only">
				Contactez Oui-Connect pour discuter de vos besoins en solutions web pour
				équipements industriels. Demandez un devis ou posez vos questions
				techniques. Nous vous répondons rapidement.
			</p>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* En-tête */}
				<div className="text-left mb-12 md:mb-16">
					<div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-8">
						<div className="flex-1">
							<Reveal amount={0.2} delay={0} duration={0.4}>
								<h2
									id="contact-title"
									className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
								>
									Contactez-nous
								</h2>
							</Reveal>
							<Reveal amount={0.2} delay={0.1} duration={0.4}>
								<p
									id="contact-description"
									className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4"
								>
									Discutons de vos besoins en solutions web pour optimiser vos
									équipements industriels. Notre équipe vous accompagne dans
									votre projet.
								</p>
							</Reveal>
						</div>
					</div>
				</div>

				{/* Informations de contact */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
					<Reveal amount={0.2} delay={0} duration={0.5}>
						<div className="bg-background/80 p-8 rounded-xl border border-border/50">
							<h3 className="text-2xl font-semibold text-foreground mb-6">
								Nos coordonnées
							</h3>

							<div
								itemScope
								itemType="https://schema.org/ContactPoint"
								className="space-y-6"
							>
								{/* Email */}
								<div className="flex items-center gap-4">
									<div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<Mail className="w-6 h-6 text-primary" aria-hidden="true" />
									</div>
									<div className="min-w-0 flex-1">
										<p className="text-sm font-medium text-foreground mb-1">
											Email
										</p>
										<Tooltip>
											<TooltipTrigger asChild>
												<Link
													href="mailto:info@oui-connect.fr"
													itemProp="email"
													className="text-sm text-muted-foreground hover:text-primary transition-colors block truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
													aria-label="Envoyer un email à Oui-Connect"
												>
													info@oui-connect.fr
												</Link>
											</TooltipTrigger>
											<TooltipContent role="tooltip">
												<p>info@oui-connect.fr</p>
											</TooltipContent>
										</Tooltip>
									</div>
								</div>

								{/* Téléphone */}
								<div className="flex items-center gap-4">
									<div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<Phone
											className="w-6 h-6 text-primary"
											aria-hidden="true"
										/>
									</div>
									<div className="min-w-0 flex-1">
										<p className="text-sm font-medium text-foreground mb-1">
											Téléphone
										</p>
										<Link
											href="tel:+33123456789"
											itemProp="telephone"
											className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
											aria-label="Appeler Oui-Connect"
										>
											+33 (0)6 37 73 72 05
										</Link>
									</div>
								</div>

								{/* Zone d'intervention */}
								<div className="flex items-center gap-4">
									<div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<MapPin
											className="w-6 h-6 text-primary"
											aria-hidden="true"
										/>
									</div>
									<div
										className="min-w-0 flex-1"
										itemProp="areaServed"
										itemScope
										itemType="https://schema.org/Place"
									>
										<p className="text-sm font-medium text-foreground mb-1">
											Zone d'intervention
										</p>
										<div className="text-sm text-muted-foreground">
											<span itemProp="name">France</span> et international
										</div>
									</div>
								</div>
							</div>

							{/* Note sur les consultations */}
							<div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
								<p className="text-sm text-foreground/80 leading-relaxed">
									💡 <strong>Support technique :</strong> Nous proposons un
									accompagnement personnalisé pour l'implémentation et le suivi
									de vos solutions web industrielles.
								</p>
							</div>
						</div>
					</Reveal>

					{/* Formulaire de contact */}
					<Reveal amount={0.2} delay={0.1} duration={0.5}>
						<div className="bg-background/80 p-8 rounded-xl border border-border/50">
							<h3 className="text-2xl font-semibold text-foreground mb-6">
								Envoyez-nous un message
							</h3>
							<ContactFormWrapper />
						</div>
					</Reveal>
				</div>

				{/* Appel à l'action */}
				<Reveal amount={0.3} delay={0} duration={0.5}>
					<div className="text-center bg-linear-to-r from-primary/10 to-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20">
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
							Prêt à démarrer votre projet ?
						</h3>
						<p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
							Contactez-nous dès aujourd'hui pour discuter de vos besoins
							spécifiques et obtenir un devis personnalisé pour vos solutions
							web industrielles.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button asChild size="lg" className="w-full sm:w-auto">
								<Link href="mailto:info@oui-connect.fr">
									Nous écrire directement
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full sm:w-auto"
							>
								<Link href="/#solutions">Découvrir nos solutions</Link>
							</Button>
						</div>
					</div>
				</Reveal>

				{/* Informations supplémentaires cachées pour le SEO */}
				<div className="sr-only">
					<span itemProp="name">Oui-Connect</span>
					<span itemProp="foundingDate">2018</span>
					<span itemProp="foundingLocation">France</span>
					<span itemProp="industry">
						Technologies web et solutions industrielles
					</span>
					<span itemProp="description">
						Contactez Oui-Connect pour vos besoins en solutions web pour
						équipements industriels. Support technique et accompagnement
						personnalisé.
					</span>
				</div>
			</div>
		</section>
	);
}
