"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import Image from "next/image";
import Link from "next/link";

const LoginModal = () => {
	const { isOpen, onClose, type } = useModal();
	const open = isOpen && type === "login";
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="max-w-lg">
				<DialogHeader>
					<DialogTitle>Se connecter</DialogTitle>
					<DialogDescription>
						Accédez facilement à une de nos solutions ci-dessous :
					</DialogDescription>
				</DialogHeader>
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-2 py-4">
					<Link href="/login">
						<div className="relative w-[150px] rounded-md h-[150px] lg:w-[200px] lg:h-[200px] overflow-hidden mx-auto">
							<Image src="/oui-access-logo.jpeg" alt="Oui-Access" fill />
						</div>
					</Link>
					<Link href="http://oui-scan.com">
						<div className="relative w-[150px] rounded-md h-[150px] lg:w-[200px] lg:h-[200px] overflow-hidden mx-auto">
							<Image src="/oui-scan-logo.jpeg" alt="Oui-Scan" fill />
						</div>
					</Link>
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default LoginModal;
