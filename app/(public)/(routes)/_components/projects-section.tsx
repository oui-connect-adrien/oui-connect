"use client";

import { motion } from "framer-motion";
import { DirectionAwareHover } from "../../../../components/ui/direction-aware-hover";

export const projects = [
	{
		name: "Oui-Diag",
		imageUrl: "/oui-diag.jpg",
		description:
			"Faites diagnostiquer vos installations industrielles directement par nos partenaires experts. Identifiez vos anomalies et dérives de consommation.",
		link: "/projects/oui-diag",
	},
	{
		name: "Oui-Access",
		imageUrl: "/oui-access.jpeg",
		description: "This is a description for project 2",
		link: "/projects/oui-access",
	},
	{
		name: "Oui-Scan",
		imageUrl: "/oui-scan.png",
		description:
			"Optimisez la gestion de vos ressources par QR code grâce à notre solution web accessible sans téléchargement ou installation.",
		link: "/projects/oui-scan",
	},
	{
		name: "Oui-Energy",
		imageUrl: "/oui-energy.jpeg",
		description:
			"Maitrisez votre consommation énergétique sur tous vos appareils grâce à notre solution de monitoring énergétique simple et rapide à installer.",
		link: "/projects/oui-energy",
	},
];

const ProjectsSection = () => {
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
							key={project.name}
							className="relative break-words"
							variants={variants}
							initial="hidden"
							whileInView="visible"
							transition={{ duration: 0.5 }}
						>
							<DirectionAwareHover imageUrl={project.imageUrl}>
								<p className="font-bold text-xl">{project.name}</p>
								<p className="font-normal text-sm break-words">
									{project.description}
								</p>
							</DirectionAwareHover>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
