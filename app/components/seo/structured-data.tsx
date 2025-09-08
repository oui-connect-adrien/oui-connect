"use client";

interface SiteLink {
	name: string;
	url: string;
	description?: string;
}

interface StructuredDataProps {
	siteLinks?: SiteLink[];
}

export function StructuredData({ siteLinks }: StructuredDataProps) {
	const organizationData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Oui Connect",
		url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.oui-connect.fr",
		logo: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/logo-oui-connect-700x700.jpg`,
		description:
			"Solutions de monitoring industriel et IoT pour la digitalisation de l'industrie",
		foundingDate: "2018",
		founder: {
			"@type": "Person",
			name: "Équipe Oui Connect",
		},
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+33-XXX-XXX-XXX",
			contactType: "customer service",
			email: "contact@oui-connect.fr",
			availableLanguage: "French",
		},
		address: {
			"@type": "PostalAddress",
			addressCountry: "FR",
			addressLocality: "Saint-Herblain",
			addressRegion: "Loire-Atlantique",
		},
		sameAs: [
			"https://www.linkedin.com/company/ouiconnect",
			// Ajoutez d'autres profils sociaux si disponibles
		],
		// Sitelinks pour Google
		...(siteLinks && {
			potentialAction: {
				"@type": "SearchAction",
				target: {
					"@type": "EntryPoint",
					urlTemplate: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/search?q={search_term_string}`,
				},
				"query-input": "required name=search_term_string",
			},
			mainEntity: siteLinks.map((link) => ({
				"@type": "WebPage",
				name: link.name,
				url: link.url,
				description: link.description,
				isPartOf: {
					"@type": "WebSite",
					url: process.env.NEXT_PUBLIC_WEBSITE_URL,
				},
			})),
		}),
	};

	const websiteData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Oui Connect",
		url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.oui-connect.fr",
		description: "Solutions de monitoring industriel et IoT",
		publisher: {
			"@type": "Organization",
			name: "Oui Connect",
		},
		// Sitelinks directs pour Google
		...(siteLinks && {
			hasPart: siteLinks.map((link) => ({
				"@type": "WebPage",
				name: link.name,
				url: link.url,
				description: link.description,
				breadcrumb: {
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Accueil",
							item: process.env.NEXT_PUBLIC_WEBSITE_URL,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: link.name,
							item: link.url,
						},
					],
				},
			})),
		}),
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationData),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(websiteData),
				}}
			/>
		</>
	);
}
