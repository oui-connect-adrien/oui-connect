import { Skeleton } from '@/components/ui/skeleton';

/**
 * Skeleton loader pour une carte d'article de blog
 * Utilisé pendant le chargement avec Suspense
 */
export function BlogPostSkeleton() {
	return (
		<div className="block p-6 border rounded-lg">
			{/* Titre */}
			<Skeleton className="h-8 w-3/4 mb-2" />

			{/* Description (2 lignes) */}
			<Skeleton className="h-4 w-full mb-1" />
			<Skeleton className="h-4 w-5/6 mb-3" />

			{/* Métadonnées */}
			<div className="flex items-center gap-4">
				<Skeleton className="h-4 w-24" />
				<span className="text-muted-foreground">•</span>
				<Skeleton className="h-4 w-20" />
			</div>
		</div>
	);
}

/**
 * Liste de skeletons pour la page blog
 * Affiche 3 cartes par défaut
 */
export function BlogPostListSkeleton({ count = 3 }: { count?: number }) {
	return (
		<div className="space-y-6">
			{Array.from({ length: count }).map((_, i) => (
				<BlogPostSkeleton key={i} />
			))}
		</div>
	);
}
