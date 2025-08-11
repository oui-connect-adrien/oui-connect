"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { Button } from "@/shared/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared/components/ui/sheet";
import { useActiveNavbarItem } from "@/shared/hooks/use-active-navbar-item";
import { useIsScrolled } from "@/shared/hooks/use-is-scrolled";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { cn } from "@/shared/utils";
import { Home, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navbarItems } from ".";
import LoginModal from "../login-modal";

export function Navbar() {
	const isMobile = useIsMobile();
	const threshold = isMobile ? 25 : 100;
	const isScrolled = useIsScrolled(threshold);
	const { isMenuItemActive, activeSection } = useActiveNavbarItem();

	// Generate breadcrumb items based on active section
	const getBreadcrumbItems = () => {
		const items = [
			{
				href: "/",
				label: "Accueil",
				isActive: activeSection === "home",
			},
		];

		if (activeSection !== "home") {
			const activeItem = navbarItems.find(
				(item) => item.href === `/#${activeSection}`
			);
			if (activeItem) {
				items.push({
					href: activeItem.href,
					label: activeItem.label,
					isActive: true,
				});
			}
		}

		return items;
	};

	const breadcrumbItems = getBreadcrumbItems();

	return (
		<header role="banner" className="sticky top-0 z-50 w-full">
			{/* Skip link pour l'accessibilité */}
			<Link
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
			>
				Aller au contenu principal
			</Link>

			<nav
				role="navigation"
				aria-label="Navigation principale"
				data-voice-commands="navigation,menu,aller à, retour à"
				className={cn(
					"transition-all duration-300 ease-in-out will-change-transform",
					isScrolled &&
						"shadow-md bg-background backdrop-blur-md transform translate3d(0,0,0)"
				)}
			>
				<div id="nav-description" className="sr-only">
					Navigation principale du site. Accédez aux solutions, témoignages et
					informations de contact.
				</div>
				<div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="flex h-16 items-center justify-between">
						{/* Logo */}
						<div className="flex items-center gap-2">
							<Link href="/">
								<div className="relative w-[200px] h-[80px]">
									<Image
										src="/logo_oui-connect.png"
										alt="logo_oui-connect"
										fill
										style={{ objectFit: "contain" }}
										priority
									/>
								</div>
							</Link>
						</div>

						{/* Navigation desktop */}
						<nav
							className="hidden md:block relative z-30"
							aria-label="Menu principal"
						>
							<ul className="flex items-center space-x-1">
								{navbarItems.map((item) => {
									const isActive = isMenuItemActive(item.href);
									return (
										<li key={item.href}>
											<Link
												href={item.href}
												className={cn(
													"relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
													isActive
														? "text-primary-foreground bg-primary font-semibold hover:bg-primary/90"
														: "text-foreground/90 hover:bg-accent hover:text-accent-foreground"
												)}
												aria-current={isActive ? "page" : undefined}
											>
												{item.label}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>

						{/* Bouton CTA desktop */}
						<div className="hidden md:flex items-center space-x-3 relative z-30">
							<LoginModal />
						</div>

						{/* Menu mobile */}
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="md:hidden hover:bg-accent focus-visible:bg-accent relative z-30"
									aria-label="Ouvrir le menu de navigation"
									aria-expanded="false"
								>
									<Menu className="h-5 w-5" aria-hidden="true" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80 p-0">
								<SheetHeader className="border-b p-6">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3">
											<Link href="/">
												<div className="relative w-[200px] h-[80px]">
													<Image
														src="/logo_oui-connect.png"
														alt="logo_oui-connect"
														fill
														style={{ objectFit: "contain" }}
														priority
													/>
												</div>
											</Link>
										</div>
									</div>
									<SheetTitle className="sr-only">
										Menu de navigation
									</SheetTitle>
								</SheetHeader>

								<nav className="flex-1 p-6" aria-label="Menu mobile">
									<ul className="space-y-2">
										{navbarItems.map((item) => {
											const isActive = isMenuItemActive(item.href);
											const IconComponent = item.icon;
											return (
												<li key={item.href}>
													<SheetClose asChild>
														<Link
															href={item.href}
															className={cn(
																"flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
																isActive
																	? "text-primary-foreground bg-primary font-semibold hover:bg-primary/90"
																	: "text-foreground hover:bg-accent hover:text-accent-foreground"
															)}
															aria-current={isActive ? "page" : undefined}
														>
															<IconComponent
																className="h-4 w-4 mr-3"
																aria-hidden="true"
															/>
															{item.label}
														</Link>
													</SheetClose>
												</li>
											);
										})}
									</ul>
								</nav>

								<div className="border-t p-6 space-y-3">
									<SheetClose asChild>
										<Button asChild className="w-full">
											<Link href="/#contact">Nous contacter</Link>
										</Button>
									</SheetClose>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>

				{/* Breadcrumb */}
				<nav aria-label="Fil d'Ariane" className="sr-only">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
						<Breadcrumb className="py-2">
							<BreadcrumbList
								itemScope
								itemType="https://schema.org/BreadcrumbList"
							>
								{breadcrumbItems.map((item, index) => (
									<BreadcrumbItem
										key={item.href}
										itemProp="itemListElement"
										itemScope
										itemType="https://schema.org/ListItem"
										className="flex items-center"
									>
										<meta itemProp="position" content={String(index + 1)} />
										{index > 0 && <BreadcrumbSeparator />}
										{item.isActive && index === breadcrumbItems.length - 1 ? (
											<BreadcrumbPage
												itemProp="item"
												itemScope
												itemType="https://schema.org/WebPage"
											>
												<span itemProp="name">{item.label}</span>
												<meta itemProp="url" content={item.href} />
											</BreadcrumbPage>
										) : (
											<BreadcrumbLink
												asChild
												itemProp="item"
												itemScope
												itemType="https://schema.org/WebPage"
											>
												<Link href={item.href}>
													{index === 0 && (
														<Home className="h-4 w-4 mr-1" aria-hidden="true" />
													)}
													<span itemProp="name">{item.label}</span>
													<meta itemProp="url" content={item.href} />
												</Link>
											</BreadcrumbLink>
										)}
									</BreadcrumbItem>
								))}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</nav>
			</nav>
		</header>
	);
}
