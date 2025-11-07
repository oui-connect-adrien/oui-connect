import type { Metadata } from 'next';
import { BlogMetadata } from '../_types';
import { isValidSlug } from '../_lib';

/**
 * Génère les métadonnées pour une page d'article de blog
 * @param slug - Le slug de l'article
 * @returns Métadonnées Next.js
 */
export async function generateBlogPostMetadata(
	slug: string
): Promise<Metadata> {
	// Validation du slug
	if (!isValidSlug(slug)) {
		return {
			title: 'Article non trouvé',
		};
	}

	try {
		const { metadata } = (await import(
			`@/app/(public)/blog/_content/${slug}.mdx`
		)) as { metadata: BlogMetadata };

		// Validation de la structure des métadonnées
		if (
			!metadata ||
			!metadata.title ||
			!metadata.date ||
			!metadata.description
		) {
			console.error(`Invalid metadata structure for slug: ${slug}`);
			return {
				title: 'Article non trouvé',
			};
		}

		return {
			title: `${metadata.title} | OuiConnect Blog`,
			description: metadata.description,
			openGraph: {
				title: metadata.title,
				description: metadata.description,
				type: 'article',
				publishedTime: metadata.date,
				authors: [metadata.author],
				url: `${process.env.WEBSITE_URL}/blog/${slug}`,
			},
			twitter: {
				card: 'summary_large_image',
				title: metadata.title,
				description: metadata.description,
			},
		};
	} catch (error) {
		console.error(`Error generating metadata for slug "${slug}":`, error);
		return {
			title: 'Article non trouvé',
		};
	}
}

/**
 * Génère le JSON-LD Schema.org pour un article de blog
 * @param metadata - Les métadonnées de l'article
 * @param slug - Le slug de l'article
 * @returns Objet JSON-LD
 */
export function generateBlogPostJsonLd(metadata: BlogMetadata, slug: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: metadata.title,
		description: metadata.description,
		datePublished: metadata.date,
		dateModified: metadata.date,
		author: {
			'@type': 'Person',
			name: metadata.author,
		},
		publisher: {
			'@type': 'Organization',
			name: 'OuiConnect',
			logo: {
				'@type': 'ImageObject',
				url: `${process.env.WEBSITE_URL}/logo-oui-connect-700x700.jpg`,
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${process.env.WEBSITE_URL}/blog/${slug}`,
		},
		inLanguage: 'fr-FR',
	};
}
