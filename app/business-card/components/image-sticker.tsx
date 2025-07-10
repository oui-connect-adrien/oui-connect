import { ComponentProps, CSSProperties } from "react";
import Image from "next/image";

interface ImageStickerProps
	extends Omit<ComponentProps<typeof Image>, "className" | "style"> {
	className?: string;
	containerClassName?: string;
	borderWidth?: number;
	style?: CSSProperties;
}

export const ImageSticker = ({
	className = "",
	containerClassName = "",
	borderWidth = 2,
	style,
	...props
}: ImageStickerProps) => {
	// Generate the drop shadow layers
	const generateDropShadows = (width: number) => {
		const layers = [];
		for (let i = width; i > 0; i--) {
			layers.push(
				`drop-shadow(${i}px 0 0 white)`,
				`drop-shadow(-${i}px 0 0 white)`,
				`drop-shadow(0 ${i}px 0 white)`,
				`drop-shadow(0 -${i}px 0 white)`
			);
		}
		return layers.join(" ");
	};

	return (
		<div className={`relative ${containerClassName}`}>
			<Image
				{...props}
				className={`object-cover relative ${className}`}
				style={{
					...style,
					filter: generateDropShadows(borderWidth),
				}}
			/>
		</div>
	);
};
