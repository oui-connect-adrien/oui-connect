"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Lightbulb, Users, Mail, BookOpen } from "lucide-react";
import Link from "next/link";
import { Stagger } from "@/components/animations/stagger";

/**
 * Items de navigation du site
 */
const navigationItems = [
	{
		label: "Accueil",
		href: "/",
		icon: Home,
	},
	{
		label: "Nos solutions",
		href: "/#solutions",
		icon: Lightbulb,
	},
	{
		label: "Qui sommes-nous ?",
		href: "/#about",
		icon: Users,
	},
	{
		label: "Blog",
		href: "/blog",
		icon: BookOpen,
	},
	{
		label: "Nous Contacter",
		href: "/#contact",
		icon: Mail,
	},
];

/**
 * Menu Sheet burger pour la navigation mobile
 *
 * Affiche tous les menus du site avec :
 * - Menu principal avec icônes
 * - Animation stagger sur les items
 *
 * @returns Le menu burger complet
 */
export function MenuSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="hover:bg-accent focus-visible:bg-accent"
					aria-label="Ouvrir le menu de navigation"
				>
					<Menu className="!h-5 !w-5" aria-hidden="true" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-80 p-0">
				<SheetHeader className="border-b p-6">
					<SheetTitle className="sr-only">Menu de navigation</SheetTitle>
				</SheetHeader>

				<nav className="flex-1 p-6" aria-label="Menu mobile">
					<Stagger stagger={0.05} delay={0.1} y={10}>
						{navigationItems.map((item) => {
							const IconComponent = item.icon;
							return (
								<div key={item.href}>
									<SheetClose asChild>
										<Link
											href={item.href}
											className="flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 w-full text-left hover:bg-accent hover:text-accent-foreground"
										>
											<IconComponent
												className="h-4 w-4 mr-3"
												aria-hidden="true"
											/>
											{item.label}
										</Link>
									</SheetClose>
								</div>
							);
						})}
					</Stagger>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
