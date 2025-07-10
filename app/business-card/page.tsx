"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Mail, Phone, Check, Copy } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

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

	const teamMembers = [
		{
			name: "Baptiste WARION",
			role: "Directeur Technique",
			company_image: "/logo-oui-connect-700x700.jpg",
			company_name: "Oui-Connect",
			custom_image: "/business-card/voilier.png",
			description: "Blablabla 1",
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
			description: "Blablabla 2",
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
			description: "Blablabla 3",
			email: "adrien.poirier@oui-connect.fr",
			colors: {
				from: "from-amber-600/90",
				to: "to-orange-400/70",
			},
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
				<div className="flex flex-col gap-20 mt-[calc(4mm*1)] md:mt-[calc(4mm*2)] pb-32">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name + index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ margin: "-100px", once: true }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className="flex items-center justify-center perspective-1000"
						>
							<CardContainer className="inter-var">
								<CardBody className="relative h-[calc(54mm)] w-[calc(85mm)] md:h-[calc(54mm*2)] md:w-[calc(85mm*2)]  ">
									<div
										className={`relative w-full h-full rounded-[calc(4mm*1)] md:rounded-[calc(4mm*2)] bg-gradient-to-br ${member.colors.from} ${member.colors.to} shadow-2xl border border-white/10 overflow-hidden`}
									>
										{/* Grid Background */}
										<div
											className={cn(
												"absolute inset-0 opacity-[0.07]",
												"[background-size:30px_30px]",
												"[background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]"
											)}
										/>
										{/* Radial Gradient Overlay */}
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>

										{/* Content wrapper */}
										<div className="absolute inset-0 p-[calc(4mm*1)] md:p-[calc(4mm*2)]">
											{/* Top section with name and image */}
											<CardItem
												translateZ="100"
												className="flex justify-between items-start w-full"
											>
												<div className="space-y-1 flex-grow">
													<button
														onClick={() => handleCopy(member.name, "Nom")}
														className="text-left text-[calc(5mm*1)] md:text-[calc(5mm*2)] font-bold text-white hover:text-white/90 transition-colors group flex items-center gap-2"
													>
														{member.name}
														{copiedText === member.name ? (
															<Check className="w-5 h-5 text-green-400" />
														) : (
															<Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
														)}
													</button>
													<button
														onClick={() => handleCopy(member.role, "Rôle")}
														className="text-left text-[calc(3mm*1)] md:text-[calc(3mm*2)] text-white/80 hover:text-white/90 transition-colors group flex items-center gap-2"
													>
														{member.role}
														{copiedText === member.role ? (
															<Check className="w-4 h-4 text-green-400" />
														) : (
															<Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
														)}
													</button>
												</div>
												<div className="flex flex-col items-center">
													<div className="relative flex-shrink-0 w-[calc(10mm*1)] h-[calc(10mm*1)] md:w-[calc(10mm*2)] md:h-[calc(10mm*2)] rounded-full overflow-hidden border-2 border-white/20">
														<Image
															src={member.company_image}
															alt={member.company_name}
															width={96}
															height={96}
															className="object-cover"
															style={{ width: "100%", height: "100%" }}
														/>
													</div>
													<p className="text-white/90 text-[calc(3mm*1)] md:text-[calc(3mm*2)] leading-relaxed">
														{member.company_name}
													</p>
												</div>
											</CardItem>

											{/* Description */}
											<CardItem
												translateZ="60"
												className="mt-[calc(4mm*1)] md:mt-[calc(4mm*2)]"
											>
												<p className="text-white/90 text-[calc(3mm*1)] md:text-[calc(3mm*2)] leading-relaxed max-w-[80%]">
													{member.description}
												</p>
											</CardItem>

											{/* Contact Information */}
											<CardItem translateZ="80" className="mt-8">
												<div className="flex flex-col gap-2">
													{member.email && (
														<button
															onClick={() => handleCopy(member.email, "Email")}
															className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group text-[calc(3mm*1)] md:text-[calc(3mm*2)]"
														>
															<Mail className="w-4 h-4" />
															<span>{member.email}</span>
															{copiedText === member.email ? (
																<Check className="w-4 h-4 text-green-400" />
															) : (
																<Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
															)}
														</button>
													)}
													{member.phone && (
														<a
															href={`tel:${member.phone}`}
															className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[calc(3mm*1)] md:text-[calc(3mm*2)]"
														>
															<Phone className="w-4 h-4" />
															<span>{member.phone}</span>
														</a>
													)}
												</div>
											</CardItem>

											{/* Custom Image */}
											<CardItem
												translateZ="100"
												className="absolute bottom-[calc(7mm*1)] right-[calc(7mm*1)] w-[calc(12mm*1)] h-[calc(12mm*1)] md:bottom-[calc(7mm*2)] md:right-[calc(7mm*2)] md:w-[calc(12mm*2)] md:h-[calc(12mm*2)]"
											>
												<div
													className="relative w-full h-full"
													style={{
														transform: `rotate(${rotationAngles[index]}deg)`,
														transition: "transform 0.3s ease-out",
													}}
												>
													<Image
														src={member.custom_image}
														alt="Custom Image"
														width={128}
														height={128}
														className="object-cover relative"
														style={{
															width: "100%",
															height: "100%",
															filter:
																"drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white)",
														}}
													/>
												</div>
											</CardItem>

											{/* Bottom decoration - moved up in z-index */}
											<CardItem
												translateZ="40"
												className="absolute bottom-[calc(3mm*1)] md:bottom-[calc(3mm*2)] left-6 right-40"
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
