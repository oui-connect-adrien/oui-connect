"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { BusinessCard } from "../components/business-card";
import { teamMembers } from "../data/team-members";

const Page = () => {
	const [copiedText, setCopiedText] = useState<string | null>(null);
	const params = useParams();
	const name = params.name as string;

	// Generate random rotation angles for each card
	const rotationAngles = useMemo(() => {
		return Array(1)
			.fill(0)
			.map(() => Math.floor(Math.random() * 20) - 10);
	}, []);

	const handleCopy = async (text: string, label: string) => {
		await navigator.clipboard.writeText(text);
		setCopiedText(text);
		toast.success(`${label} copié !`);
		setTimeout(() => setCopiedText(null), 2000);
	};

	// Find the specific team member by name (decode URL parameter)
	const decodedName = decodeURIComponent(name);
	const member = teamMembers.find(
		(member) => member.name.toLowerCase() === decodedName.toLowerCase()
	);

	if (!member) {
		return (
			<div className="relative py-4 antialiased overflow-hidden">
				<div className="z-10 relative lg:container pt-12 px-4 flex flex-col items-center">
					<Link
						href="/notre-equipe"
						className="absolute left-4 mt-16 flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors"
					>
						<ArrowLeft className="w-5 h-5" />
						<span>Retour à l'équipe</span>
					</Link>
					<motion.div
						className="text-center pt-32"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl font-bold mb-4 text-zinc-700">
							Membre non trouvé
						</h1>
						<p className="text-neutral-500 mb-8">
							Le membre de l'équipe "{decodedName}" n'existe pas.
						</p>
						<Link
							href="/notre-equipe"
							className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							<ArrowLeft className="w-4 h-4" />
							Retour à l'équipe
						</Link>
					</motion.div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative py-4 antialiased overflow-hidden">
			<div className="z-10 relative lg:container md:pt-20 pt-12 px-4">
				<Link
					href="/notre-equipe"
					className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 transition-colors mt-10 text-lg font-medium"
				>
					<ArrowLeft className="w-5 h-5" />
					<span>Retour à l'équipe</span>
				</Link>
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-2 mt-12 relative text-center text-zinc-700 max-w-6xl mx-auto"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Carte de visite
				</motion.h1>
				<div className="flex flex-col gap-20 mt-[calc(4mm*1)] md:mt-[calc(4mm*2)] pb-32">
					<BusinessCard
						key={member.name}
						member={member}
						index={0}
						rotationAngle={rotationAngles[0]}
						onCopy={handleCopy}
						copiedText={copiedText}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page;
