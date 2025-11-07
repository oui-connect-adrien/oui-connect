import { getBlogPosts } from '@/app/(public)/blog/_queries';

export async function GET() {
	const baseUrl = process.env.WEBSITE_URL || 'https://oui-connect.fr';
	const posts = await getBlogPosts();

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog OuiConnect</title>
    <link>${baseUrl}/blog</link>
    <description>Découvrez nos derniers articles et guides sur les solutions de monitoring industriel et IoT</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
			.map(
				(post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
    </item>`
			)
			.join('')}
  </channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
		},
	});
}
