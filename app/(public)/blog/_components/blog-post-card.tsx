"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../_lib";
import type { BlogPostMetadata } from "../_types";

interface BlogPostCardProps {
	post: BlogPostMetadata;
}

/**
 * Composant carte pour un article de blog
 * Avec image de couverture, tags et design amélioré
 */
export function BlogPostCard({ post }: BlogPostCardProps) {
	// Vérifier si l'article est récent (moins de 7 jours)
	const isRecent = () => {
		const postDate = new Date(post.date);
		const now = new Date();
		const diffTime = Math.abs(now.getTime() - postDate.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays <= 7;
	};

	return (
		<Link href={`/blog/${post.slug}`} className="group block">
			<article className="relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary">
				{/* Image de couverture avec overlay gradient */}
				<div className="relative h-56 w-full overflow-hidden bg-linear-to-br from-primary/10 to-primary/5">
					{post.coverImage ? (
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							quality={75}
							loading="lazy"
						/>
					) : (
						// Placeholder avec icône si pas d'image
						<div
							className="flex h-full w-full items-center justify-center"
							aria-label="Aucune image disponible"
						>
							<Tag className="h-16 w-16 text-primary/20" />
						</div>
					)}

					{/* Badge "Nouveau" si récent */}
					{isRecent() && (
						<div className="absolute top-4 right-4">
							<Badge className="bg-primary text-primary-foreground">
								Nouveau
							</Badge>
						</div>
					)}

					{/* Gradient overlay pour meilleur contraste */}
					<div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
				</div>

				{/* Contenu */}
				<div className="p-6">
					{/* Tags */}
					{post.tags && post.tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-3">
							{post.tags.slice(0, 3).map((tag) => (
								<Badge key={tag} variant="secondary" className="text-xs">
									{tag}
								</Badge>
							))}
						</div>
					)}

					{/* Titre */}
					<h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
						{post.title}
					</h2>

					{/* Description */}
					<p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
						{post.description}
					</p>

					{/* Métadonnées avec icônes */}
					<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
						<span className="flex items-center gap-1.5">
							<Calendar className="w-4 h-4" />
							{formatDate(post.date)}
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
