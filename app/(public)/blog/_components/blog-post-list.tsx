import { use } from "react";
import type { BlogPostMetadata } from "../_types";
import { BlogPostCard } from "./blog-post-card";

interface BlogPostListProps {
	postsPromise: Promise<BlogPostMetadata[]>;
}

/**
 * Composant liste des articles avec loading.tsx
 * Le skeleton est géré par loading.tsx au niveau de la page
 */
export function BlogPostList({ postsPromise }: BlogPostListProps) {
	const posts = use(postsPromise);

	if (posts.length === 0) {
		return (
			<p className="text-center text-muted-foreground py-12">
				Aucun article publié pour le moment.
			</p>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{posts.map((post, index) => (
				<BlogPostCard key={index} post={post} />
			))}
		</div>
	);
}
