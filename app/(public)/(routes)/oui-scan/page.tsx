import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const advantages = [
		{
			title: "Immédiat",
			description:
				"Bénéficiez de notre solution instantanément dès votre commande",
		},
		{
			title: "Flexible",
			description:
				"Nos offres s’adaptent à vos besoins en permanence. Revalorisez ou rétrogradez votre abonnement à tout moment et sans frais.",
		},
		{
			title: "Accompagnement",
			description:
				"Familiarisez-vous sans difficulté à notre solution grâce à notre accompagnement complet durant les premiers mois de votre abonnement.",
		},
	];
	const content = [
		{
			title: "Gérez facilement votre parc matériel",
			description:
				"Ne perdez plus votre matériel. Géolocalisez précisément vos ressources matérielles. Historisez le parcours de chaque élément tout au long de sa vie. Identifiez instantanément votre matériel (descriptions, numéro d’identification, référence, informations du fabricant, caractéristiques…) d’un simple scan du QR Code associé. Vérifiez la disponibilité de votre parc matériel avec notre moteur de recherche. Rattachez vos ressources matérielles à des affaires et contrats clients pour optimiser votre picking.",
			content: (
				<div className="h-full w-full relative">
					<Image src="/oui-scan-1.png" fill alt="oui-scan-1" />
				</div>
			),
		},
		{
			title:
				"Accédez à un espace entièrement dédié à vos ressources matérielles",
			description:
				"Créez des dossiers, stockez et partagez des documents liés à votre matériel (notices, rapport d’intervention, certificat qualité…). Alimentez la vie de vos équipements en ajoutant vos rapports d’intervention, photos, descriptions, et tout autres documents liés à vos équipements. Créez et attribuez autant d’étiquettes (statuts, états, propriétés, caractéristiques, quantité en stock…) que souhaitées à chacuns de vos matériels.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-scan-2.png"
						width={300}
						height={400}
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Accélérez et automatisez la gestion de vos stocks",
			description:
				"Rattachez automatiquement vos ressources matérielles à des dépôts ou chantiers spécifiques à vos activités d’un simple scan et simplifiez le suivi de vos mouvements de stocks. Synchronisez automatiquement les informations et mouvements de stocks avec votre ERP. Modulez facilement les quantités en stocks de vos lots (consommables, groupes d’articles…) depuis votre smartphone. Restez à jour en permanence dans l’inventaire et les niveaux de stocks sur tous vos sytèmes d’information",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-scan-3.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Personnalisez votre gestion",
			description:
				"Créez des groupes et sous-groupes (entreprises, départements, services, secteur de marché…) directement dans notre application et rassemblez y vos ressources matérielles (produits, équipements, installations…) pour une meilleure gestion. Personnalisez autant que souhaités vos étiquettes à vos équipements pour définir l’état, les propriétés et tout autres caractéristiques que vous souhaitez. Paramétrez la gestion des droits et accès des utilisateurs au sein de votre groupe.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-scan-4.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
	];
	return (
		<>
			<div className="relative min-h-screen py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container lg:pt-40 pt-24 px-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 relative text-center text-zinc-700 max-w-5xl mx-auto">
						Suivez et gérez vos ressources matérielles directement <br />
						<span className="relative bg-clip-text text-transparent bg-gradient-to-t from-primary to-primary/[0.8] z-10">
							depuis votre smartphone
						</span>
					</h1>
					<div className="grid lg:grid-cols-2 gap-8 mt-10 py-4">
						<div className="relative w-1/2 mx-auto">
							<video autoPlay loop muted>
								<source src="/oui-scan.mp4" type="video/mp4" />
							</video>
						</div>

						<div className="flex flex-col gap-8 text-center lg:text-left lg:items-start items-center">
							<h2 className="text-2xl font-bold text-zinc-700 leading-snug ">
								Maitrisez la gestion de vos ressources matérielles (articles,
								produits, équipements, consommables…) en quelques clics.
							</h2>
							<p className="text-base text-zinc-500 mt-2">
								Scannez le QR code de vos ressources pour les ajouter à votre
								inventaire
							</p>
							<Link href="/contact">
								<Button className="text-lg w-[300px]" variant="outline">
									Choisir un abonnement
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-[500px] py-4 antialiased overflow-hidden">
				<StickyScroll content={content} />
			</div>

			<div className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_90%,transparent)] [webkit-mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] relative min-h-screen bg-grid-slate-100/70 py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<div className="mb-12 flex flex-col gap-4">
						<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
							Les points forts de notre solution Oui-Scan
						</h2>

						<p className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto">
							Parce que OuiScan est la solution la plus simple et la plus
							efficace pour gérer vos ressources matérielles.
						</p>
						<div className="grid lg:grid-cols-3 gap-8 w-full">
							{advantages.map((advantage, index) => (
								<div key={index} className="flex flex-col items-start">
									<Star className="w-12 h-12 text-primary" />

									<h4 className="text-md font-semibold mb-4 mt-8 text-zinc-700">
										{advantage.title}
									</h4>
									<p className="text-muted-foreground text-sm">
										{advantage.description}
									</p>
								</div>
							))}
						</div>

						<div className="mt-20 flex justify-center">
							<Link href="/contact">
								<Button size={"lg"}>Choisir un abonnement</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
