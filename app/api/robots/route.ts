import { NextResponse } from "next/server";

export async function GET() {
	const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${process.env.WEBSITE_URL}/sitemap.xml

# Pages importantes à indexer en priorité
Allow: /projects/oui-access
Allow: /projects/oui-energy  
Allow: /projects/oui-scan
Allow: /projects/oui-diag
Allow: /installation-instrumentation
Allow: /notre-equipe
Allow: /qui-sommes-nous
Allow: /contact
Allow: /plan-du-site

# Disallow certain paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

	return new NextResponse(robotsTxt, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
}
