"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";

const ClientFeedback = () => {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
	const feedbacks = [
		{
			name: "Thomas",
			role: "Responsable SAV, Cometi Services",
			quote:
				"Outil simple, intuitif et rapide à prendre en main, il est devenu l’indispensable partenaire des dépannages à distance.",
		},
		{
			name: "David",
			role: "Automaticien, Cometi Group",
			quote:
				"Outil très utile et précieux pour connaître immédiatement l’état de l’installation, son historique, et diagnostiquer les performances énergétiques des installations à distance.",
		},
	];

	return (
		<motion.section
			variants={variants}
			id="hero"
			className="relative py-4 antialiased overflow-hidden"
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 0.8 }}
		>
			<div className="z-10 relative lg:container pt-14 px-4 flex flex-col gap-8 items-center">
				<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
					Témoignages de nos clients
				</h2>
				<HoverEffect items={feedbacks} />
			</div>
		</motion.section>
	);
};

export default ClientFeedback;
