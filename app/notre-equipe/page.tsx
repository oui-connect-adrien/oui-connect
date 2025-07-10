"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";
import { BusinessCardComponent } from "./components/business-card-component";

const BusinessCard = () => {
	const { toast } = useToast();
	const [copiedText, setCopiedText] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const filterName = searchParams.get("name");

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

	const teamMembers = [
		{
			name: "Baptiste WARION",
			role: "Directeur Technique",
			company_image: "/logo-oui-connect-700x700.jpg",
			company_name: "Oui-Connect",
			custom_image: "/business-card/voilier.png",
			description: "",
			email: "b.warion@oui-connect.fr",
			phone: "+33 6 37 73 72 05",
			colors: {
				from: "from-blue-600/90",
				to: "to-indigo-700/70",
			},
		},
		{
			name: "Asmaa DINAR",
			role: "Responsable Backend",
			company_image: "/logo-oui-connect-700x700.jpg",
			company_name: "Oui-Connect",
			custom_image: "/business-card/chat.png",
			description: "",
			email: "asmaa.dinar@oui-connect.fr",
			colors: {
				from: "from-emerald-600/90",
				to: "to-lime-700/70",
			},
		},
		{
			name: "Adrien POIRIER",
			role: "Développeur Frontend",
			company_image: "/logo-oui-connect-700x700.jpg",
			company_name: "Oui-Connect",
			custom_image: "/business-card/ping-pong.png",
			description: "",
			email: "adrien.poirier@oui-connect.fr",
			colors: {
				from: "from-amber-600/90",
				to: "to-orange-400/70",
			},
		},
	];

	// Filter team members based on URL parameter
	const displayedMembers = filterName
		? teamMembers.filter(
				(member) => member.name.toLowerCase() === filterName.toLowerCase()
		  )
		: teamMembers;

	return (
		<div className="relative py-4 antialiased overflow-hidden">
			<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
				{filterName && (
					<Link
						href="/business-card"
						className="absolute left-4 top-28 flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors"
					>
						<ArrowLeft className="w-5 h-5" />
						<span>Retour à l'équipe</span>
					</Link>
				)}
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{filterName ? "Carte de visite" : "Notre équipe"}
				</motion.h1>
				{!filterName && (
					<motion.p
						className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Une équipe d'experts passionnés par l'innovation et l'excellence
						technique
					</motion.p>
				)}
				<div className="flex flex-col gap-20 mt-[calc(4mm*1)] md:mt-[calc(4mm*2)] pb-32">
					{displayedMembers.map((member, index) => (
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
