"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

type Props = {
	value: number | string;
	label: string;
	duration: number;
};

const Statistic = ({ value, label, duration }: Props) => {
	const [isInView, setIsInView] = useState(false);

	const handleInViewChange = (inView: boolean) => {
		setIsInView(inView);
	};

	// Check if the value is a percentage string and extract the numeric part
	const isPercentage = typeof value === "string" && value.includes("%");
	const numberValue = isPercentage
		? parseInt(value.replace("%", ""), 10)
		: typeof value === "number"
		? value
		: parseInt(value, 10);

	return (
		<motion.div
			className="flex flex-col items-center p-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: isInView ? 1 : 0 }}
			transition={{ duration: 0.5 }}
			onViewportEnter={() => handleInViewChange(true)}
			onViewportLeave={() => handleInViewChange(false)}
		>
			<div className="text-4xl font-bold text-primary border-4 border-primary/10 w-[200px] h-[200px] flex items-center justify-center rounded-full">
				{isInView ? (
					<CountUp
						start={0}
						end={numberValue}
						duration={duration}
						suffix={isPercentage ? "%" : ""}
					/>
				) : (
					<span>0{isPercentage ? "%" : ""}</span>
				)}
			</div>
			<p className="text-neutral-500 mt-8 text-center text-2xl">{label}</p>
		</motion.div>
	);
};

export default Statistic;
