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
		name: "Oui-Connect",
		legalName: "Oui-Connect SARL",
		url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.oui-connect.fr",
		logo: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/logo-oui-connect-700x700.jpg`,
		description:
			"Solutions de monitoring industriel et IoT pour la digitalisation de l'industrie",
		foundingDate: "2018-07-05",
		vatID: "FR92841255839",
		taxID: "841255839",
		leiCode: "841 255 839 00018",
		founder: {
			"@type": "Person",
			name: "Adrien RICHARD",
			jobTitle: "Gérant",
		},
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+33240381185",
			contactType: "customer service",
			email: "info@oui-connect.fr",
			availableLanguage: ["French"],
		},
		address: {
			"@type": "PostalAddress",
			streetAddress: "45 Quai Emile Cormerais",
			postalCode: "44800",
			addressLocality: "Saint-Herblain",
			addressRegion: "Loire-Atlantique",
			addressCountry: "FR",
		},
		sameAs: [
			"https://www.linkedin.com/company/ouiconnect",
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
