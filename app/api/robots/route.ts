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
Allow: /team
Allow: /about
Allow: /contact
Allow: /site-map

# Plateformes externes liées (pour sitelinks)
# Oui-Access : monitoring industriel - https://access.oui-connect.fr
# Oui-Scan : traçabilité pour les entreprises - https://oui-scan.com

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
