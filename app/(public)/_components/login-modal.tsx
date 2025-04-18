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
						Accédez facilement à nos solutions ci-dessous :
					</DialogDescription>
				</DialogHeader>
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-2 py-4">
					<Link href="https://access.oui-connect.fr" target="_blank">
						<div className="relative w-[150px] rounded-md h-[150px] lg:w-[200px] lg:h-[200px] overflow-hidden mx-auto">
							<Image src="/logo_ouiaccess_400.png" alt="Oui-Access" fill />
						</div>
						<p className="text-center mt-2">Oui-Access</p>
					</Link>
					<Link href="https://oui-scan.com/" target="_blank">
						<div className="relative w-[150px] rounded-md h-[150px] lg:w-[200px] lg:h-[200px] overflow-hidden mx-auto">
							<Image src="/oui-scan-logo.jpeg" alt="Oui-Scan" fill />
						</div>
						<p className="text-center mt-2">Oui-Scan</p>
					</Link>
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default LoginModal;
