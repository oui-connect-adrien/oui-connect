import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = `${process.env.WEBSITE_URL}`;

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		// Pages projets - PRIORITÉ MAXIMALE pour l'indexation
		{
			url: `${baseUrl}/projects/oui-access`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.95,
		},
		{
			url: `${baseUrl}/projects/oui-energy`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.95,
		},
		{
			url: `${baseUrl}/projects/oui-scan`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.95,
		},
		{
			url: `${baseUrl}/projects/oui-diag`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.95,
		},
		// Services et pages importantes
		{
			url: `${baseUrl}/installation-instrumentation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.85,
		},
		{
			url: `${baseUrl}/team`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		// Plan du site pour faciliter l'indexation
		{
			url: `${baseUrl}/site-map`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		// Pages légales
		{
			url: `${baseUrl}/legal/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/legal/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}
