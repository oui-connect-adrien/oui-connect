import { CardItem } from "./3d-card";
import { ImageSticker } from "./image-sticker";

interface CardCustomImageProps {
	custom_image: string;
	rotationAngle: number;
}

export const CardCustomImage = ({
	custom_image,
	rotationAngle,
}: CardCustomImageProps) => {
	return (
		<CardItem
			translateZ="100"
			className="absolute bottom-[calc(7mm*1)] right-[calc(7mm*1)] w-[calc(12mm*1)] h-[calc(12mm*1)] md:bottom-[calc(7mm*1.5)] md:right-[calc(7mm*1.5)] md:w-[calc(12mm*1.5)] md:h-[calc(12mm*1.5)]"
		>
			<div
				className="relative w-full h-full"
				style={{
					transform: `rotate(${rotationAngle}deg)`,
					transition: "transform 0.3s ease-out",
				}}
			>
				<ImageSticker
					src={custom_image}
					alt="Custom Image"
					width={128}
					height={128}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>
		</CardItem>
	);
};
