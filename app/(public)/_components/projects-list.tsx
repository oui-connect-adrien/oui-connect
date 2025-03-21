"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { motion } from "framer-motion";
import Link from "next/link";

export const projects = [
	{
		name: "Oui-Diag",
		imageUrl: "/oui-diag.jpg",
		description: "Faites diagnostiquer vos installations industrielles",
		link: "/oui-diag",
	},
	{
		name: "Oui-Access",
		imageUrl: "/oui-access.jpeg",
		description: "Surveillez vos installations à distance",
		link: "/oui-access",
	},
	{
		name: "Oui-Scan",
		imageUrl: "/oui-scan.jpg",
		description:
			"Optimisez la gestion de vos produits par QR code grâce à notre solution web",
		link: "/oui-scan",
	},
	{
		name: "Oui-Energy",
		imageUrl: "/oui-energy.jpeg",
		description:
			"Maitrisez votre consommation énergétique sur tous vos appareils",
		link: "/oui-energy",
	},
];

const ProjectsList = () => {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<section
			id="solutions"
			className="relative min-h-screen py-4 antialiased overflow-hidden"
		>
			<div className="z-10 relative lg:container pt-20 px-4 flex flex-col items-center">
				<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
					Nos solutions
				</h2>
				<div className="grid lg:grid-cols-3 gap-8 w-full">
					{projects.map((project) => (
						<motion.div
							className="relative break-words"
							variants={variants}
							initial="hidden"
							whileInView="visible"
							transition={{ duration: 0.5 }}
						>
							<Link key={project.link} href={project.link}>
								<DirectionAwareHover imageUrl={project.imageUrl}>
									<p className="font-bold text-xl">{project.name}</p>
									<p className="font-normal text-sm break-words">
										{project.description}
									</p>
								</DirectionAwareHover>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsList;
