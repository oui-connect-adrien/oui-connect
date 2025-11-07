import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogPostMetadata } from '../_types';
import { formatDate } from '../_lib';

interface RelatedPostsProps {
	posts: BlogPostMetadata[];
}

/**
 * Composant pour afficher les articles relatés dans une sidebar
 * Utilise <aside> pour la sémantique HTML
 */
export function RelatedPosts({ posts }: RelatedPostsProps) {
	if (posts.length === 0) {
		return null;
	}

	return (
		<aside
			className="mt-12 pt-8 border-t border-border"
			aria-labelledby="related-posts-title"
		>
			<h2
				id="related-posts-title"
				className="text-2xl font-bold mb-6 flex items-center gap-2"
			>
				Articles relatés
			</h2>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="group block p-5 border border-border rounded-lg hover:border-primary transition-colors bg-card"
					>
						<h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
							{post.title}
						</h3>

						<p className="text-sm text-muted-foreground mb-3 line-clamp-2">
							{post.description}
						</p>

						<div className="flex items-center justify-between text-xs text-muted-foreground">
							<time dateTime={post.date}>{formatDate(post.date)}</time>
							<span className="flex items-center gap-1 group-hover:text-primary transition-colors">
								Lire
								<ArrowRight className="w-3 h-3" />
							</span>
						</div>
					</Link>
				))}
			</div>
		</aside>
	);
}
