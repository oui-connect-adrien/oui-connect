import { motion } from "framer-motion";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import {
	CardBody,
	CardContainer,
	CardItem,
} from "@/app/business-card/components/3d-card";
import { Mail, Phone, Check, Copy, QrCode, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageSticker } from "@/app/business-card/components/image-sticker";
import { Button } from "@/components/ui/button";

interface BusinessCardProps {
	member: {
		name: string;
		role: string;
		company_image: string;
		company_name: string;
		custom_image: string;
		description: string;
		email?: string;
		phone?: string;
		colors: {
			from: string;
			to: string;
		};
	};
	index: number;
	rotationAngle: number;
	onCopy: (text: string, label: string) => void;
	copiedText: string | null;
}

export const BusinessCardComponent = ({
	member,
	index,
	rotationAngle,
	onCopy,
	copiedText,
}: BusinessCardProps) => {
	const [showQR, setShowQR] = useState<boolean>(false);

	const fallbackCopyToClipboard = (text: string) => {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.left = "-999999px";
		textArea.style.top = "-999999px";
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try {
			document.execCommand("copy");
		} catch (err) {
			console.error("Fallback: Oops, unable to copy", err);
		}
		document.body.removeChild(textArea);
	};

	const handleCopy = async (text: string, label: string) => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
			} else {
				fallbackCopyToClipboard(text);
			}
			onCopy(text, label);
		} catch (err) {
			console.error("Failed to copy text: ", err);
			fallbackCopyToClipboard(text);
			onCopy(text, label);
		}
	};

	const generateVCardData = () => {
		const vCard = [
			"BEGIN:VCARD",
			"VERSION:3.0",
			`FN:${member.name}`,
			`ORG:${member.company_name}`,
			`TITLE:${member.role}`,
			member.phone && `TEL;TYPE=CELL:${member.phone}`,
			member.email && `EMAIL:${member.email}`,
			"END:VCARD",
		]
			.filter(Boolean)
			.join("\n");

		return vCard;
	};

	return (
		<motion.div
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
									<Button
										onClick={() => onCopy(member.name, "Nom")}
										variant="ghost"
										className="text-left text-[calc(5mm*1)] md:text-[calc(5mm*2)] font-bold text-white hover:text-white/90 transition-colors group flex  gap-2 hover:bg-white/10"
									>
										{member.name}
										{copiedText === member.name ? (
											<Check className="w-5 h-5 text-green-400" />
										) : (
											<Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
										)}
									</Button>
									<p className="text-left text-[calc(3mm*1)] md:text-[calc(3mm*2)] text-white/80 transition-colors group flex items-center gap-2 ml-4">
										{member.role}
									</p>
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
								<p className="text-white/90 px-4 text-[calc(3mm*1)] md:text-[calc(3mm*2)] leading-relaxed max-w-[80%]">
									{member.description}
								</p>
							</CardItem>

							{/* Contact Information */}
							<CardItem translateZ="80" className="mt-8">
								<div className="flex flex-col gap-2">
									{member.email && (
										<div className="space-y-1 flex-grow">
											<Button
												onClick={() => onCopy(member.email!, "Email")}
												variant="ghost"
												className="flex items-center gap-2 text-white/90 hover:text-white 
                        hover:bg-white/10 
                        transition-colors group text-[calc(3mm*1)] md:text-[calc(3mm*2)]"
											>
												<Mail className="w-4 h-4" />
												<span>{member.email}</span>
												{copiedText === member.email ? (
													<Check className="w-4 h-4 text-green-400" />
												) : (
													<Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
												)}
											</Button>
										</div>
									)}
									{member.phone && (
										<div className="space-y-1 flex-grow">
											{/* Mobile: Phone Call Link */}
											<div className="md:hidden">
												<Button
													variant="ghost"
													className="flex items-center gap-2 text-white/90 hover:text-white 
														hover:bg-white/10 
														transition-colors group text-[calc(3mm*1)]"
												>
													<a
														href={`tel:${member.phone}`}
														className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[calc(3mm*1)]"
													>
														<Phone className="w-4 h-4" />
														<span>{member.phone}</span>
													</a>
												</Button>
											</div>
											{/* Desktop: Copy Phone Number */}
											<div className="hidden md:block">
												<Button
													onClick={() => onCopy(member.phone!, "Téléphone")}
													variant="ghost"
													className="flex items-center gap-2 text-white/90 hover:text-white 
														hover:bg-white/10 
														transition-colors group text-[calc(3mm*2)]"
												>
													<Phone className="w-4 h-4" />
													<span>{member.phone}</span>
													{copiedText === member.phone ? (
														<Check className="w-4 h-4 text-green-400" />
													) : (
														<Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
													)}
												</Button>
											</div>
										</div>
									)}
								</div>
							</CardItem>

							{/* QR Code Button */}
							<CardItem
								translateZ="100"
								className="absolute top-[calc(20mm*1)] right-[calc(7mm*1)] md:top-[calc(20mm*2)] md:right-[calc(7mm*2)] w-[calc(10.5mm*1)] md:w-[calc(10.5mm*2)]"
							>
								{/* Mobile: Add Contact Button */}
								<div className="md:hidden">
									<Button
										onClick={() => {
											const blob = new Blob([generateVCardData()], {
												type: "text/vcard",
											});
											const url = window.URL.createObjectURL(blob);
											const link = document.createElement("a");
											link.href = url;
											link.download = `${member.name}.vcf`;
											document.body.appendChild(link);
											link.click();
											document.body.removeChild(link);
											window.URL.revokeObjectURL(url);
										}}
										className="bg-transparent hover:bg-white/20 transition-colors rounded-full"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-[calc(4mm*1)] h-[calc(4mm*1)] text-white"
										>
											<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
											<circle cx="9" cy="7" r="4" />
											<line x1="19" y1="8" x2="19" y2="14" />
											<line x1="22" y1="11" x2="16" y2="11" />
										</svg>
									</Button>
								</div>
								{/* Desktop: QR Code Button */}
								<div className="hidden md:block">
									<Button
										onClick={() => setShowQR(!showQR)}
										className="bg-transparent hover:bg-white/20 transition-colors rounded-full"
									>
										<QrCode className="w-[calc(4mm*2)] h-[calc(4mm*2)] text-white" />
									</Button>
								</div>
							</CardItem>

							{/* QR Code Modal */}
							{showQR && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
									<div className="bg-white p-6 rounded-lg">
										<QRCodeSVG
											value={generateVCardData()}
											size={100}
											level="L"
										/>
										<div className="flex justify-center mt-4">
											<Button
												onClick={() => setShowQR(false)}
												variant="outline"
												className="rounded-xl"
											>
												<X className="w-4 h-4" />
											</Button>
										</div>
									</div>
								</div>
							)}

							{/* Custom Image */}
							<CardItem
								translateZ="100"
								className="absolute bottom-[calc(7mm*1)] right-[calc(7mm*1)] w-[calc(12mm*1)] h-[calc(12mm*1)] md:bottom-[calc(7mm*2)] md:right-[calc(7mm*2)] md:w-[calc(12mm*2)] md:h-[calc(12mm*2)]"
							>
								<div
									className="relative w-full h-full"
									style={{
										transform: `rotate(${rotationAngle}deg)`,
										transition: "transform 0.3s ease-out",
									}}
								>
									<ImageSticker
										src={member.custom_image}
										alt="Custom Image"
										width={128}
										height={128}
										style={{ width: "100%", height: "100%" }}
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
	);
};
