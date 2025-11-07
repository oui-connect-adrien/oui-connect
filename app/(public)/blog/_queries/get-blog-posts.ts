"use server";

import fs from "fs";
import path from "path";
import { BLOG_CONFIG, METADATA_FIELDS } from "../_constants";
import { BlogPostMetadata } from "../_types";

/**
 * Récupère tous les articles du blog avec leurs métadonnées
 * @returns Liste des articles triés par date décroissante
 */
export async function getBlogPosts(): Promise<BlogPostMetadata[]> {
	const postsDirectory = path.join(process.cwd(), BLOG_CONFIG.CONTENT_PATH);

	// Vérifier si le dossier existe
	if (!fs.existsSync(postsDirectory)) {
		console.warn(BLOG_CONFIG.ERRORS.NO_CONTENT_DIRECTORY, postsDirectory);
		return [];
	}

	const filenames = fs
		.readdirSync(postsDirectory)
		.filter((f) => f.endsWith(".mdx"));

	const posts = await Promise.all(
		filenames.map(async (filename) => {
			const slug = filename.replace(/\.mdx$/, "");

			try {
				const { metadata } = await import(
					`@/app/(public)/blog/_content/${slug}.mdx`
				);

				// Validation de la structure des métadonnées
				if (!metadata || typeof metadata !== "object") {
					throw new Error(`${BLOG_CONFIG.ERRORS.INVALID_METADATA} for ${slug}`);
				}

				// Vérifier les champs requis
				for (const field of METADATA_FIELDS.REQUIRED) {
					if (!metadata[field]) {
						throw new Error(`Missing required field "${field}" for ${slug}`);
					}
				}

				return {
					title: metadata.title,
					date: metadata.date,
					author: metadata.author,
					description: metadata.description || "",
					slug,
					coverImage: metadata.coverImage,
					tags: metadata.tags || [],
				};
			} catch (error) {
				console.error(`Error loading metadata for ${slug}:`, error);
				return null;
			}
		})
	);

	// Filtrer les articles null et trier par date décroissante
	const validPosts = posts.filter((post) => post !== null) as BlogPostMetadata[];

	return validPosts.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});
}
