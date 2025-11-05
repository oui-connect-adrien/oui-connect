"use client";

import { cn } from "@/utils";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

const MouseEnterContext = createContext<{
	mouseX: number;
	mouseY: number;
	mouseXPercentage: number;
	mouseYPercentage: number;
	isMouseEntered: boolean;
	isMobile: boolean;
} | null>(null);

// Helper function to detect mobile devices
const isMobileDevice = () => {
	if (typeof window === "undefined") return false;

	// Check for touch capability and screen width
	const hasTouchScreen =
		"ontouchstart" in window || navigator.maxTouchPoints > 0;
	const isSmallScreen = window.innerWidth <= 768;

	return hasTouchScreen && isSmallScreen;
};

export const CardContainer = ({
	children,
	className,
	containerClassName,
	onLongPress,
}: {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
	onLongPress?: (e: React.MouseEvent | React.TouchEvent) => void;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [mousePosition, setMousePosition] = useState({
		mouseX: 0,
		mouseY: 0,
		mouseXPercentage: 0,
		mouseYPercentage: 0,
		isMouseEntered: false,
		isMobile: false,
	});

	// Long press handling
	const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
	const isLongPressRef = useRef(false);

	useEffect(() => {
		const mobile = isMobileDevice();
		setIsMobile(mobile);
		setMousePosition((prev) => ({ ...prev, isMobile: mobile }));

		const handleResize = () => {
			const mobile = isMobileDevice();
			setIsMobile(mobile);
			setMousePosition((prev) => ({ ...prev, isMobile: mobile }));
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const startLongPress = (e: React.MouseEvent | React.TouchEvent) => {
		isLongPressRef.current = false;

		longPressTimerRef.current = setTimeout(() => {
			isLongPressRef.current = true;
			onLongPress?.(e);
		}, 500); // 500ms for long press
	};

	const cancelLongPress = (e: React.MouseEvent | React.TouchEvent) => {
		if (longPressTimerRef.current) {
			clearTimeout(longPressTimerRef.current);
			longPressTimerRef.current = null;
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		// Prevent click if it was a long press
		if (isLongPressRef.current) {
			e.preventDefault();
			e.stopPropagation();
			isLongPressRef.current = false;
		}
	};

	const updateMousePosition = (ev: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current || isMobile) return;

		const rect = containerRef.current.getBoundingClientRect();
		const mouseX = ev.clientX - rect.left;
		const mouseY = ev.clientY - rect.top;
		const mouseXPercentage = mouseX / rect.width;
		const mouseYPercentage = mouseY / rect.height;
		setMousePosition({
			mouseX,
			mouseY,
			mouseXPercentage,
			mouseYPercentage,
			isMouseEntered: true,
			isMobile,
		});
	};

	const resetMousePosition = () => {
		setMousePosition({
			mouseX: 0,
			mouseY: 0,
			mouseXPercentage: 0.5,
			mouseYPercentage: 0.5,
			isMouseEntered: false,
			isMobile,
		});
	};

	const handleMouseLeave = (e: React.MouseEvent) => {
		resetMousePosition();
		cancelLongPress(e);
	};

	return (
		<div
			className={cn("relative group/card", containerClassName)}
			ref={containerRef}
			onMouseMove={updateMousePosition}
			onMouseLeave={handleMouseLeave}
			onMouseDown={startLongPress}
			onMouseUp={cancelLongPress}
			onTouchStart={startLongPress}
			onTouchEnd={cancelLongPress}
			onTouchCancel={cancelLongPress}
			onClick={handleClick}
		>
			<MouseEnterContext.Provider value={mousePosition}>
				<div className={cn("", className)}>{children}</div>
			</MouseEnterContext.Provider>
		</div>
	);
};

export const CardBody = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mousePosition = useContext(MouseEnterContext);

	useEffect(() => {
		if (!containerRef.current || !mousePosition) return;
		const { mouseXPercentage, mouseYPercentage, isMouseEntered, isMobile } =
			mousePosition;

		// Don't apply 3D transforms on mobile
		if (isMobile) {
			containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
			return;
		}

		if (!isMouseEntered) {
			containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
			return;
		}

		const rotateY = (mouseXPercentage - 0.5) * 20;
		const rotateX = (mouseYPercentage - 0.5) * -20;

		containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	}, [mousePosition]);

	return (
		<div
			ref={containerRef}
			className={cn(
				"transform-gpu transition-transform duration-200 ease-linear will-change-transform",
				className
			)}
		>
			{children}
		</div>
	);
};

export const CardItem = ({
	children,
	className,
	translateX = 0,
	translateY = 0,
	translateZ = 0,
	as: Component = "div",
	...rest
}: {
	children: React.ReactNode;
	className?: string;
	translateX?: number | string;
	translateY?: number | string;
	translateZ?: number | string;
	as?: any;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const mousePosition = useContext(MouseEnterContext);

	useEffect(() => {
		if (!containerRef.current || !mousePosition) return;
		const { mouseXPercentage, mouseYPercentage, isMouseEntered, isMobile } =
			mousePosition;

		// Don't apply 3D transforms on mobile
		if (isMobile) {
			containerRef.current.style.transform = `translate3d(0px, 0px, ${translateZ}px)`;
			return;
		}

		if (!isMouseEntered) {
			containerRef.current.style.transform = `translate3d(0px, 0px, ${translateZ}px)`;
			return;
		}

		const translateX = (mouseXPercentage - 0.5) * 20;
		const translateY = (mouseYPercentage - 0.5) * 20;

		containerRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`;
	}, [mousePosition, translateZ]);

	return (
		<Component
			ref={containerRef}
			className={cn(
				"transform-gpu transition-transform duration-200 ease-linear will-change-transform",
				className
			)}
			{...rest}
		>
			{children}
		</Component>
	);
};
