"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Load ContactForm only on client-side to avoid crypto.randomUUID issues during SSR
const ContactForm = dynamic(() => import("./contact-form").then((mod) => ({ default: mod.ContactForm })), {
	ssr: false,
	loading: () => (
		<div className="text-left space-y-6 w-full shadow-md p-6 rounded-lg bg-white">
			<div className="flex items-center justify-center py-8">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
				<span className="ml-3 text-muted-foreground">
					Chargement du formulaire...
				</span>
			</div>
		</div>
	),
});

export function ContactFormWrapper() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const [isReady, setIsReady] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	// Ensure component is mounted on client-side before rendering form
	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		// Check if reCAPTCHA is ready
		if (executeRecaptcha && isMounted) {
			setIsReady(true);
		}
	}, [executeRecaptcha, isMounted]);

	if (!isMounted || !isReady) {
		return (
			<div className="text-left space-y-6 w-full shadow-md p-6 rounded-lg bg-white">
				<div className="flex items-center justify-center py-8">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
					<span className="ml-3 text-muted-foreground">
						Chargement du formulaire...
					</span>
				</div>
			</div>
		);
	}

	return <ContactForm />;
}
