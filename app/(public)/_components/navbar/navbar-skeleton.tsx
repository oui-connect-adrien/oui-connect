/**
 * Skeleton de la Navbar pour le fallback de Suspense
 * Affiche une navbar simplifiée pendant le chargement des données utilisateur
 */
export function NavbarSkeleton() {
	return (
		<header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out border-b bg-transparent border-transparent">
			<nav
				role="navigation"
				aria-label="Navigation principale"
				className="transition-all duration-300 ease-in-out"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
					<div className="flex h-16 sm:h-20 items-center">
						{/* Section gauche: Menu burger skeleton */}
						<div className="flex flex-1 items-center">
							<div className="h-10 w-10 animate-pulse bg-muted rounded-xl" />
						</div>

						{/* Logo centré skeleton */}
						<div className="flex items-center justify-center">
							<div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 animate-pulse bg-muted rounded-full" />
						</div>

						{/* Section droite: Bouton Se connecter skeleton */}
						<div className="flex flex-1 items-center justify-end">
							<div className="h-10 w-32 animate-pulse bg-muted rounded-lg" />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
