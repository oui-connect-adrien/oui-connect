"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { MOTION_CONFIG } from "./motion.config";

export interface RevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	y?: number;
	once?: boolean;
	amount?: number | "some" | "all";
	role?: string;
	/** Data attributes (e.g., data-testid) */
	[key: `data-${string}`]: string | undefined;
}

/**
 * Animation reveal avec whileInView (scroll-triggered)
 * L'animation se déclenche quand l'élément entre dans le viewport
 */
export function Reveal({
	children,
	className,
	delay = 0,
	duration = MOTION_CONFIG.duration.normal,
	y = MOTION_CONFIG.transform.fadeY,
	once = true,
	amount = 0.2,
	role,
	...rest
}: RevealProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			role={role}
			style={{ willChange: "opacity, transform" }}
			initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once, amount }}
			transition={{
				duration: shouldReduceMotion ? 0 : duration,
				delay: shouldReduceMotion ? 0 : delay,
				ease: "easeOut",
			}}
			{...rest}
		>
			{children}
		</motion.div>
	);
}
