import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = `${process.env.WEBSITE_URL}`;

	// Routes statiques
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		// Pages projets - PRIORITÉ MAXIMALE pour l'indexation
		{
			url: `${baseUrl}/projects/oui-access`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.95,
		},
		{
			url: `${baseUrl}/projects/oui-energy`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.95,
		},
		{
			url: `${baseUrl}/projects/oui-scan`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.95,
		},
		{
			url: `${baseUrl}/projects/oui-diag`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.95,
		},
		// Blog - Ajout pour indexation SEO
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.9,
		},
		// Services et pages importantes
		{
			url: `${baseUrl}/installation-instrumentation`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.85,
		},
		{
			url: `${baseUrl}/team`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		// Plan du site pour faciliter l'indexation
		{
			url: `${baseUrl}/site-map`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		// Pages légales
		{
			url: `${baseUrl}/legal/terms`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/legal/privacy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	];

	// Récupérer dynamiquement tous les articles du blog
	let blogPosts: MetadataRoute.Sitemap = [];
	try {
		const posts = await getBlogPosts();
		blogPosts = posts.map((post) => ({
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified: new Date(post.date),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		}));

		console.log(`✓ Sitemap: ${posts.length} blog posts added`);
	} catch (error) {
		console.error('Error generating blog sitemap entries:', error);
	}

	// Combiner toutes les routes
	return [...staticRoutes, ...blogPosts];
}
