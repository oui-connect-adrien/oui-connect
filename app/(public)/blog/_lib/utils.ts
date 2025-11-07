import { BLOG_CONFIG } from '../_constants';

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

/**
 * Calcule le temps de lecture estimé d'un contenu
 * @param content Contenu texte de l'article
 * @returns Temps de lecture en minutes
 */
export function calculateReadingTime(content: string): number {
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / BLOG_CONFIG.WORDS_PER_MINUTE);
}
