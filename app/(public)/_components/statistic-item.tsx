"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

type Props = {
	value?: number | string;
	label: string;
	duration?: number;
	icon?: React.ReactNode;
};

const StatisticItem = ({ value, label, duration = 1, icon }: Props) => {
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
		: parseInt(value || "0", 10);

	useEffect(() => {
		if (icon || value === "A à Z") {
			setIsInView(true);
		}
	}, [icon, value]);

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
				{icon && isInView ? (
					icon
				) : value !== undefined && isInView ? (
					typeof value === "string" ? (
						<span>{value}</span>
					) : (
						<CountUp
							start={0}
							end={numberValue}
							duration={duration}
							suffix={isPercentage ? "%" : ""}
						/>
					)
				) : (
					<span>{isPercentage ? "0%" : "0"}</span>
				)}
			</div>
			<p className="text-neutral-500 mt-8 text-center text-2xl">{label}</p>
		</motion.div>
	);
};

export default StatisticItem;
