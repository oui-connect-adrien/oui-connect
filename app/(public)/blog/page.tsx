import Link from 'next/link';
import type { Metadata } from 'next';
import { getBlogPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
	title: 'Blog - OuiConnect',
	description: 'Découvrez nos derniers articles et guides sur OuiConnect',
};

export default async function BlogPage() {
	const posts = await getBlogPosts();

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
			<h1 className="text-4xl font-bold mb-2">Blog</h1>
			<p className="text-muted-foreground mb-12">
				Découvrez nos derniers articles et guides sur OuiConnect
			</p>

			{posts.length === 0 ? (
				<p className="text-center text-muted-foreground py-12">
					Aucun article publié pour le moment.
				</p>
			) : (
				<div className="space-y-6">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="block p-6 border rounded-lg hover:border-primary transition-colors group"
						>
							<h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
								{post.title}
							</h2>
							<p className="text-muted-foreground mb-3 line-clamp-2">
								{post.description}
							</p>
							<div className="flex items-center gap-4 text-sm text-muted-foreground">
								<time dateTime={post.date}>{formatDate(post.date)}</time>
								<span>•</span>
								<span>{post.author}</span>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
