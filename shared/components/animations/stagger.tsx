"use client";

import { motion } from "motion/react";
import { Children, isValidElement, ReactNode } from "react";

interface StaggerProps {
	children: ReactNode;
	delay?: number;
	staggerDelay?: number;
	duration?: number;
	threshold?: number;
	once?: boolean;
	className?: string;
}

/**
 * Composant Stagger pour animer les enfants de manière échelonnée
 *
 * Note: Les enfants doivent avoir des keys uniques pour une performance optimale.
 * Si les enfants n'ont pas de keys, un index sera utilisé en fallback.
 */
export const Stagger = ({
	children,
	delay = 0,
	staggerDelay = 0.1,
	duration = 0.6,
	threshold = 0.1,
	once = true, // Animation joue une seule fois par défaut (convention standard)
	className = "",
}: StaggerProps) => {
	const childrenArray = Children.toArray(children);

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{
				once,
				amount: threshold,
			}}
			variants={{
				hidden: {},
				visible: {
					transition: {
						delayChildren: delay,
						staggerChildren: staggerDelay,
					},
				},
			}}
			className={className}
		>
			{childrenArray.map((child, index) => {
				// Utilise la key de l'enfant si elle existe, sinon utilise un index avec préfixe
				const key = isValidElement(child) && child.key
					? child.key
					: `stagger-child-${index}`;

				return (
					<motion.div
						key={key}
						variants={{
							hidden: {
								opacity: 0,
								y: 20,
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration,
									ease: "easeOut",
								},
							},
						}}
					>
						{child}
					</motion.div>
				);
			})}
		</motion.div>
	);
};
