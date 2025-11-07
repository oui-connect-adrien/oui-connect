import type { NextConfig } from 'next';
import { withBotId } from 'botid/next/config';

const nextConfig: NextConfig = {
	// Cache Components is disabled for now due to compatibility issues with dynamic routes
	// cacheComponents: true,

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

export default withBotId(nextConfig);
