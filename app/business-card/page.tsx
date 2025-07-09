"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const BusinessCard = () => {
	// TODO: Replace with real team member data and images
	const teamMembers = [
		{
			name: "Baptiste WARION",
			role: "Directeur Technique",
			image: "/evaluation-energetique-1.png",
			description:
				"Expert en solutions d'optimisation énergétique avec plus de 10 ans d'expérience dans l'industrie.",
		},
		{
			name: "Asmaa DINAR",
			role: "Responsable Backend",
			image: "/evaluation-energetique-2.png",
			description:
				"Spécialiste en développement de solutions web innovantes et en intégration de systèmes complexes.",
		},
		{
			name: "Adrien POIRIER",
			role: "Développeur Frontend",
			image: "/evaluation-energetique-3.png",
			description:
				"Passionné par la gestion de projets industriels et l'amélioration continue des processus.",
		},
	];

	return (
		<div className="relative py-4 antialiased overflow-hidden">
			<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Notre équipe
				</motion.h1>
				<motion.p
					className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Une équipe d'experts passionnés par l'innovation et l'excellence
					technique
				</motion.p>
				<div className="flex flex-col gap-20 mt-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name + index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="flex items-center justify-center perspective-1000"
						>
							<CardContainer className="inter-var">
								<CardBody className="relative h-[calc(54mm*2)] w-[calc(85mm*2)]">
									<div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary/90 to-primary/70 shadow-2xl border border-white/10">
										{/* Content wrapper */}
										<div className="absolute inset-0 p-6">
											{/* Top section with name and image */}
											<CardItem
												translateZ="100"
												className="flex justify-between items-start w-full"
											>
												<div className="space-y-1 flex-grow">
													<h2 className="text-4xl font-bold text-white">
														{member.name}
													</h2>
													<p className="text-xl text-white/80">{member.role}</p>
												</div>

												<div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-white/20">
													<Image
														src={member.image}
														alt={member.name}
														width={96}
														height={96}
														className="object-cover"
														style={{ width: "100%", height: "100%" }}
													/>
												</div>
											</CardItem>

											{/* Description */}
											<CardItem translateZ="60" className="mt-8">
												<p className="text-white/90 text-lg leading-relaxed">
													{member.description}
												</p>
											</CardItem>

											{/* Bottom decoration */}
											<CardItem
												translateZ="40"
												className="absolute bottom-6 left-6 right-6"
											>
												<div className="h-1 w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
											</CardItem>
										</div>
									</div>
								</CardBody>
							</CardContainer>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BusinessCard;
