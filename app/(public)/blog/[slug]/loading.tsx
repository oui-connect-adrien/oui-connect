import { BlogArticleSkeleton } from '../_components/blog-article-skeleton';

/**
 * Loading UI pour une page d'article de blog
 * Affiche automatiquement pendant le chargement (Next.js)
 * Réplique exactement la structure de page.tsx
 */
export default function BlogArticleLoading() {
	return <BlogArticleSkeleton />;
}
