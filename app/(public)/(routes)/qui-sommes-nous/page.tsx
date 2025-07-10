"use client";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const values = [
		{
			icon: <Heart size={40} />,
			title: "Passion",
			description:
				"Chez Oui-Connect, nos collaborateurs sont avant tout passionnés par leur domaine d’activité, avec une vraie volonté d’améliorer leurs compétences respectives pour devenir des spécialistes dans leur domaine. Qu’ils soient dans le développement informatique, la gestion managériale, le marketing ou la gestion commerciale ou financière, ils ont tous le désir de devenir les meilleurs de leur domaine, pour le plus grand bonheur de Oui-Connect et de ses clients.",
			animation: { opacity: 1, x: 0 },
			initial: { opacity: 0, x: -100 },
		},
		{
			icon: <Rocket size={40} />,
			title: "Innovation",
			description:
				"Oui-Connect est une entreprise qui a pour vocation de toujours innover pour proposer des solutions toujours plus performantes et efficaces à ses clients. Pour cela, nous avons à cœur de rester à la pointe des dernières technologies du web, pour proposer des services toujours plus innovants et adaptés aux besoins de nos clients.",
			animation: { opacity: 1, y: 0 },
			initial: { opacity: 0, y: -100 },
		},
		{
			icon: <Users size={40} />,
			title: "Esprit d'équipe",
			description:
				"Chaque collaborateur participe pleinement au développement de la société en proposant des idées d’amélioration quel que soit le domaine. La participation de chacun au développement de la société profite à tous. Le collaborateur est engagé et la société en profite avec une qualité de service améliorée.",
			animation: { opacity: 1, x: 0 },
			initial: { opacity: 0, x: 100 },
		},
		{
			icon: <Lightbulb size={40} />,
			title: "Co-création",
			description:
				"Notre état d’esprit nous amène à nous remettre en question en permanence et à écouter les remarques de chacun, qu’ils soient internes à la société, mais également de toutes les parties prenantes de la société (clients, utilisateurs, partenaires, fournisseurs…) afin de proposer le meilleur service à nos clients. Nous écoutons donc les remarques et co-créons nos améliorations à partir de ces dernières.",
			animation: { opacity: 1, y: 0 },
			initial: { opacity: 0, y: 100 },
		},
	];

	return (
		<div className="relative border py-4 antialiased overflow-hidden">
			<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Découvrez notre entreprise
				</motion.h1>
				<motion.h2
					className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Les dernières technologies du Web au service de vos équipements et
					installations.
				</motion.h2>
			</div>
			<div className="bg-zinc-100 mt-24 py-14">
				<div className="px-4 z-10 relative lg:container flex flex-col justify-center items-center">
					<motion.h3
						className="text-3xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Présentation de Oui-Connect
					</motion.h3>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
						<div className="relative w-[400px] h-[250px] lg:w-[500px] lg:h-[300px] overflow-hidden mx-auto">
							<Image
								src="/oui-connect-presentation.png"
								alt="Oui-Connect"
								fill
							/>
						</div>
						<motion.div
							className="flex flex-col lg:items-start items-center"
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h3 className="text-2xl font-semibold mb-4 text-zinc-700">
								Notre entreprise
							</h3>
							<p className="text-base text-zinc-500 lg:text-left text-center">
								De nombreuses entreprises, petites ou grandes, sont encore
								aujourd’hui insuffisamment équipées pour maîtriser leurs données
								et ainsi optimiser leurs dépenses, leurs délais et la qualité de
								leurs services ou produits.
								<br /> <br />
								Fondée en 2018, Oui-Connect est donc la concrétisation d’un
								projet innovant dont l’objectif consiste à rassembler les
								technologies du web afin d’améliorer la performance de vos
								équipements industriels.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="z-10 relative lg:container mt-16 lg:mt-24 px-4 flex flex-col justify-center items-center ">
				<motion.h3
					className="text-3xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Notre vision et notre mission
				</motion.h3>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
					<motion.div
						className="flex flex-col items-start h-full justify-center"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<p className="text-base text-zinc-500">
							Notre vision est un monde où chaque acteur est en mesure de
							maîtriser de manière autonome chaque donnée entrante ou sortante
							de son environnement. Pour cela, nous avons à cœur de créer et
							éditer des services logiciels basés sur les dernières technologies
							du web de manière simple et accessible partout et pour tous.
						</p>
					</motion.div>
					<div className="relative w-[400px] h-[250px] lg:w-[500px] lg:h-[300px] overflow-hidden mx-auto">
						<Image src="/mission.png" alt="Oui-Connect" fill />
					</div>
				</div>
			</div>
			<div className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_90%,transparent)] [webkit-mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] relative min-h-screen bg-grid-slate-100/70 py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-24 pb-24 px-4 flex flex-col gap-8 items-center">
					<motion.h3
						className="text-3xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Nos valeurs
					</motion.h3>
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 mt-16">
						{values.map((value, index) => (
							<motion.div
								key={index}
								className="flex flex-col items-center"
								initial={value.initial}
								whileInView={value.animation}
								transition={{ duration: 0.5, delay: index * 0.2 }}
							>
								{value.icon}
								<h4 className="text-xl font-semibold mb-4 mt-8 text-zinc-700">
									{value.title}
								</h4>
								<p className="text-base text-zinc-500">{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div className="bg-zinc-100 py-24">
				<div className="z-10 relative lg:container px-4 flex flex-col items-center">
					<motion.h3
						className="text-3xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Rencontrez notre équipe
					</motion.h3>
					<motion.p
						className="text-base text-zinc-500 text-center max-w-2xl mb-12"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Découvrez les experts passionnés qui font de Oui-Connect une
						entreprise innovante et dynamique.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Link
							href="/notre-equipe"
							className="inline-flex items-center justify-center px-8 py-4 bg-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors duration-200"
						>
							Notre équipe
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Page;
