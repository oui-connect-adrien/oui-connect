import { QrCode, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardItem } from "./3d-card";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

interface CardActionsProps {
	vCardData: string;
}

export const CardActions = ({ vCardData }: CardActionsProps) => {
	const [showQR, setShowQR] = useState<boolean>(false);
	const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(
		null
	);

	const handlePressStart = () => {
		const timer = setTimeout(() => setShowQR(!showQR), 500);
		setLongPressTimer(timer);
	};

	const handlePressEnd = () => {
		if (longPressTimer) {
			clearTimeout(longPressTimer);
			setLongPressTimer(null);
		}
	};

	return (
		<>
			<CardItem
				translateZ="0"
				className="absolute top-[calc(20mm*1)] right-[calc(9.5mm*1)] md:top-[calc(20mm*1.5)] md:right-[calc(9.5mm*1.5)] w-[calc(10.5mm*1)] md:w-[calc(10.5mm*1.5)]"
			>
				{/* Mobile: Add Contact Button */}
				<div className="md:hidden">
					<Button
						onClick={() => {
							const blob = new Blob([vCardData], { type: "text/vcard" });
							const url = window.URL.createObjectURL(blob);
							const link = document.createElement("a");
							link.href = url;
							link.download = "contact.vcf";
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
							window.URL.revokeObjectURL(url);
						}}
						onMouseDown={handlePressStart}
						onMouseUp={handlePressEnd}
						onMouseLeave={handlePressEnd}
						onTouchStart={handlePressStart}
						onTouchEnd={handlePressEnd}
						className="bg-transparent hover:bg-white/20 transition-colors rounded-full"
					>
						<UserPlus className="w-[calc(5mm*1)] h-[calc(5mm*1)] text-white" />
					</Button>
				</div>
				{/* Desktop: QR Code Button */}
				<div className="hidden md:block">
					<Button
						onClick={() => setShowQR(!showQR)}
						className="bg-transparent hover:bg-white/20 transition-colors rounded-full"
					>
						<QrCode className="w-[calc(5mm*1.5)] h-[calc(5mm*1.5)] text-white" />
					</Button>
				</div>
			</CardItem>

			{/* QR Code Modal */}
			{showQR && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
					<div className="bg-white p-6 rounded-lg">
						<QRCodeSVG value={vCardData} size={100} level="L" />
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
		</>
	);
};
