import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogPostListSkeleton } from "./_components";
import { BlogPostList } from "./_components/blog-post-list";
import { getBlogPosts } from "./_queries";

export const metadata: Metadata = {
	title: "Blog - OuiConnect",
	description: "Découvrez nos derniers articles et guides sur OuiConnect",
};

export default function BlogPage() {
	// Créer la promise sans await pour l'utiliser avec Suspense
	const postsPromise = getBlogPosts();

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 pt-24 md:pt-32">
			<h1 className="text-4xl font-bold mb-2">Blog</h1>
			<p className="text-muted-foreground mb-12">
				Découvrez nos derniers articles et guides sur OuiConnect
			</p>
			<Suspense fallback={<BlogPostListSkeleton />}>
				<BlogPostList postsPromise={postsPromise} />
			</Suspense>
		</div>
	);
}
