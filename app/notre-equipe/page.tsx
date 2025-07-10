"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { BusinessCardComponent } from "./components/business-card-component";
import { teamMembers } from "./data/team-members";

const BusinessCard = () => {
	const { toast } = useToast();
	const [copiedText, setCopiedText] = useState<string | null>(null);

	// Generate random rotation angles for each card
	const rotationAngles = useMemo(() => {
		return Array(3)
			.fill(0)
			.map(() => Math.floor(Math.random() * 20) - 10);
	}, []);

	const handleCopy = async (text: string, label: string) => {
		await navigator.clipboard.writeText(text);
		setCopiedText(text);
		toast({
			title: `${label} copié !`,
			description: `${label} a été copié dans le presse-papier`,
			duration: 2000,
		});
		setTimeout(() => setCopiedText(null), 2000);
	};

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
				<div className="flex flex-col gap-20 mt-[calc(4mm*1)] md:mt-[calc(4mm*2)] pb-32">
					{teamMembers.map((member, index) => (
						<BusinessCardComponent
							key={member.name + index}
							member={member}
							index={index}
							rotationAngle={rotationAngles[index]}
							onCopy={handleCopy}
							copiedText={copiedText}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default BusinessCard;
