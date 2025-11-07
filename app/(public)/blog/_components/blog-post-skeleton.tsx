import { Skeleton } from '@/components/ui/skeleton';

/**
 * Skeleton loader pour une carte d'article de blog
 * Réplique exactement la structure de BlogPostCard
 */
export function BlogPostSkeleton() {
	return (
		<div className="block">
			<article className="relative overflow-hidden rounded-lg border bg-card">
				{/* Image de couverture skeleton */}
				<div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
					<Skeleton className="h-full w-full" />
					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
				</div>

				{/* Contenu */}
				<div className="p-6">
					{/* Tags skeleton */}
					<div className="flex flex-wrap gap-2 mb-3">
						<Skeleton className="h-5 w-16 rounded-full" />
						<Skeleton className="h-5 w-20 rounded-full" />
						<Skeleton className="h-5 w-14 rounded-full" />
					</div>

					{/* Titre skeleton */}
					<Skeleton className="h-7 w-full mb-2" />
					<Skeleton className="h-7 w-3/4 mb-3" />

					{/* Description skeleton (3 lignes) */}
					<Skeleton className="h-4 w-full mb-2" />
					<Skeleton className="h-4 w-full mb-2" />
					<Skeleton className="h-4 w-2/3 mb-4" />

					{/* Métadonnées skeleton */}
					<div className="flex flex-wrap items-center gap-4 text-sm">
						<Skeleton className="h-4 w-32" />
					</div>
				</div>
			</article>
		</div>
	);
}

/**
 * Liste de skeletons pour la page blog
 * Réplique la grille responsive de BlogPostList
 */
export function BlogPostListSkeleton({ count = 6 }: { count?: number }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{Array.from({ length: count }).map((_, i) => (
				<BlogPostSkeleton key={i} />
			))}
		</div>
	);
}
