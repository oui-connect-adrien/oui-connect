"use client";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const content = [
		{
			title: "Conservez l’historique de vos données",
			description:
				"Paramétrez vos propres alarmes afin d’être alerté n’importe ou et n’importe quand par mail ou SMS pour toutes dérives ou anomalies. Gérez vos alarmes et prévenez la personne adéquate via notre gestion des astreintes",
			content: (
				<div className="h-full w-full relative">
					<Image src="/oui-access-2.png" fill alt="oui-scan-1" />
				</div>
			),
		},
		{
			title: "Visualiser la performance détaillée de vos équipements",
			description:
				"Accédez et visualisez vos données en temps réel par des graphiques détaillés pour chacune de vos installations. Personnalisez l’affichage des éléments de votre tableau de bords",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-access-3.png"
						fill
						className="h-full w-full object-cover"
						alt="Oui Energy"
					/>
				</div>
			),
		},
		{
			title: "Analyser et exploiter vos données",
			description:
				"Exportez vos données de manière sécurisée en .csv ou .pdd et faites vos propres modèles d’analyse de la performance de vos équipements afin d’identifier les sources d’anomalies et les corriger. Importer et partagez vos rapports d’analyse et d’entretien directement sur la plateforme.",
			content: (
				<div className="h-full w-full relative">
					<Image
						src="/oui-access-4.png"
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
			title: "Alertes en Temps réel",
			description:
				"Soyez alertés en temps réels et depuis n’importe ou de toutes anomalies, pannes ou dérives de vos équipements ou installations.",
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
			title: "Personnalisable",
			description:
				"Personnalisez l’interface de votre solution ainsi que de nombreux paramètres (alarmes, graphiques…) à votre goût.",
		},
	];

	const advantages = [
		{
			title: "Mise en place de la solution",
			description:
				"Nous intervenons pour installer la solution sur place ou à distance en fonction de vos contraintes.",
		},
		{
			title: "Connexion de la solution à nos serveurs",
			description:
				"Nous connectons la solution à nos serveurs de manière entièrement sécurisée et nous nous adaptons là-aussi à vos contraintes.",
		},
		{
			title: "Accession au données",
			description:
				"Nous réceptionnons vos données et les affichons directement sur votre écran lorsque vous vous connectez à notre solution.",
		},
	];
	return (
		<>
			<div className="relative py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Surveillez vos installations à distance grâce à notre système de
						supervision industrielle
					</h1>
					<div className="grid lg:grid-cols-2 gap-8 mt-14 py-4">
						<div className="relative rounded-md w-[420px] h-[320px] mx-auto">
							<Image src="/oui-access-1.png" alt="Oui Access" fill />
						</div>
						<div className="flex flex-col gap-8 text-center lg:text-left lg:items-start items-center">
							<h2 className="relative font-regular text-base md:text-2xl tracking-wide mb-8 max-w-3xl mx-auto antialiased">
								Réduisez considérablement vos délais d’intervention de
								maintenance en cas d’anomalies sur vos équipements avec notre
								solution de supervision industrielle
							</h2>
							<Link href="/contact">
								<Button size={"lg"}>Choisir un abonnement</Button>
							</Link>
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
						Surveillez à distance et avec précision l’état et la performance de
						vos équipements et gagnez en productivité tout en améliorant votre
						confort de travail ou ceux de vos équipes au quotidien.
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mt-16">
						{skills.map((value, index) => (
							<div key={index} className="flex flex-col items-start">
								<h4 className="font-semibold text-2xl">{value.title}</h4>
								<p className="text-md font-base mb-4 mt-8 text-zinc-700">
									{value.description}
								</p>
							</div>
						))}
					</div>
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
							Une installation très rapide
						</h2>

						<p className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto">
							Le processus d’installation est à la fois simple, rapide et
							sécurisée de manière à ce que vous puissiez en profiter très
							rapidement.
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
