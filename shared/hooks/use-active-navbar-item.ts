"use client";

import { useEffect, useState } from "react";

// Constants - Adaptation pour les sections Oui-Connect
const SECTIONS = {
	HOME: "home",
	SOLUTIONS: "solutions",
	ABOUT: "qui-sommes-nous",
	CONTACT: "contact",
} as const;

const VIEWPORT_THRESHOLD = 0.4;

type Section = (typeof SECTIONS)[keyof typeof SECTIONS];

export function useActiveNavbarItem() {
	const [activeSection, setActiveSection] = useState<Section>(SECTIONS.HOME);

	useEffect(() => {
		const updateActiveSection = () => {
			const solutionsElement = document.getElementById(SECTIONS.SOLUTIONS);
			const aboutElement = document.getElementById(SECTIONS.ABOUT);
			const contactElement = document.getElementById(SECTIONS.CONTACT);

			if (!solutionsElement || !aboutElement || !contactElement) return;

			const viewport = window.innerHeight;
			const threshold = viewport * VIEWPORT_THRESHOLD;

			const solutionsRect = solutionsElement.getBoundingClientRect();
			const aboutRect = aboutElement.getBoundingClientRect();
			const contactRect = contactElement.getBoundingClientRect();

			// Check if currently in contact section
			const isInContact =
				contactRect.top <= threshold && contactRect.bottom >= threshold;

			// Check if currently in about section
			const isInAbout =
				aboutRect.top <= threshold && aboutRect.bottom >= threshold;

			// Check if currently in solutions section
			const isInSolutions =
				solutionsRect.top <= threshold && solutionsRect.bottom >= threshold;

			// Determine active section (order matters - from bottom to top)
			if (isInContact) {
				setActiveSection(SECTIONS.CONTACT);
			} else if (isInAbout) {
				setActiveSection(SECTIONS.ABOUT);
			} else if (isInSolutions) {
				setActiveSection(SECTIONS.SOLUTIONS);
			} else if (solutionsRect.top > threshold) {
				setActiveSection(SECTIONS.HOME);
			}
		};

		// Throttled scroll handler
		let isScrolling = false;
		const handleScroll = () => {
			if (!isScrolling) {
				requestAnimationFrame(() => {
					updateActiveSection();
					isScrolling = false;
				});
				isScrolling = true;
			}
		};

		// Setup scroll listener
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Initial check
		updateActiveSection();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Check if menu item is active
	const isMenuItemActive = (href: string): boolean => {
		if (href === "/") {
			return activeSection === SECTIONS.HOME;
		}

		if (href.startsWith("/#")) {
			const sectionId = href.substring(2);
			return activeSection === sectionId;
		}

		return false;
	};

	return {
		isMenuItemActive,
		activeSection,
	};
}
