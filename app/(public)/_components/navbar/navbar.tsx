import Image from "next/image";
import Link from "next/link";
import { MenuSheet } from "./menu-sheet";
import { NavbarWrapper } from "./navbar-wrapper";
import LoginModal from "../login-modal";

/**
 * Navbar principale du site - Server Component
 *
 * Affiche la navigation principale avec :
 * - Menu burger (navigation mobile et desktop) - gauche
 * - Logo centré avec effet hover - centre
 * - Bouton "Se connecter" - droite
 *
 * Architecture :
 * - Server Component simple
 * - Wrappé dans NavbarWrapper (Client Component) pour gérer l'effet de scroll
 * - Glass effect (transparent → blanc opaque) lors du scroll via NavbarWrapper
 *
 * Accessibilité :
 * - Utilise role="navigation" et aria-label pour la sémantique
 * - Labels ARIA descriptifs sur tous les liens
 * - Touch targets ≥ 48px (conforme WCAG)
 * - Focus visible bien géré
 *
 * @returns La navbar complète avec menu, logo et bouton de connexion
 */
export function Navbar() {
	return (
		<NavbarWrapper>
			<nav
				role="navigation"
				aria-label="Navigation principale"
				className="transition-all duration-300 ease-in-out"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
					<div className="flex h-16 sm:h-20 items-center">
						{/* Menu burger (tout à gauche) */}
						<div className="flex flex-1 items-center">
							<MenuSheet />
						</div>

						{/* Logo centré */}
						<div className="flex items-center justify-center">
							<Link
								href="/"
								className="relative block transition-all duration-300 ease-out hover:scale-105"
								aria-label="Retour à l'accueil"
							>
								<div className="relative w-[180px] sm:w-[200px] h-16 sm:h-20">
									<Image
										src="/logo_oui-connect.png"
										alt="logo oui-connect"
										fill
										style={{ objectFit: "contain" }}
										priority
										sizes="(max-width: 640px) 180px, 200px"
									/>
								</div>
							</Link>
						</div>

						{/* Section droite: Bouton Se connecter */}
						<div className="flex flex-1 items-center justify-end">
							<LoginModal />
						</div>
					</div>
				</div>
			</nav>
		</NavbarWrapper>
	);
}
