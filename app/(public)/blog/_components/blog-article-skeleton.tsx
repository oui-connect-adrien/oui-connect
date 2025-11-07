import { Skeleton } from '@/components/ui/skeleton';

/**
 * Skeleton pour les breadcrumbs d'un article
 */
function BreadcrumbsSkeleton() {
	return (
		<div className="mb-6 flex items-center gap-2 text-sm">
			<Skeleton className="h-4 w-16" />
			<span className="text-muted-foreground">/</span>
			<Skeleton className="h-4 w-12" />
			<span className="text-muted-foreground">/</span>
			<Skeleton className="h-4 w-40" />
		</div>
	);
}

/**
 * Skeleton pour l'en-tête d'un article
 */
function ArticleHeaderSkeleton() {
	return (
		<header className="mb-8">
			{/* Titre */}
			<Skeleton className="h-12 md:h-14 w-full max-w-2xl mb-4" />

			{/* Métadonnées */}
			<div className="flex gap-4 text-muted-foreground items-center">
				<Skeleton className="h-4 w-32" />
				<span>•</span>
				<Skeleton className="h-4 w-24" />
			</div>
		</header>
	);
}

/**
 * Skeleton pour le contenu de l'article
 */
function ArticleContentSkeleton() {
	return (
		<div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
			{/* Paragraphe d'introduction */}
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-3/4" />

			{/* Titre de section */}
			<Skeleton className="h-8 w-2/3 mt-8" />

			{/* Paragraphe */}
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-5/6" />

			{/* Liste */}
			<div className="space-y-2 my-4">
				<Skeleton className="h-4 w-4/5" />
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-4 w-4/5" />
			</div>

			{/* Titre de section */}
			<Skeleton className="h-8 w-1/2 mt-8" />

			{/* Paragraphe */}
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-2/3" />

			{/* Bloc de code */}
			<Skeleton className="h-32 w-full my-6" />

			{/* Titre de section */}
			<Skeleton className="h-6 w-2/3 mt-8" />

			{/* Paragraphe final */}
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-4/5" />
		</div>
	);
}

/**
 * Skeleton pour les articles relatés
 */
function RelatedPostsSkeleton() {
	return (
		<aside className="mt-12 pt-8 border-t border-border">
			<Skeleton className="h-8 w-48 mb-6" />

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 3 }).map((_, i) => (
					<div key={i} className="block p-5 border border-border rounded-lg bg-card">
						<Skeleton className="h-6 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-1" />
						<Skeleton className="h-4 w-3/4 mb-3" />
						<div className="flex items-center justify-between">
							<Skeleton className="h-3 w-24" />
							<Skeleton className="h-3 w-12" />
						</div>
					</div>
				))}
			</div>
		</aside>
	);
}

/**
 * Skeleton complet pour une page d'article de blog
 * Réplique exactement la structure de [slug]/page.tsx
 */
export function BlogArticleSkeleton() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
			{/* Breadcrumbs */}
			<BreadcrumbsSkeleton />

			{/* Article */}
			<article>
				<ArticleHeaderSkeleton />
				<ArticleContentSkeleton />
			</article>

			{/* Articles relatés */}
			<RelatedPostsSkeleton />
		</div>
	);
}
