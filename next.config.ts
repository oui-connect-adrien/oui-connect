import type { NextConfig } from 'next';
import { withBotId } from 'botid/next/config';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
	// Cache Components is disabled for now due to compatibility issues with dynamic routes
	// cacheComponents: true,

	// Support MDX
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

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
});

export default withBotId(withMDX(nextConfig));
