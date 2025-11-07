import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

interface BlogPostProps {
	params: Promise<{
		slug: string;
	}>;
}

interface BlogMetadata {
	title: string;
	date: string;
	author: string;
	description: string;
}

// Générer les métadonnées pour le SEO
export async function generateMetadata({
	params,
}: BlogPostProps): Promise<Metadata> {
	const { slug } = await params;

	try {
		const { metadata } = await import(`@/app/(public)/blog/_content/${slug}.mdx`);
		return {
			title: `${metadata.title} - OuiConnect Blog`,
			description: metadata.description,
		};
	} catch {
		return {
			title: 'Article non trouvé',
		};
	}
}

export default async function BlogPost({ params }: BlogPostProps) {
	const { slug } = await params;

	try {
		const Post = (await import(`@/app/(public)/blog/_content/${slug}.mdx`)).default;
		const { metadata } = (await import(`@/app/(public)/blog/_content/${slug}.mdx`)) as {
			metadata: BlogMetadata;
		};

		return (
			<article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
				<div className="mb-8">
					<h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
					<div className="flex gap-4 text-muted-foreground">
						<time dateTime={metadata.date}>{metadata.date}</time>
						<span>•</span>
						<span>{metadata.author}</span>
					</div>
				</div>

				<div className="prose prose-lg dark:prose-invert max-w-none">
					<Post />
				</div>
			</article>
		);
	} catch (error) {
		console.error('Error loading blog post:', error);
		notFound();
	}
}

// Générer les pages statiques
export async function generateStaticParams() {
	const postsDirectory = path.join(process.cwd(), 'app/(public)/blog/_content');
	const filenames = fs.readdirSync(postsDirectory);

	return filenames
		.filter((filename) => filename.endsWith('.mdx'))
		.map((filename) => ({
			slug: filename.replace(/\.mdx$/, ''),
		}));
}
