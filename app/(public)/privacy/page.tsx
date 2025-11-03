"use client";

import { motion } from "framer-motion";
import {
	Database,
	Eye,
	Lock,
	Shield,
	Trash2,
	User,
	UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
	const principles = [
		{
			icon: <Shield className="w-8 h-8" />,
			title: "Transparence",
			description:
				"Nous vous informons clairement sur les données collectées et leur utilisation.",
		},
		{
			icon: <Lock className="w-8 h-8" />,
			title: "Sécurité",
			description:
				"Vos données sont protégées par des mesures de sécurité appropriées.",
		},
		{
			icon: <UserCheck className="w-8 h-8" />,
			title: "Consentement",
			description:
				"Nous recueillons votre consentement avant de traiter vos données personnelles.",
		},
		{
			icon: <Eye className="w-8 h-8" />,
			title: "Contrôle",
			description:
				"Vous gardez le contrôle sur vos données et pouvez les modifier ou les supprimer.",
		},
	];

	const dataTypes = [
		{
			title: "Données d'identification",
			items: [
				"Nom et prénom",
				"Adresse email",
				"Numéro de téléphone",
				"Nom de l'entreprise",
			],
			purpose:
				"Traitement des demandes de contact et communication commerciale",
			retention: "3 ans à compter du dernier contact",
		},
		{
			title: "Données de navigation",
			items: [
				"Adresse IP",
				"Type de navigateur",
				"Pages visitées",
				"Durée de visite",
			],
			purpose:
				"Amélioration de l'expérience utilisateur et statistiques du site",
			retention: "13 mois maximum",
		},
		{
			title: "Cookies techniques",
			items: [
				"Cookies de session",
				"Préférences utilisateur",
				"Cookies de sécurité",
			],
			purpose: "Fonctionnement technique du site web",
			retention: "Durée de la session ou selon la finalité",
		},
	];

	const rights = [
		{
			icon: <User className="w-6 h-6" />,
			title: "Droit d'accès",
			description:
				"Vous pouvez demander l'accès aux données personnelles que nous détenons sur vous.",
		},
		{
			icon: <Database className="w-6 h-6" />,
			title: "Droit de rectification",
			description:
				"Vous pouvez demander la correction de vos données personnelles inexactes.",
		},
		{
			icon: <Trash2 className="w-6 h-6" />,
			title: "Droit d'effacement",
			description:
				"Vous pouvez demander la suppression de vos données personnelles.",
		},
		{
			icon: <Lock className="w-6 h-6" />,
			title: "Droit à la portabilité",
			description:
				"Vous pouvez récupérer vos données dans un format structuré.",
		},
		{
			icon: <Shield className="w-6 h-6" />,
			title: "Droit d'opposition",
			description:
				"Vous pouvez vous opposer au traitement de vos données personnelles.",
		},
		{
			icon: <UserCheck className="w-6 h-6" />,
			title: "Droit à la limitation",
			description:
				"Vous pouvez demander la limitation du traitement de vos données.",
		},
	];

	return (
		<div className="relative py-4 antialiased overflow-hidden">
			{/* Hero Section */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col items-center">
				<motion.div
					className="text-center max-w-4xl mx-auto"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 text-zinc-700">
						Politique de confidentialité
					</h1>
					<p className="text-base md:text-xl text-zinc-500 tracking-wide mb-8">
						Votre vie privée est importante pour nous. Découvrez comment nous
						protégeons et utilisons vos données personnelles.
					</p>
					<p className="text-sm text-zinc-400">
						Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
					</p>
				</motion.div>
			</div>

			{/* Principles Section */}
			<div className="bg-zinc-100 mt-24 py-14">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-3xl font-bold mb-12 text-center text-neutral-700"
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Nos principes de protection des données
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{principles.map((principle, index) => (
							<motion.div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md text-center"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="text-blue-600 mb-4 flex justify-center">
									{principle.icon}
								</div>
								<h3 className="text-xl font-semibold text-zinc-700 mb-3">
									{principle.title}
								</h3>
								<p className="text-zinc-600 text-sm">{principle.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Data Collection Section */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
				<motion.h2
					className="text-3xl font-bold mb-12 text-center text-neutral-700"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Quelles données collectons-nous ?
				</motion.h2>
				<div className="max-w-5xl mx-auto space-y-8">
					{dataTypes.map((dataType, index) => (
						<motion.div
							key={index}
							className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
								{dataType.title}
							</h3>
							<div className="grid md:grid-cols-3 gap-6">
								<div>
									<h4 className="font-semibold text-zinc-700 mb-2">
										Données collectées :
									</h4>
									<ul className="list-disc list-inside space-y-1 text-zinc-600">
										{dataType.items.map((item, itemIndex) => (
											<li key={itemIndex} className="text-sm">
												{item}
											</li>
										))}
									</ul>
								</div>
								<div>
									<h4 className="font-semibold text-zinc-700 mb-2">
										Finalité :
									</h4>
									<p className="text-zinc-600 text-sm">{dataType.purpose}</p>
								</div>
								<div>
									<h4 className="font-semibold text-zinc-700 mb-2">
										Durée de conservation :
									</h4>
									<p className="text-zinc-600 text-sm">{dataType.retention}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Rights Section */}
			<div className="bg-zinc-100 mt-24 py-14">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h2
						className="text-3xl font-bold mb-12 text-center text-neutral-700"
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Vos droits sur vos données
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{rights.map((right, index) => (
							<motion.div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="flex items-start gap-3 mb-4">
									<div className="text-blue-600 mt-1">{right.icon}</div>
									<div>
										<h3 className="text-lg font-semibold text-zinc-700 mb-2">
											{right.title}
										</h3>
										<p className="text-zinc-600 text-sm">{right.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Additional Information */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
				<div className="max-w-4xl mx-auto space-y-12">
					<motion.div
						className="border-l-4 border-blue-600 pl-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
							Base légale du traitement
						</h3>
						<div className="space-y-4 text-zinc-600">
							<p>Le traitement de vos données personnelles est fondé sur :</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									<strong>Votre consentement</strong> pour les communications
									marketing et les cookies non essentiels
								</li>
								<li>
									<strong>L'exécution d'un contrat</strong> pour le traitement
									de vos demandes de services
								</li>
								<li>
									<strong>L'intérêt légitime</strong> pour l'amélioration de nos
									services et la sécurité du site
								</li>
								<li>
									<strong>L'obligation légale</strong> pour la conservation de
									certaines données comptables
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className="border-l-4 border-blue-600 pl-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
							Partage des données
						</h3>
						<div className="space-y-4 text-zinc-600">
							<p>
								Nous ne vendons, ne louons, ni ne partageons vos données
								personnelles avec des tiers à des fins commerciales, sauf dans
								les cas suivants :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Avec votre consentement explicite</li>
								<li>Pour respecter une obligation légale</li>
								<li>
									Avec nos prestataires techniques sous contrat de
									confidentialité
								</li>
								<li>En cas de fusion, acquisition ou cession d'actifs</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className="border-l-4 border-blue-600 pl-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
							Sécurité des données
						</h3>
						<div className="space-y-4 text-zinc-600">
							<p>
								Nous mettons en œuvre des mesures techniques et
								organisationnelles appropriées pour protéger vos données
								personnelles :
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Chiffrement des données sensibles</li>
								<li>
									Accès limité aux données sur la base du besoin d'en connaître
								</li>
								<li>Surveillance et audit réguliers de nos systèmes</li>
								<li>
									Formation de notre personnel à la protection des données
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className="border-l-4 border-blue-600 pl-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
							Cookies et technologies similaires
						</h3>
						<div className="space-y-4 text-zinc-600">
							<p>
								Notre site utilise des cookies pour améliorer votre expérience.
								Vous pouvez gérer vos préférences de cookies à tout moment.
							</p>
							<div className="bg-zinc-50 p-4 rounded-lg">
								<h4 className="font-semibold mb-2">
									Types de cookies utilisés :
								</h4>
								<ul className="list-disc list-inside space-y-1 text-sm">
									<li>
										<strong>Cookies essentiels :</strong> Nécessaires au
										fonctionnement du site
									</li>
									<li>
										<strong>Cookies analytiques :</strong> Pour comprendre
										l'utilisation du site
									</li>
									<li>
										<strong>Cookies de préférences :</strong> Pour mémoriser vos
										choix
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="bg-zinc-100 mt-24 py-24">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
					<motion.h3
						className="text-3xl font-bold mb-8 text-neutral-700"
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Exercer vos droits
					</motion.h3>
					<motion.p
						className="text-base text-zinc-500 max-w-2xl mb-12"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Pour exercer vos droits ou pour toute question concernant cette
						politique de confidentialité, contactez-nous. Nous nous engageons à
						répondre dans les meilleurs délais.
					</motion.p>
					<motion.div
						className="flex flex-col sm:flex-row gap-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Link
							href="/#contact"
							className="inline-flex items-center justify-center px-8 py-4 bg-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors duration-200"
						>
							Nous contacter
						</Link>
						<Link
							href="/legal"
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-700 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors duration-200"
						>
							Mentions légales
						</Link>
					</motion.div>

					<motion.div
						className="mt-12 text-sm text-zinc-400 max-w-2xl"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<p className="mb-2">
							<strong>Responsable du traitement :</strong> Oui-Connect
						</p>
						<p className="mb-2">
							<strong>Contact DPO :</strong>{" "}
							<a
								href="mailto:dpo@oui-connect.fr"
								className="text-blue-600 hover:text-blue-800"
							>
								dpo@oui-connect.fr
							</a>
						</p>
						<p>
							En cas de litige, vous pouvez saisir la CNIL :{" "}
							<a
								href="https://www.cnil.fr"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800"
							>
								www.cnil.fr
							</a>
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
