import Link from "next/link";

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-white py-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Titre principal */}
				<header className="mb-16">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Politique de confidentialité
					</h1>
					<p className="text-gray-600 mb-2">
						Votre vie privée est importante pour nous. Découvrez comment nous
						protégeons et utilisons vos données personnelles.
					</p>
					<p className="text-sm text-gray-500">
						Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
					</p>
				</header>

				{/* Introduction */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Nos principes
					</h2>
					<div className="space-y-4 text-gray-700">
						<p>
							<strong>Transparence :</strong> Nous vous informons clairement sur les données collectées et leur utilisation.
						</p>
						<p>
							<strong>Sécurité :</strong> Vos données sont protégées par des mesures de sécurité appropriées.
						</p>
						<p>
							<strong>Consentement :</strong> Nous recueillons votre consentement avant de traiter vos données personnelles.
						</p>
						<p>
							<strong>Contrôle :</strong> Vous gardez le contrôle sur vos données et pouvez les modifier ou les supprimer.
						</p>
					</div>
				</section>

				<hr className="my-12 border-gray-200" />

				{/* Données collectées */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Quelles données collectons-nous ?
					</h2>

					<div className="space-y-8">
						{/* Données d'identification */}
						<div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Données d'identification
							</h3>
							<div className="space-y-3 text-gray-700">
								<div>
									<strong>Données collectées :</strong>
									<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
										<li>Nom et prénom</li>
										<li>Adresse email</li>
										<li>Numéro de téléphone</li>
										<li>Nom de l'entreprise</li>
									</ul>
								</div>
								<div>
									<strong>Finalité :</strong> Traitement des demandes de contact et communication commerciale
								</div>
								<div>
									<strong>Durée de conservation :</strong> 3 ans à compter du dernier contact
								</div>
							</div>
						</div>

						{/* Données de navigation */}
						<div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Données de navigation
							</h3>
							<div className="space-y-3 text-gray-700">
								<div>
									<strong>Données collectées :</strong>
									<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
										<li>Adresse IP</li>
										<li>Type de navigateur</li>
										<li>Pages visitées</li>
										<li>Durée de visite</li>
									</ul>
								</div>
								<div>
									<strong>Finalité :</strong> Amélioration de l'expérience utilisateur et statistiques du site
								</div>
								<div>
									<strong>Durée de conservation :</strong> 13 mois maximum
								</div>
							</div>
						</div>

						{/* Cookies techniques */}
						<div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Cookies techniques
							</h3>
							<div className="space-y-3 text-gray-700">
								<div>
									<strong>Données collectées :</strong>
									<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
										<li>Cookies de session</li>
										<li>Préférences utilisateur</li>
										<li>Cookies de sécurité</li>
									</ul>
								</div>
								<div>
									<strong>Finalité :</strong> Fonctionnement technique du site web
								</div>
								<div>
									<strong>Durée de conservation :</strong> Durée de la session ou selon la finalité
								</div>
							</div>
						</div>
					</div>
				</section>

				<hr className="my-12 border-gray-200" />

				{/* Vos droits */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Vos droits sur vos données
					</h2>
					<div className="space-y-4 text-gray-700">
						<p>
							<strong>Droit d'accès :</strong> Vous pouvez demander l'accès aux données personnelles que nous détenons sur vous.
						</p>
						<p>
							<strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données personnelles inexactes.
						</p>
						<p>
							<strong>Droit d'effacement :</strong> Vous pouvez demander la suppression de vos données personnelles.
						</p>
						<p>
							<strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré.
						</p>
						<p>
							<strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données personnelles.
						</p>
						<p>
							<strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement de vos données.
						</p>
					</div>
				</section>

				<hr className="my-12 border-gray-200" />

				{/* Base légale */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Base légale du traitement
					</h2>
					<div className="text-gray-700 space-y-3">
						<p>Le traitement de vos données personnelles est fondé sur :</p>
						<ul className="list-disc list-inside ml-4 space-y-2">
							<li>
								<strong>Votre consentement</strong> pour les communications marketing et les cookies non essentiels
							</li>
							<li>
								<strong>L'exécution d'un contrat</strong> pour le traitement de vos demandes de services
							</li>
							<li>
								<strong>L'intérêt légitime</strong> pour l'amélioration de nos services et la sécurité du site
							</li>
							<li>
								<strong>L'obligation légale</strong> pour la conservation de certaines données comptables
							</li>
						</ul>
					</div>
				</section>

				{/* Partage des données */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Partage des données
					</h2>
					<div className="text-gray-700 space-y-3">
						<p>
							Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers à des fins commerciales, sauf dans les cas suivants :
						</p>
						<ul className="list-disc list-inside ml-4 space-y-2">
							<li>Avec votre consentement explicite</li>
							<li>Pour respecter une obligation légale</li>
							<li>Avec nos prestataires techniques sous contrat de confidentialité</li>
							<li>En cas de fusion, acquisition ou cession d'actifs</li>
						</ul>
					</div>
				</section>

				{/* Sécurité */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Sécurité des données
					</h2>
					<div className="text-gray-700 space-y-3">
						<p>
							Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
						</p>
						<ul className="list-disc list-inside ml-4 space-y-2">
							<li>Chiffrement des données sensibles</li>
							<li>Accès limité aux données sur la base du besoin d'en connaître</li>
							<li>Surveillance et audit réguliers de nos systèmes</li>
							<li>Formation de notre personnel à la protection des données</li>
						</ul>
					</div>
				</section>

				{/* Cookies */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Cookies et technologies similaires
					</h2>
					<div className="text-gray-700 space-y-3">
						<p>
							Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies à tout moment.
						</p>
						<div>
							<strong>Types de cookies utilisés :</strong>
							<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
								<li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
								<li><strong>Cookies analytiques :</strong> Pour comprendre l'utilisation du site</li>
								<li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Transferts hors UE */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Transferts de données hors Union Européenne
					</h2>
					<div className="text-gray-700 space-y-3">
						<p>
							Certaines de vos données peuvent être transférées et hébergées en dehors de l'Union Européenne, notamment aux États-Unis, via nos prestataires techniques (hébergement, analytics).
						</p>
						<p>
							Ces transferts sont encadrés par des garanties appropriées conformément à l'article 46 du RGPD :
						</p>
						<ul className="list-disc list-inside ml-4 space-y-2">
							<li>
								<strong>Vercel (hébergement) :</strong> Certifié au Data Privacy Framework (DPF), qui assure un niveau de protection adéquat reconnu par la Commission européenne.
							</li>
							<li>
								<strong>Clauses contractuelles types :</strong> Nous utilisons les clauses contractuelles types de la Commission européenne avec nos sous-traitants.
							</li>
						</ul>
						<p>
							Pour plus d'informations sur les transferts de données, contactez-nous à{" "}
							<a href="mailto:dpo@oui-connect.fr" className="text-blue-600 hover:underline">
								dpo@oui-connect.fr
							</a>
						</p>
					</div>
				</section>

				<hr className="my-12 border-gray-200" />

				{/* Contact footer */}
				<footer>
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Exercer vos droits
					</h2>
					<div className="text-gray-700 space-y-4 mb-8">
						<p>
							Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité, contactez-nous. Nous nous engageons à répondre dans les meilleurs délais.
						</p>
						<div className="space-y-2">
							<p>
								<strong>Responsable du traitement :</strong> Oui-Connect
							</p>
							<p>
								<strong>Contact DPO :</strong>{" "}
								<a href="mailto:dpo@oui-connect.fr" className="text-blue-600 hover:underline">
									dpo@oui-connect.fr
								</a>
							</p>
							<p>
								En cas de litige, vous pouvez saisir la CNIL :{" "}
								<a
									href="https://www.cnil.fr"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									www.cnil.fr
								</a>
							</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
						<Link
							href="/#contact"
							className="inline-block px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
						>
							Nous contacter
						</Link>
						<Link
							href="/legal/terms"
							className="inline-block px-6 py-3 border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors"
						>
							Mentions légales
						</Link>
					</div>
				</footer>
			</div>
		</div>
	);
}
