import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog - OuiConnect',
	description: 'Découvrez nos derniers articles et guides sur OuiConnect',
};

interface BlogPost {
	slug: string;
	filename: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
	const postsDirectory = path.join(process.cwd(), 'app/(public)/blog/_content');
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames
		.filter((filename) => filename.endsWith('.mdx'))
		.map((filename) => {
			const slug = filename.replace(/\.mdx$/, '');
			return { slug, filename };
		});

	return posts;
}

export default async function BlogPage() {
	const posts = await getBlogPosts();

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
			<h1 className="text-4xl font-bold mb-2">Blog</h1>
			<p className="text-muted-foreground mb-12">
				Découvrez nos derniers articles et guides
			</p>

			<div className="space-y-6">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="block p-6 border rounded-lg hover:border-primary transition-colors"
					>
						<h2 className="text-2xl font-semibold capitalize">
							{post.slug.replace(/-/g, ' ')}
						</h2>
					</Link>
				))}
			</div>
		</div>
	);
}
