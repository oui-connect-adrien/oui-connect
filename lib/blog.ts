import fs from 'fs';
import path from 'path';

export interface BlogPostMetadata {
	title: string;
	date: string;
	author: string;
	description: string;
	slug: string;
}

/**
 * Récupère tous les articles du blog avec leurs métadonnées
 * @returns Liste des articles triés par date décroissante
 */
export async function getBlogPosts(): Promise<BlogPostMetadata[]> {
	const postsDirectory = path.join(
		process.cwd(),
		'app/(public)/blog/_content'
	);

	// Vérifier si le dossier existe
	if (!fs.existsSync(postsDirectory)) {
		console.warn('Blog content directory does not exist:', postsDirectory);
		return [];
	}

	const filenames = fs
		.readdirSync(postsDirectory)
		.filter((f) => f.endsWith('.mdx'));

	const posts = await Promise.all(
		filenames.map(async (filename) => {
			const slug = filename.replace(/\.mdx$/, '');

			try {
				const { metadata } = await import(
					`@/app/(public)/blog/_content/${slug}.mdx`
				);

				// Validation de la structure des métadonnées
				if (!metadata || typeof metadata !== 'object') {
					throw new Error(`Invalid metadata structure for ${slug}`);
				}

				if (!metadata.title || !metadata.date || !metadata.author) {
					throw new Error(`Missing required metadata fields for ${slug}`);
				}

				return {
					title: metadata.title,
					date: metadata.date,
					author: metadata.author,
					description: metadata.description || '',
					slug,
				};
			} catch (error) {
				console.error(`Error loading metadata for ${slug}:`, error);
				// Ne pas inclure les articles avec erreur
				return null;
			}
		})
	);

	// Filtrer les articles null et trier par date décroissante
	const validPosts = posts.filter(
		(post): post is BlogPostMetadata => post !== null
	);

	return validPosts.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});
}

/**
 * Calcule le temps de lecture estimé d'un contenu
 * @param content Contenu texte de l'article
 * @returns Temps de lecture en minutes
 */
export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

/**
 * Valide qu'un slug est sécurisé
 * @param slug Slug à valider
 * @returns true si le slug est valide
 */
export function isValidSlug(slug: string): boolean {
	if (!slug || typeof slug !== 'string') {
		return false;
	}

	// Vérifier que le slug ne contient que des caractères alphanumériques, tirets et underscores
	const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

	// Interdire les path traversal
	if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
		return false;
	}

	return slugRegex.test(slug);
}

/**
 * Formate une date au format français
 * @param dateString Date au format ISO
 * @returns Date formatée
 */
export function formatDate(dateString: string): string {
	try {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}).format(date);
	} catch {
		return dateString;
	}
}
