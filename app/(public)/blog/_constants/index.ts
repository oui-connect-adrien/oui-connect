/**
 * Constantes du blog
 */

export const BLOG_CONFIG = {
	/** Nombre de mots par minute pour le calcul du temps de lecture */
	WORDS_PER_MINUTE: 200,

	/** Nombre d'articles relatés à afficher */
	RELATED_POSTS_LIMIT: 3,

	/** Chemin vers le dossier des articles MDX */
	CONTENT_PATH: 'app/(public)/blog/_content',

	/** Titre par défaut pour les erreurs */
	DEFAULT_ERROR_TITLE: 'Article non trouvé',

	/** Messages d'erreur */
	ERRORS: {
		NO_CONTENT_DIRECTORY: 'Blog content directory does not exist',
		INVALID_METADATA: 'Invalid metadata structure',
		INVALID_SLUG: 'Invalid slug attempted',
		BLOG_POST_NOT_FOUND: 'Blog post not found',
	},
} as const;

export const METADATA_FIELDS = {
	REQUIRED: ['title', 'date', 'author'] as const,
	OPTIONAL: ['description'] as const,
} as const;
