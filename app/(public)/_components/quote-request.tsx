"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

const QuoteRequest = () => {
	// Définir les animations d'apparition
	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.section
			id="hero"
			className="relative py-4 antialiased overflow-hidden"
			initial="hidden"
			whileInView="visible"
			transition={{ duration: 0.8 }}
		>
			<div className="z-10 relative lg:container pt-20 px-4 flex flex-col gap-8 items-center">
				<motion.h2
					className="text-3xl md:text-5xl font-bold mb-4 text-center text-neutral-700 max-w-6xl mx-auto"
					variants={fadeInUp}
				>
					Demander un devis
				</motion.h2>

				<motion.p
					className="text-center text-neutral-500 mb-4 max-w-3xl text-xl mx-auto"
					variants={fadeInUp}
				>
					Vous connaissez déjà votre besoin et souhaitez obtenir un devis ?
				</motion.p>

				<Link href="/contact" className="flex items-center space-x-2">
					<Button className="text-lg" size="lg">
						Demander un devis
					</Button>
				</Link>
			</div>
		</motion.section>
	);
};

export default QuoteRequest;
