import { motion } from "framer-motion";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { CardHeader } from "./card-header";
import { CardDescription } from "./card-description";
import { CardContact } from "./card-contact";
import { CardActions } from "./card-actions";
import { CardCustomImage } from "./card-custom-image";
import { useRouter } from "next/navigation";

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

export const BusinessCard = ({
	member,
	index,
	rotationAngle,
	onCopy,
	copiedText,
}: BusinessCardProps) => {
	const router = useRouter();

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

	const handleLongPress = () => {
		router.push(`/notre-equipe/${member.name}`);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "-100px", once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="flex items-center justify-center perspective-1000 w-full"
		>
			<CardContainer
				className="inter-var px-24 py-12 hover:scale-105 group transition-all duration-300"
				onLongPress={handleLongPress}
			>
				<CardBody className="relative group-hover:shadow-2xl rounded-[calc(4mm*1)] md:rounded-[calc(4mm*1.5)] h-[calc(54mm)] w-[calc(83mm)] md:h-[calc(54mm*1.5)] md:w-[calc(85mm*1.5)]">
					<div
						className={`relative w-full h-full rounded-[calc(4mm*1)] md:rounded-[calc(4mm*1.5)] bg-gradient-to-br ${member.colors.from} ${member.colors.to} shadow-2xl border border-white/10 overflow-hidden`}
					>
						{/* Grid Background */}
						<div className="absolute inset-0 opacity-[0.07] [background-size:30px_30px] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />
						{/* Radial Gradient Overlay */}
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />

						{/* Content wrapper */}
						<div className="absolute inset-0 p-[calc(4mm*1)] md:p-[calc(4mm*1.5)]">
							<CardHeader
								name={member.name}
								role={member.role}
								company_image={member.company_image}
								company_name={member.company_name}
								onCopy={onCopy}
								copiedText={copiedText}
							/>

							<CardDescription description={member.description} />

							<CardContact
								email={member.email}
								phone={member.phone}
								onCopy={onCopy}
								copiedText={copiedText}
								handleCopy={handleCopy}
							/>

							<CardActions vCardData={generateVCardData()} name={member.name} />

							<CardCustomImage
								custom_image={member.custom_image}
								rotationAngle={rotationAngle}
							/>

							{/* Bottom decoration */}
							<CardItem
								translateZ="0"
								className="absolute bottom-[calc(3mm*1)] md:bottom-[calc(3mm*1.5)] left-6 right-40"
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
