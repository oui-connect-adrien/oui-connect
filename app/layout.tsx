import MobileSidebar from "@/components/mobile-sidebar";
import ModalProvider from "@/providers/modal-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<MobileSidebar />
				<ModalProvider />
				{children}
			</body>
		</html>
	);
}
