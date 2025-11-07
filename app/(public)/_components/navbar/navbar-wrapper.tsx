"use client";

import { useIsScrolled } from "@/hooks/use-is-scrolled";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

/**
 * Props du wrapper de la Navbar
 */
interface NavbarWrapperProps {
	/** Contenu de la navbar (typiquement le composant Navbar) */
	children: React.ReactNode;
}

/**
 * Wrapper client de la Navbar avec effet de scroll
 *
 * Gère l'apparence de la navbar en fonction du scroll et de la page :
 * - En haut de page : transparent avec bordure transparente
 * - Après scroll (> 20px) : glass effect (bg-white/95) avec ombre et bordure
 * - Sur pages blog avec hero : fond opaque dès le début pour le contraste
 *
 * Architecture :
 * - Client Component ("use client") - nécessaire pour détecter le scroll
 * - Utilise le hook useIsScrolled pour détecter le scroll (listener passive pour performance)
 * - Utilise usePathname pour détecter les pages blog
 * - Transition fluide de 300ms entre les états
 *
 * Performance :
 * - Listener scroll avec { passive: true } pour éviter de bloquer le scroll
 * - État local minimal (boolean)
 * - Re-renders limités aux changements d'état scroll
 *
 * @param props - Les props du composant
 * @param props.children - Le contenu à wrapper (Navbar)
 * @returns Un header fixed avec glass effect dynamique
 */
export function NavbarWrapper({ children }: NavbarWrapperProps) {
	const isScrolled = useIsScrolled(20);
	const pathname = usePathname();

	// Sur les pages d'articles de blog, forcer un fond opaque pour améliorer le contraste avec l'image hero
	const isBlogArticle = pathname?.startsWith('/blog/') && pathname !== '/blog';
	const shouldBeOpaque = isScrolled || isBlogArticle;

	return (
		<header
			data-scrolled={isScrolled ? "true" : "false"}
			data-blog-article={isBlogArticle ? "true" : "false"}
			className={cn(
				"fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out",
				"border-b",
				shouldBeOpaque
					? "bg-white/95 dark:bg-slate-900/95 border-border/60 shadow-xl backdrop-blur-md"
					: "bg-transparent border-transparent"
			)}
		>
			{children}
		</header>
	);
}
