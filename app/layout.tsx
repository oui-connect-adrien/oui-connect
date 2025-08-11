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
		default: "Oui Connect",
		template: "%s | Oui Connect",
	},
	description:
		"Oui Connect, solutions de monitoring de données pour les entreprises",
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
			>
				<Navbar />
				<Toaster position="top-right" richColors />
				{children}
				<Footer />
			</body>
		</html>
	);
}
