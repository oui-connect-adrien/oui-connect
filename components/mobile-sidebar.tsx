"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSheet } from "@/hooks/use-sheet-store";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "./navbar";

const MobileSidebar = () => {
	const { toggleSheet, open } = useSheet();
	const pathname = usePathname();

	return (
		<Sheet onOpenChange={toggleSheet} open={open}>
			<SheetContent>
				<div className="flex flex-col justify-between h-full">
					<div className="flex flex-col gap-4">
						<Logo />
						<div className="pt-2 min-h-full overflow-y-auto flex flex-col gap-2 transition-all duration-300 ease-in-out">
							{menu.map((menuItem, index) => (
								<Link
									onClick={() => toggleSheet()}
									key={index}
									href={menuItem.path}
									className={`cursor-pointer block py-2 transition rounded-lg hover:bg-muted ${
										pathname === menuItem.path ? "bg-muted" : ""
									} ${"flex flex-row items-center text-sm"}`}
								>
									<menuItem.icon className="w-5 h-5" />

									<span className="ml-2 whitespace-nowrap">
										{menuItem.label}
									</span>
								</Link>
							))}
						</div>
					</div>
					<div className="flex justify-between items-center border-t pt-4">
						<Button>
							<LogIn className="w-4 h-4 mr-2" />
							Connexion
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
