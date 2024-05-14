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

const LoginModal = () => {
	const { isOpen, onOpen, onClose, type } = useModal();
	const open = isOpen && type === "login";
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Se connecter</DialogTitle>
					<DialogDescription>
						Accédez facilement à une de nos solutions en vous connectant
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4"></div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default LoginModal;
