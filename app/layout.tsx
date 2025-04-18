import MobileSidebar from "@/components/mobile-sidebar";
import ModalProvider from "@/providers/modal-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={inter.className}>
				<Toaster position="top-right" />
				<MobileSidebar />
				<ModalProvider />
				{children}
			</body>
		</html>
	);
}
