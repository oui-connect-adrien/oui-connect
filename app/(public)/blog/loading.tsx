import { BlogPostListSkeleton } from './_components/blog-post-skeleton';

/**
 * Loading UI pour la page liste des articles de blog
 * Affiche automatiquement pendant le chargement (Next.js)
 * Réplique exactement la structure de page.tsx
 */
export default function BlogLoading() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
			<h1 className="text-4xl font-bold mb-2">Blog</h1>
			<p className="text-muted-foreground mb-12">
				Découvrez nos derniers articles et guides sur OuiConnect
			</p>

			<BlogPostListSkeleton count={3} />
		</div>
	);
}
