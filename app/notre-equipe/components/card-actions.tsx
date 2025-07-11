import { QrCode, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardItem } from "./3d-card";
import { QRCodeSVG } from "qrcode.react";
import { useState, useCallback } from "react";

interface CardActionsProps {
	vCardData: string;
	name: string;
}

export const CardActions = ({ vCardData, name }: CardActionsProps) => {
	const [showQR, setShowQR] = useState<boolean>(false);

	const downloadVCard = useCallback(() => {
		const blob = new Blob([vCardData], { type: "text/vcard" });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `contact-${name}.vcf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	}, [vCardData]);

	const toggleQR = useCallback(() => {
		setShowQR(!showQR);
	}, [showQR]);

	const closeQR = useCallback(() => {
		setShowQR(false);
	}, []);

	return (
		<>
			<CardItem
				translateZ="0"
				className="absolute top-[calc(20mm*1)] md:top-[calc(20mm*1.5)] right-[calc(8mm*1)] md:right-[calc(8mm*1.5)] w-[calc(10.5mm*1)] md:w-[calc(10.5mm*1.5)]"
			>
				{/* Desktop: QR Code Button */}
				<Button
					onClick={toggleQR}
					className="bg-transparent hover:bg-white/20 transition-colors rounded-full p-2"
				>
					<UserPlus className="md:w-[calc(5mm*1.5)] md:h-[calc(5mm*1.5)] w-[calc(5mm*1)] h-[calc(5mm*1)] text-white" />
				</Button>
			</CardItem>

			{/* QR Code Modal */}
			{showQR && (
				<div
					className="absolute inset-0 flex items-center justify-center bg-black/50 z-50"
					onClick={closeQR}
				>
					<div
						className="bg-white p-6 rounded-lg shadow-xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex flex-col items-center">
							<QRCodeSVG value={vCardData} size={120} level="L" />
							<div className="mt-4 flex gap-2">
								<Button
									onClick={downloadVCard}
									variant="outline"
									size="sm"
									className="rounded-xl"
								>
									<UserPlus className="w-4 h-4 mr-2" />
									Enregistrer
								</Button>
								<Button
									onClick={closeQR}
									variant="outline"
									size="sm"
									className="rounded-xl"
								>
									<X className="w-4 h-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
