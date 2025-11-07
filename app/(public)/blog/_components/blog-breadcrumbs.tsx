import Link from 'next/link';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BlogBreadcrumbsProps {
	title: string;
}

/**
 * Composant Breadcrumbs pour les articles de blog
 * Affiche : Accueil > Blog > [Titre de l'article]
 */
export function BlogBreadcrumbs({ title }: BlogBreadcrumbsProps) {
	return (
		<Breadcrumb className="mb-6">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href="/">Accueil</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbSeparator />

				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href="/blog">Blog</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbSeparator />

				<BreadcrumbItem>
					<BreadcrumbPage>{title}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
