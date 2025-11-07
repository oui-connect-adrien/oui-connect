"use server";

import { BLOG_CONFIG } from "../_constants";
import { BlogPostMetadata } from "../_types";
import { getBlogPosts } from "./get-blog-posts";

/**
 * Récupère les articles relatés pour un article donné
 * @param currentSlug Slug de l'article actuel
 * @param limit Nombre maximum d'articles à retourner
 * @returns Liste des articles relatés
 */
export async function getRelatedPosts(
	currentSlug: string,
	limit: number = BLOG_CONFIG.RELATED_POSTS_LIMIT
): Promise<BlogPostMetadata[]> {
	try {
		const allPosts = await getBlogPosts();

		// Exclure l'article actuel
		const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);

		// Pour l'instant, retourner les articles les plus récents
		// Dans le futur, on pourrait utiliser des catégories/tags pour améliorer la pertinence
		return otherPosts.slice(0, limit);
	} catch (error) {
		console.error("Error fetching related posts:", error);
		return [];
	}
}
