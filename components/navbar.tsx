"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useSheet } from "@/hooks/use-sheet-store";
import { cn } from "@/lib/utils";
import { Cookie, Home, Info, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const menu = [
	{
		label: "Nos solutions",
		path: "/#solutions",
		icon: Home,
		submenu: [
			{ label: "Bilan Energétique", path: "/solutions/bilan-energetique" },
			{
				label: "Monitoring Energétique",
				path: "/solutions/monitoring-energetique",
			},
			{ label: "Oui-Scan", path: "/solutions/oui-scan" },
		],
	},

	{
		label: "Nos tarifs",
		path: "/tarifs",
		icon: Cookie,
	},
	{
		label: "Nous Contacter",
		path: "/contact",
		icon: Info,
	},
	{
		label: "Blog",
		path: "/blog",
		icon: Mail,
	},
];

const Navbar = () => {
	const pathname = usePathname();
	const { toggleSheet } = useSheet();

	return (
		<nav className="fixed z-50 top-0 h-20 backdrop-blur-md w-full bg-transparent">
			<div className="flex items-center justify-between px-4 h-full lg:container">
				<div className="flex items-center gap-2">
					<Button
						onClick={() => toggleSheet()}
						variant="ghost"
						className="p-2 rounded-full lg:hidden"
					>
						<Menu className="w-6 h-6" />
					</Button>
					<div className="hidden lg:flex">
						<Logo />
					</div>
				</div>
				<div className="hidden lg:flex items-center m-auto lg:flex-row">
					{menu.map((item) => (
						<Link
							className={cn(
								`block relative font-code text-2xl uppercase transition-colors hover:text-muted-foreground px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  lg:leading-5 lg:hover:text-muted-foreground xl:px-12`,
								item.path === pathname
									? "z-2 lg:text-muted-foreground"
									: "lg:text-zinc-700"
							)}
							key={item.label}
							href={item ? item.path : "/"}
						>
							{item.label}
						</Link>
					))}
				</div>
				<div className="flex gap-4 items-center">
					<Button className="text-foreground hover:text-muted-foreground bg-transparent rounded-full border hover:bg-transparent transition-all transition-duration-200">
						Se connecter
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
