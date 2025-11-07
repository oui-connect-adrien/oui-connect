import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * Composant callout personnalisé pour les alertes/notes
 */
function Callout({
	children,
	type = 'info',
}: {
	children: ReactNode;
	type?: 'info' | 'warning' | 'success' | 'error';
}) {
	const styles = {
		info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
		warning:
			'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100',
		success:
			'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100',
		error:
			'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100',
	};

	return (
		<div
			className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}
			role="alert"
		>
			{children}
		</div>
	);
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Images optimisées avec Next.js Image
		img: (props) => {
			const imgProps = props as ImageProps;
			return (
				<Image
					{...imgProps}
					alt={imgProps.alt || ''}
					width={imgProps.width || 800}
					height={imgProps.height || 600}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
					className="rounded-lg my-6"
					style={{ width: '100%', height: 'auto' }}
				/>
			);
		},

		// Liens avec gestion des liens externes
		a: ({ href, children, ...props }) => {
			const isExternal = href?.startsWith('http');
			const isAnchor = href?.startsWith('#');

			if (isAnchor) {
				return (
					<a href={href} className="text-primary hover:underline" {...props}>
						{children}
					</a>
				);
			}

			if (isExternal) {
				return (
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline inline-flex items-center gap-1"
						{...props}
					>
						{children}
						<svg
							className="w-3 h-3 inline-block"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
				);
			}

			return (
				<Link href={href || ''} className="text-primary hover:underline" {...props}>
					{children}
				</Link>
			);
		},

		// Blocs de code améliorés
		pre: ({ children, ...props }) => (
			<pre
				className="overflow-x-auto p-4 rounded-lg bg-muted my-6 border border-border"
				{...props}
			>
				{children}
			</pre>
		),

		code: ({ children, ...props }) => (
			<code
				className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono"
				{...props}
			>
				{children}
			</code>
		),

		// Citations stylisées
		blockquote: ({ children, ...props }) => (
			<blockquote
				className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
				{...props}
			>
				{children}
			</blockquote>
		),

		// Tableaux responsifs
		table: ({ children, ...props }) => (
			<div className="overflow-x-auto my-6">
				<table
					className="min-w-full divide-y divide-border border border-border rounded-lg"
					{...props}
				>
					{children}
				</table>
			</div>
		),

		thead: ({ children, ...props }) => (
			<thead className="bg-muted" {...props}>
				{children}
			</thead>
		),

		th: ({ children, ...props }) => (
			<th
				className="px-4 py-3 text-left text-sm font-semibold"
				{...props}
			>
				{children}
			</th>
		),

		td: ({ children, ...props }) => (
			<td className="px-4 py-3 text-sm border-t border-border" {...props}>
				{children}
			</td>
		),

		// Titres avec ancres automatiques
		h2: ({ children, ...props }) => (
			<h2 className="text-3xl font-bold mt-10 mb-4 scroll-mt-20" {...props}>
				{children}
			</h2>
		),

		h3: ({ children, ...props }) => (
			<h3 className="text-2xl font-semibold mt-8 mb-3 scroll-mt-20" {...props}>
				{children}
			</h3>
		),

		h4: ({ children, ...props }) => (
			<h4 className="text-xl font-semibold mt-6 mb-2 scroll-mt-20" {...props}>
				{children}
			</h4>
		),

		// Listes améliorées
		ul: ({ children, ...props }) => (
			<ul className="list-disc list-inside space-y-2 my-4" {...props}>
				{children}
			</ul>
		),

		ol: ({ children, ...props }) => (
			<ol className="list-decimal list-inside space-y-2 my-4" {...props}>
				{children}
			</ol>
		),

		li: ({ children, ...props }) => (
			<li className="ml-4" {...props}>
				{children}
			</li>
		),

		// Séparateur horizontal
		hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,

		// Paragraphes avec espacement
		p: ({ children, ...props }) => (
			<p className="my-4 leading-7" {...props}>
				{children}
			</p>
		),

		// Composant callout personnalisé accessible via MDX
		Callout,

		...components,
	};
}
