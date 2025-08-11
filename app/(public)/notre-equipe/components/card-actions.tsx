import { Button } from "@/shared/components/ui/button";
import { Download, UserPlus, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useCallback, useState } from "react";
import { CardItem } from "./3d-card";

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
					className="absolute top-0 left-0 w-full h-full md:rounded-2xl rounded-xl flex items-center justify-center bg-black/50 z-50 cursor-pointer"
					onClick={closeQR}
				>
					<div
						className="flex flex-col gap-2 items-center bg-background/80 border border-secondary backdrop-blur-sm  py-2 w-64 rounded-lg shadow-2xl cursor-default"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex  w-full">
							<p className="text-sm text-foreground font-semibold ml-4 mt-2">
								Enregistrer le contact
							</p>
							<Button
								onClick={closeQR}
								variant="ghost"
								size="sm"
								className="rounded-xl ml-auto mr-2"
							>
								<X className="w-4 h-4" />
							</Button>
						</div>
						<div className="bg-white p-2 rounded-lg">
							<QRCodeSVG value={vCardData} size={120} level="L" />
						</div>
						<Button
							onClick={downloadVCard}
							variant="outline"
							size="sm"
							className="rounded-xl  gap-2"
						>
							<Download className="w-4 h-4" />
						</Button>
					</div>
				</div>
			)}
		</>
	);
};
