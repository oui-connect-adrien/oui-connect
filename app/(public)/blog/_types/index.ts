/**
 * Types et interfaces pour le blog
 */

export interface BlogPostMetadata {
	title: string;
	date: string;
	author: string;
	description: string;
	slug: string;
}

export interface BlogMetadata {
	title: string;
	date: string;
	author: string;
	description: string;
}

export interface BlogPostProps {
	params: Promise<{
		slug: string;
	}>;
}
