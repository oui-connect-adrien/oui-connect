import { CardItem } from "./3d-card";

interface CardDescriptionProps {
	description: string;
}

export const CardDescription = ({ description }: CardDescriptionProps) => {
	return (
		<CardItem translateZ="0" className="mt-[calc(4mm*1)] md:mt-[calc(4mm*1.5)]">
			<p className="text-white/90 px-4 text-[calc(3mm*1)] md:text-[calc(3mm*1.5)] leading-relaxed max-w-[80%]">
				{description}
			</p>
		</CardItem>
	);
};
