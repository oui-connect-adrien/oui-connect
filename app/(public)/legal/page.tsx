import { Building2, Mail, MapPin, Phone, Scale, Shield } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
	const sections = [
		{
			icon: <Building2 className="w-8 h-8" />,
			title: "Informations sur l'éditeur",
			content: (
				<div className="space-y-4">
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">
							Dénomination sociale
						</h4>
						<p className="text-zinc-600">Oui-Connect</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">
							Forme juridique
						</h4>
						<p className="text-zinc-600">
							Société à responsabilité limitée (SARL)
						</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Capital social</h4>
						<p className="text-zinc-600">5 000,00 €</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Numéro SIREN</h4>
						<p className="text-zinc-600">841 255 839</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Numéro SIRET</h4>
						<p className="text-zinc-600">841 255 839 00018</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Code APE/NAF</h4>
						<p className="text-zinc-600">46.51Z</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">N° TVA Intracommunautaire</h4>
						<p className="text-zinc-600">FR92 841 255 839</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">RNE (ex-RCS)</h4>
						<p className="text-zinc-600">Immatriculée au Registre National des Entreprises</p>
						<p className="text-zinc-600 text-xs mt-1">Date d'immatriculation : 23/07/2018</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Activité principale</h4>
						<p className="text-zinc-600">Commerce de gros d'ordinateurs, d'équipements informatiques périphériques et de logiciels</p>
						<p className="text-zinc-600 text-xs mt-1">Code NAF/APE : 46.51Z</p>
					</div>
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Date de création</h4>
						<p className="text-zinc-600">5 juillet 2018</p>
					</div>
				</div>
			),
		},
		{
			icon: <MapPin className="w-8 h-8" />,
			title: "Siège social",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						45 Quai Emile Cormerais
						<br />
						44800 Saint-Herblain
						<br />
						France
					</p>
				</div>
			),
		},
		{
			icon: <Mail className="w-8 h-8" />,
			title: "Contact",
			content: (
				<div className="space-y-4">
					<div className="flex items-center gap-2">
						<Mail className="w-4 h-4 text-zinc-500" />
						<a
							href="mailto:info@oui-connect.fr"
							className="text-blue-600 hover:text-blue-800"
						>
							info@oui-connect.fr
						</a>
					</div>
					<div className="flex items-center gap-2">
						<Phone className="w-4 h-4 text-zinc-500" />
						<span className="text-zinc-600">+33 (0)2 40 38 11 85</span>
					</div>
				</div>
			),
		},
		{
			icon: <Shield className="w-8 h-8" />,
			title: "Directeur de la publication",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						Le directeur de la publication est Monsieur Adrien RICHARD, Gérant de la société Oui-Connect.
					</p>
				</div>
			),
		},
		{
			icon: <Scale className="w-8 h-8" />,
			title: "Hébergement",
			content: (
				<div className="space-y-4">
					<div>
						<h4 className="font-semibold text-zinc-700 mb-2">Hébergeur</h4>
						<p className="text-zinc-600">
							Vercel Inc.
						</p>
						<p className="text-zinc-600 text-sm mt-2">
							340 S Lemon Ave #4133<br />
							Walnut, CA 91789<br />
							États-Unis
						</p>
						<p className="text-zinc-600 text-sm mt-2">
							Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">vercel.com</a>
						</p>
					</div>
				</div>
			),
		},
	];

	const legalSections = [
		{
			title: "Propriété intellectuelle",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						L'ensemble de ce site relève de la législation française et
						internationale sur le droit d'auteur et la propriété intellectuelle.
						Tous les droits de reproduction sont réservés, y compris pour les
						documents téléchargeables et les représentations iconographiques et
						photographiques.
					</p>
					<p className="text-zinc-600">
						La reproduction de tout ou partie de ce site sur un support
						électronique quel qu'il soit est formellement interdite sauf
						autorisation expresse du directeur de la publication.
					</p>
				</div>
			),
		},
		{
			title: "Responsabilité",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						Les informations contenues sur ce site sont aussi précises que
						possible et le site remis à jour à différentes périodes de l'année,
						mais peut toutefois contenir des inexactitudes ou des omissions.
					</p>
					<p className="text-zinc-600">
						Si vous constatez une lacune, erreur ou ce qui paraît être un
						dysfonctionnement, merci de bien vouloir le signaler par email, à
						l'adresse{" "}
						<a
							href="mailto:info@oui-connect.fr"
							className="text-blue-600 hover:text-blue-800"
						>
							info@oui-connect.fr
						</a>
						, en décrivant le problème de la manière la plus précise possible.
					</p>
				</div>
			),
		},
		{
			title: "Liens hypertextes",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						Les liens hypertextes mis en place dans le cadre du présent site web
						en direction d'autres ressources présentes sur le réseau Internet ne
						sauraient engager la responsabilité de Oui-Connect.
					</p>
				</div>
			),
		},
		{
			title: "Collecte des données",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						Le site ne recueille des informations personnelles relatives à
						l'utilisateur que pour le besoin de certains services proposés par
						le site. L'utilisateur fournit ces informations en toute
						connaissance de cause, notamment lorsqu'il procède par lui-même à
						leur saisie.
					</p>
					<p className="text-zinc-600">
						Pour plus d'informations sur le traitement des données personnelles,
						consultez notre{" "}
						<Link href="/privacy" className="text-blue-600 hover:text-blue-800">
							politique de confidentialité
						</Link>
						.
					</p>
				</div>
			),
		},
		{
			title: "Cookies",
			content: (
				<div className="space-y-4">
					<p className="text-zinc-600">
						Le site peut être amené à vous demander l'acceptation des cookies
						pour des besoins de statistiques et d'affichage. Un cookie ne nous
						permet pas de vous identifier ; il enregistre seulement des
						informations relatives à la navigation de votre ordinateur sur notre
						site.
					</p>
				</div>
			),
		},
	];

	return (
		<div className="relative py-4 antialiased overflow-hidden">
			{/* Hero Section */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col items-center">
				<div className="text-center max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 text-zinc-700">
						Mentions légales
					</h1>
					<p className="text-base md:text-xl text-zinc-500 tracking-wide mb-8">
						Informations légales relatives au site oui-connect.fr
					</p>
				</div>
			</div>

			{/* Company Information Section */}
			<div className="bg-zinc-100 mt-24 py-14">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 text-center text-neutral-700">
						Informations sur la société
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{sections.map((section, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md"
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="text-blue-600">{section.icon}</div>
									<h3 className="text-xl font-semibold text-zinc-700">
										{section.title}
									</h3>
								</div>
								{section.content}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Legal Content Section */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
				<h2 className="text-3xl font-bold mb-12 text-center text-neutral-700">
					Dispositions légales
				</h2>
				<div className="max-w-4xl mx-auto space-y-12">
					{legalSections.map((section, index) => (
						<div
							key={index}
							className="border-l-4 border-blue-600 pl-6"
						>
							<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
								{section.title}
							</h3>
							{section.content}
						</div>
					))}
				</div>
			</div>

			{/* Contact CTA Section */}
			<div className="bg-zinc-100 mt-24 py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
					<h3 className="text-3xl font-bold mb-8 text-neutral-700">
						Des questions ?
					</h3>
					<p className="text-base text-zinc-500 max-w-2xl mb-12">
						Si vous avez des questions concernant ces mentions légales ou notre
						site web, n'hésitez pas à nous contacter.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							href="/#contact"
							className="inline-flex items-center justify-center px-8 py-4 bg-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors duration-200"
						>
							Nous contacter
						</Link>
						<Link
							href="/privacy"
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-700 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors duration-200"
						>
							Politique de confidentialité
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
