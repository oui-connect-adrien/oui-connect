"use client";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const content = [
		{
			title: "Mesurer et stocker, surveiller et alerter",
			description:
				"Collectez et mesurez toutes les données et indicateurs de performance (IPE) énergétiques nécessaires à votre suivi. Stockez et historisez vos données sur des serveurs sécurisés selon vos exigences. Accédez à vos données en temps réel. Paramétrez vos propres alarmes afin d’être alerté n’importe où et n’importe quand. Détectez et surveillez les anomalies et corrigez vos surconsommations énergétiques.",
			content: (
				<div className="h-full w-full relative">
					<Image src="/oui-energy-2.jpeg" fill alt="oui-scan-1" />
				</div>
			),
		},
		{
			title: "Visualiser et observer, analyser et exploiter",
			description:
				"Visualisez vos données à l’aide de graphiques en temps réel. Synthétisez vos informations sous forme de rapports et de tableaux de bord énergétiques standards ou personnalisables. Analysez vos consommations énergétiques ainsi que leur évolution. Exportez vos données de manière sécurisée. Téléchargez et partagez vos rapports d’analyse",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-energy-3.png"
						fill
						className="h-full w-full object-cover"
						alt="Oui Energy"
					/>
				</div>
			),
		},
		{
			title: "Installation simple et rapide de la solution",
			description:
				"Notre solution nécessite l’installation d’un petit boitier préconfiguré adaptable à toutes vos installations, qu’elles soient avec ou sans automate.  L’installation se fait en moins d’une demi-journée et très simplement. Elle peut être réalisée par nos soins ou directement par vos automaticiens et techniciens.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-energy-4.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
		{
			title: "Connexion sécurisée à internet et au serveur",
			description:
				"Une fois installé nous connectons à distance le boîtier à internet.  Les données sont ensuite transmises et stockées directement sur nos serveurs. Les données commencent déjà à être historisées.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-energy-5.png"
						fill
						className="h-full w-full object-cover"
						alt="linear board demo"
					/>
				</div>
			),
		},
	];

	const skills = [
		{
			title: "Temps réel",
			description:
				"Automatisez le suivi de votre consommation énergétique et soyez alerté en temps réels de toutes dérives, identifiez vos pertes énergétiques et réduisez votre facture énergétique",
		},
		{
			title: "Centralisation",
			description:
				"Facilitez votre suivi énergétique en accédant à vos indicateurs de performance énergétique pour l’ensemble de vos installations en un seul endroit et économisez un temps considérable dans la gestion de vos installations.",
		},
		{
			title: "Accessibilité",
			description:
				"Accédez à notre application web à partir de tous vos appareils (Ordinateur, smartphone…) depuis n’importe où et à tout moment (24h/24 et 7j7).",
		},
		{
			title: "Sécurisé",
			description:
				"Parce que nous connaissons vos enjeux et défis vis-à-vis de la cybersécurité, nous mettons tout en œuvre pour sécuriser vos données à tout moment et éliminer tout risque de fuite.",
		},
		{
			title: "1/2 journée",
			description:
				"Sauf cas complexe, la mise en place de notre solution ne prend en général qu’une demi-journée par équipement industriel. Vous êtes ainsi en mesure de commencer à suivre vos indicateurs de performance énergétique très rapidement",
		},
		{
			title: "Simplicité",
			description:
				"Notre outil se veut simple d’utilisation et intuitif. La prise en main se fait en quelques minutes seulement, de manière à vous rendre totalement autonome dans le suivi de votre consommation énergétique rapidement.",
		},
		{
			title: "Support Gratuit",
			description:
				"Notre support est disponible gratuitement pour répondre à toutes vos difficultés. Vous recevrez une réponse dans un délai maximum de 48 heures ouvrées.",
		},
		{
			title: "Personnalisable",
			description:
				"Personnalisez l’interface de votre solution ainsi que de nombreux paramètres (alarmes, graphiques…) à votre goût.",
		},
	];

	const advantages = [
		{
			title: "CEE",
			description:
				"Notre solution est éligible aux Certificats d’Économies d’Énergie (IND-UT-134). Vous pouvez ainsi bénéficier d’une prime partielle ou totale de la part d’un fournisseur d’énergie pour la mise en place de notre solution.",
		},
		{
			title: "3 mois offerts",
			description:
				"Bénéficiez de 3 mois gratuits à notre service de monitoring. Ainsi, vous ne prenez aucun risque en l’essayant. (*)",
		},
		{
			title: "Sans engagement",
			description:
				"L’accès à notre solution se fait sans engagement. Vous pouvez résilier votre abonnement à tous moment.",
		},
	];
	return (
		<>
			<div className="relative py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Découvrez Oui-Energy, une solution de monitoring énergétique simple
						et accessible
					</h1>
					<div className="grid lg:grid-cols-2 gap-8 mt-14 py-4">
						<div className="flex flex-col gap-8 text-center lg:text-left lg:items-start items-center">
							<h2 className="relative font-regular text-base md:text-2xl tracking-wide mb-8 max-w-[100svw] px-2 lg:px-0 mx-auto antialiased">
								Réduisez votre consommation et centralisez les données
								énergétiques de toutes vos installations grâce à notre solution
								de monitoring énergétique, éligible aux CEE.
							</h2>
							<Link href="/contact">
								<Button size={"lg"}>Choisir un abonnement</Button>
							</Link>
						</div>
						<div className="relative rounded-md w-[420px] h-[320px] mx-auto">
							<Image
								src="/oui-energy-1.png"
								alt="Evaluation énergétique"
								fill
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="relative bg-zinc-100 py-8 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<h3 className="text-4xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto">
						Notre solution
					</h3>
					<p className="text-lg mt-4 text-center">
						Simplifiez-vous la vie, maîtrisez votre consommation d’énergie et
						faites de grosses économies de temps et d’argent grâce à une
						solution unique de monitoring énergétique.
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 mt-16">
						{skills.map((value, index) => (
							<div key={index} className="flex flex-col items-start">
								<h4 className="font-semibold text-2xl">{value.title}</h4>
								<p className="text-md font-base mb-4 mt-8 text-zinc-700">
									{value.description}
								</p>
							</div>
						))}
					</div>
					<Link href="/contact">
						<Button size="lg" className="mt-8">
							Demander un devis
						</Button>
					</Link>
				</div>
			</div>
			<div className="py-8 flex flex-col gap-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<h3 className="text-4xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto">
						Une installation très rapide
					</h3>
					<p className="text-base text-md">
						Le processus d’installation est à la fois simple, rapide et sécurisé
						de manière à ce que vous puissiez en profiter très rapidement.
					</p>
					<div className="relative h-[500px] py-4 antialiased overflow-hidden">
						<StickyScroll content={content} />
					</div>
				</div>
			</div>
			<div
				id="hero"
				className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_90%,transparent)] [webkit-mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] relative min-h-screen bg-grid-slate-100/70 py-4 antialiased overflow-hidden"
			>
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<div className="mb-12 flex flex-col gap-4">
						<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
							Des garanties solides pour limiter vos risques
						</h2>

						<p className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto">
							Pour vous aider à passer à l’action et enfin maîtriser votre
							consommation énergétique, nous vous proposons une offre totalement
							exceptionnelle.
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
						<div className="mt-8">
							<p className="text-muted-foreground text-sm italic">
								*Hors frais éventuels de mise en place de la solution
							</p>
							<div className="mt-20 flex justify-center">
								<Link href="/contact">
									<Button size={"lg"}>Choisir un abonnement</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
