import type { NextConfig } from 'next';
import { withBotId } from 'botid/next/config';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
	// Cache Components is disabled for now due to compatibility issues with dynamic routes
	// cacheComponents: true,

	// Support MDX
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

	// Optimisation des images
	images: {
		// Formats d'image supportés (WebP par défaut, AVIF en option)
		formats: ['image/webp'],

		// Qualités autorisées (25, 50, 75, 90, 100)
		qualities: [50, 75, 90, 100],

		// Tailles d'écran pour générer les srcset
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

		// Tailles pour les images avec sizes prop
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

		// Cache TTL : 31 jours (pour réduire les coûts)
		minimumCacheTTL: 2678400,

		// Autoriser les images locales du dossier public
		localPatterns: [
			{
				pathname: '/**',
				search: '',
			},
		],
	},

	// Amélioration SEO - génération automatique du robots.txt
	async rewrites() {
		return [
			{
				source: "/robots.txt",
				destination: "/api/robots",
			},
		];
	},
	// Headers SEO optimisés
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
				],
			},
		];
	},
};

const withMDX = createMDX({
	// Ajoutez des plugins markdown ici si besoin
	// Note: avec Turbopack, les plugins peuvent nécessiter une configuration spécifique
});

export default withBotId(withMDX(nextConfig));
