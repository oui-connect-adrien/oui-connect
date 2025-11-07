import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { isValidSlug, formatDate } from '../_lib';
import { getRelatedPosts } from '../_queries';
import { BlogBreadcrumbs, RelatedPosts } from '../_components';
import { generateBlogPostMetadata, generateBlogPostJsonLd } from '../_utils';
import type { BlogPostProps, BlogMetadata } from '../_types';

// Générer les métadonnées pour le SEO
export async function generateMetadata({ params }: BlogPostProps) {
	const { slug } = await params;
	return generateBlogPostMetadata(slug);
}

export default async function BlogPost({ params }: BlogPostProps) {
	const { slug } = await params;

	// Validation du slug - sécurité contre path traversal
	if (!isValidSlug(slug)) {
		console.warn(`Invalid slug attempted: ${slug}`);
		notFound();
	}

	try {
		// Import unique du module MDX
		const mdxModule = await import(
			`@/app/(public)/blog/_content/${slug}.mdx`
		);
		const Post = mdxModule.default;
		const { metadata } = mdxModule as { metadata: BlogMetadata };

		// Validation de la structure des métadonnées
		if (
			!metadata ||
			!metadata.title ||
			!metadata.date ||
			!metadata.author ||
			!metadata.description
		) {
			console.error(
				`Invalid metadata structure for slug "${slug}":`,
				metadata
			);
			throw new Error('Invalid metadata structure');
		}

		// Création du JSON-LD pour Schema.org (SEO)
		const jsonLd = generateBlogPostJsonLd(metadata, slug);

		// Récupérer les articles relatés
		const relatedPosts = await getRelatedPosts(slug, 3);

		return (
			<>
				{/* Schema.org JSON-LD pour le SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
					{/* Breadcrumbs */}
					<BlogBreadcrumbs title={metadata.title} />

					{/* Article */}
					<article>
						<header className="mb-8">
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								{metadata.title}
							</h1>
							<div className="flex gap-4 text-muted-foreground">
								<time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
								<span>•</span>
								<span>{metadata.author}</span>
							</div>
						</header>

						<div className="prose prose-lg dark:prose-invert max-w-none">
							<Post />
						</div>
					</article>

					{/* Articles relatés */}
					<RelatedPosts posts={relatedPosts} />
				</div>
			</>
		);
	} catch (error) {
		// Distinguer les types d'erreurs
		if (error instanceof Error) {
			// Module non trouvé = 404
			if (
				error.message.includes('Cannot find module') ||
				error.message.includes('Failed to load')
			) {
				console.warn(`Blog post not found: ${slug}`);
				notFound();
			}

			// Autres erreurs = erreur serveur (log pour debugging)
			console.error(`Error loading blog post "${slug}":`, {
				message: error.message,
				stack: error.stack,
			});
		}

		// Relancer l'erreur pour que Next.js la gère avec error.tsx
		throw error;
	}
}

// Générer les pages statiques pour tous les articles
export async function generateStaticParams() {
	try {
		const postsDirectory = path.join(
			process.cwd(),
			'app/(public)/blog/_content'
		);

		// Vérifier que le dossier existe
		if (!fs.existsSync(postsDirectory)) {
			console.warn('Blog content directory does not exist');
			return [];
		}

		const filenames = fs.readdirSync(postsDirectory);

		return filenames
			.filter((filename) => filename.endsWith('.mdx'))
			.map((filename) => ({
				slug: filename.replace(/\.mdx$/, ''),
			}));
	} catch (error) {
		console.error('Error generating static params:', error);
		return [];
	}
}
