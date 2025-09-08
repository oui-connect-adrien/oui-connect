import { Navbar } from "@/app/(public)/components/navbar/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Footer } from "./(public)/components/footer/footer";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Oui Connect - Solutions de monitoring industriel et IoT",
		template: "%s | Oui Connect",
	},
	description:
		"Oui Connect digitalise l'industrie avec des solutions de monitoring 24/7, maintenance prédictive et supervision IoT. Optimisez vos équipements industriels avec nos technologies web innovantes.",
	keywords: [
		"monitoring industriel",
		"IoT",
		"maintenance prédictive",
		"supervision équipements",
		"digitalisation industrie",
		"solutions web industrielles",
		"monitoring 24/7",
		"gestion données industrielles",
		"Oui-Access monitoring industriel",
		"Oui-Energy",
		"Oui-Scan traçabilité entreprises",
		"Oui-Diag",
		"traçabilité pour les entreprises",
	],
	authors: [{ name: "Oui Connect" }],
	creator: "Oui Connect",
	publisher: "Oui Connect",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: process.env.WEBSITE_URL,
		siteName: "Oui Connect",
		title: "Oui Connect - Solutions de monitoring industriel et IoT",
		description:
			"Oui Connect digitalise l'industrie avec des solutions de monitoring 24/7, maintenance prédictive et supervision IoT. Optimisez vos équipements industriels.",
		images: [
			{
				url: `${process.env.WEBSITE_URL}/logo-oui-connect-700x700.jpg`,
				width: 700,
				height: 700,
				alt: "Oui Connect - Solutions de monitoring industriel",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Oui Connect - Solutions de monitoring industriel et IoT",
		description:
			"Digitalisation industrielle avec monitoring 24/7, maintenance prédictive et supervision IoT.",
		images: [`${process.env.WEBSITE_URL}/logo-oui-connect-700x700.jpg`],
		creator: "@ouiconnect",
		site: "@ouiconnect",
	},
	verification: {
		google: "your-google-verification-code",
		// yandex: 'your-yandex-verification-code',
		// yahoo: 'your-yahoo-verification-code',
	},
	alternates: {
		canonical: process.env.WEBSITE_URL,
		languages: {
			"fr-FR": process.env.WEBSITE_URL,
		},
	},
	other: {
		"geo.region": "FR-44",
		"geo.placename": "Saint-Herblain",
		"geo.position": "47.2104;-1.6496",
		ICBM: "47.2104, -1.6496",
		// Plateformes liées pour sitelinks Google
		"related-platforms": "https://access.oui-connect.fr,https://oui-scan.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning={true}
			>
				<Navbar />
				<Toaster position="top-right" richColors />
				{children}
				<Footer />
			</body>
		</html>
	);
}
