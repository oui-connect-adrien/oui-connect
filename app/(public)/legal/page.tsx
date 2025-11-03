import Link from "next/link";

export default function LegalPage() {
	return (
		<div className="min-h-screen bg-white py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Titre principal */}
				<header className="mb-16">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Mentions légales
					</h1>
					<p className="text-gray-600">
						Informations légales relatives au site oui-connect.fr
					</p>
				</header>

				{/* Informations sur l'éditeur */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Informations sur l'éditeur
					</h2>

					<div className="space-y-4 text-gray-700">
						<div>
							<strong>Dénomination sociale :</strong> Oui-Connect
						</div>
						<div>
							<strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)
						</div>
						<div>
							<strong>Capital social :</strong> 5 000,00 €
						</div>
						<div>
							<strong>Numéro SIREN :</strong> 841 255 839
						</div>
						<div>
							<strong>Numéro SIRET :</strong> 841 255 839 00018
						</div>
						<div>
							<strong>Code APE/NAF :</strong> 46.51Z
						</div>
						<div>
							<strong>N° TVA Intracommunautaire :</strong> FR92 841 255 839
						</div>
						<div>
							<strong>RNE (ex-RCS) :</strong> Immatriculée au Registre National des Entreprises
							<div className="text-sm text-gray-600 mt-1">Date d'immatriculation : 23/07/2018</div>
						</div>
						<div>
							<strong>Activité principale :</strong> Commerce de gros d'ordinateurs, d'équipements informatiques périphériques et de logiciels
							<div className="text-sm text-gray-600 mt-1">Code NAF/APE : 46.51Z</div>
						</div>
						<div>
							<strong>Date de création :</strong> 5 juillet 2018
						</div>
					</div>
				</section>

				{/* Siège social */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Siège social
					</h2>
					<address className="not-italic text-gray-700">
						45 Quai Emile Cormerais<br />
						44800 Saint-Herblain<br />
						France
					</address>
				</section>

				{/* Contact */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Contact
					</h2>
					<div className="space-y-2 text-gray-700">
						<div>
							<strong>Email :</strong>{" "}
							<a
								href="mailto:info@oui-connect.fr"
								className="text-blue-600 hover:underline"
							>
								info@oui-connect.fr
							</a>
						</div>
						<div>
							<strong>Téléphone :</strong> +33 (0)2 40 38 11 85
						</div>
					</div>
				</section>

				{/* Directeur de la publication */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Directeur de la publication
					</h2>
					<p className="text-gray-700">
						Le directeur de la publication est Monsieur Baptiste Warion.
					</p>
				</section>

				{/* Hébergement */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Hébergement
					</h2>
					<div className="space-y-2 text-gray-700">
						<div>
							<strong>Hébergeur :</strong> Vercel Inc.
						</div>
						<address className="not-italic">
							340 S Lemon Ave #4133<br />
							Walnut, CA 91789<br />
							États-Unis
						</address>
						<div>
							<strong>Site web :</strong>{" "}
							<a
								href="https://vercel.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								vercel.com
							</a>
						</div>
					</div>
				</section>

				<hr className="my-12 border-gray-200" />

				{/* Propriété intellectuelle */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Propriété intellectuelle
					</h2>
					<div className="space-y-4 text-gray-700">
						<p>
							L'ensemble de ce site relève de la législation française et
							internationale sur le droit d'auteur et la propriété intellectuelle.
							Tous les droits de reproduction sont réservés, y compris pour les
							documents téléchargeables et les représentations iconographiques et
							photographiques.
						</p>
						<p>
							La reproduction de tout ou partie de ce site sur un support
							électronique quel qu'il soit est formellement interdite sauf
							autorisation expresse du directeur de la publication.
						</p>
					</div>
				</section>

				{/* Responsabilité */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Responsabilité
					</h2>
					<div className="space-y-4 text-gray-700">
						<p>
							Les informations contenues sur ce site sont aussi précises que
							possible et le site remis à jour à différentes périodes de l'année,
							mais peut toutefois contenir des inexactitudes ou des omissions.
						</p>
						<p>
							Si vous constatez une lacune, erreur ou ce qui paraît être un
							dysfonctionnement, merci de bien vouloir le signaler par email, à
							l'adresse{" "}
							<a
								href="mailto:info@oui-connect.fr"
								className="text-blue-600 hover:underline"
							>
								info@oui-connect.fr
							</a>
							, en décrivant le problème de la manière la plus précise possible.
						</p>
					</div>
				</section>

				{/* Liens hypertextes */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Liens hypertextes
					</h2>
					<p className="text-gray-700">
						Les liens hypertextes mis en place dans le cadre du présent site web
						en direction d'autres ressources présentes sur le réseau Internet ne
						sauraient engager la responsabilité de Oui-Connect.
					</p>
				</section>

				{/* Collecte des données */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Collecte des données
					</h2>
					<div className="space-y-4 text-gray-700">
						<p>
							Le site ne recueille des informations personnelles relatives à
							l'utilisateur que pour le besoin de certains services proposés par
							le site. L'utilisateur fournit ces informations en toute
							connaissance de cause, notamment lorsqu'il procède par lui-même à
							leur saisie.
						</p>
						<p>
							Pour plus d'informations sur le traitement des données personnelles,
							consultez notre{" "}
							<Link href="/privacy" className="text-blue-600 hover:underline">
								politique de confidentialité
							</Link>
							.
						</p>
					</div>
				</section>

				{/* Cookies */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Cookies
					</h2>
					<p className="text-gray-700">
						Le site peut être amené à vous demander l'acceptation des cookies
						pour des besoins de statistiques et d'affichage. Un cookie ne nous
						permet pas de vous identifier ; il enregistre seulement des
						informations relatives à la navigation de votre ordinateur sur notre
						site.
					</p>
				</section>

				<hr className="my-12 border-gray-200" />

				{/* Contact footer */}
				<footer className="text-center">
					<p className="text-gray-600 mb-6">
						Pour toute question concernant ces mentions légales, contactez-nous.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/#contact"
							className="inline-block px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
						>
							Nous contacter
						</Link>
						<Link
							href="/privacy"
							className="inline-block px-6 py-3 border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors"
						>
							Politique de confidentialité
						</Link>
					</div>
				</footer>
			</div>
		</div>
	);
}
