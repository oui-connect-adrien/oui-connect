import { getBlogPosts } from '@/app/(public)/blog/_queries';

/**
 * Génère le flux RSS pour le blog
 * Route: /rss.xml
 *
 * Inclut les métadonnées complètes : titre, description, date, auteur, tags, image de couverture
 */
export async function GET() {
	const baseUrl = process.env.WEBSITE_URL || 'https://oui-connect.fr';
	const posts = await getBlogPosts();

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>OuiConnect Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Actualités, guides et bonnes pratiques sur le monitoring industriel, l'IoT et la digitalisation de l'industrie</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo_oui-connect.png</url>
      <title>OuiConnect Blog</title>
      <link>${baseUrl}/blog</link>
      <width>200</width>
      <height>200</height>
    </image>
${posts
	.map(
		(post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>${
		post.tags && post.tags.length > 0
			? `\n${post.tags.map((tag) => `      <category><![CDATA[${tag}]]></category>`).join('\n')}`
			: ''
	}${
		post.coverImage
			? `\n      <enclosure url="${baseUrl}${post.coverImage}" type="image/png" length="0" />`
			: ''
	}
    </item>`
	)
	.join('\n')}
  </channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
		},
	});
}
