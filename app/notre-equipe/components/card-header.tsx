import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardItem } from "./3d-card";

interface CardHeaderProps {
	name: string;
	role: string;
	company_image: string;
	company_name: string;
	onCopy: (text: string, label: string) => void;
	copiedText: string | null;
}

export const CardHeader = ({
	name,
	role,
	company_image,
	company_name,
	onCopy,
	copiedText,
}: CardHeaderProps) => {
	return (
		<CardItem
			translateZ="100"
			className="flex justify-between items-start w-full"
		>
			<div className="space-y-1 flex-grow">
				<Button
					onClick={() => onCopy(name, "Nom")}
					variant="ghost"
					className="px-1 text-left text-[calc(5mm*1)] md:text-[calc(5mm*1.5)] font-bold text-white hover:text-white/90 transition-colors group flex gap-2 hover:bg-white/10"
				>
					{name}
					{copiedText === name ? (
						<Check className="w-5 h-5 text-green-400" />
					) : (
						<Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
					)}
				</Button>
				<p className="text-left text-[calc(3mm*1)] md:text-[calc(3mm*1.5)] text-white/80 transition-colors group flex items-center gap-2 px-1">
					{role}
				</p>
			</div>
			<div className="flex flex-col items-center w-[calc(20mm*1)] md:w-[calc(20mm*1.5)]">
				<div className="relative flex-shrink-0 w-[calc(10mm*1)] h-[calc(10mm*1)] md:w-[calc(10mm*1.5)] md:h-[calc(10mm*1.5)] rounded-full overflow-hidden border-2 border-white/20">
					<Image
						src={company_image}
						alt={company_name}
						width={96}
						height={96}
						className="object-cover"
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<p className="text-white/90 text-[calc(3mm*1)] md:text-[calc(3mm*1.5)] leading-relaxed">
					{company_name}
				</p>
			</div>
		</CardItem>
	);
};
