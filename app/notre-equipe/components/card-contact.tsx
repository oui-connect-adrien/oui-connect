import { Mail, Phone, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardItem } from "./3d-card";

interface CardContactProps {
	email?: string;
	phone?: string;
	onCopy: (text: string, label: string) => void;
	copiedText: string | null;
	handleCopy: (text: string, label: string) => void;
}

export const CardContact = ({
	email,
	phone,
	onCopy,
	copiedText,
	handleCopy,
}: CardContactProps) => {
	return (
		<CardItem translateZ="80" className="">
			<div className="flex flex-col gap-2">
				{email && (
					<div className="space-y-1 flex-grow">
						<Button
							onClick={() => onCopy(email, "Email")}
							variant="ghost"
							className="px-1 flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors group text-[calc(3mm*1)] md:text-[calc(3mm*1.5)]"
						>
							<Mail className="w-4 h-4" />
							<span>{email}</span>
							{copiedText === email ? (
								<Check className="w-4 h-4 text-green-400" />
							) : (
								<Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
							)}
						</Button>
					</div>
				)}
				{phone && (
					<div className="space-y-1 flex-grow">
						{/* Mobile: Phone Call Link */}
						<div className="md:hidden">
							<Button
								variant="ghost"
								className="px-1 flex items-center gap-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors group text-[calc(3mm*1)]"
							>
								<a
									href={`tel:${phone}`}
									className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-[calc(3mm*1)]"
								>
									<Phone className="w-4 h-4" />
									<span>{phone}</span>
								</a>
							</Button>
						</div>
						{/* Desktop: Copy Phone Number */}
						<div className="hidden md:block">
							<Button
								onClick={() => handleCopy(phone, "Téléphone")}
								variant="ghost"
								className="flex items-center gap-2 text-white/90 hover:text-white 
                  hover:bg-white/10 
                  transition-colors group text-[calc(3mm*1.5)]"
							>
								<Phone className="w-4 h-4" />
								<span>{phone}</span>
								{copiedText === phone ? (
									<Check className="w-4 h-4 text-green-400" />
								) : (
									<Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
								)}
							</Button>
						</div>
					</div>
				)}
			</div>
		</CardItem>
	);
};
