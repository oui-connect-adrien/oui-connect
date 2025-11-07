"use client";

import Link from "next/link";
import { formatDate } from "../_lib";
import type { BlogPostMetadata } from "../_types";

interface BlogPostCardProps {
	post: BlogPostMetadata;
}

/**
 * Composant carte pour un article de blog
 * Utilise React 19 use() pour unwrap la promise
 */
export function BlogPostCard({ post }: BlogPostCardProps) {
	return (
		<Link
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
	);
}
