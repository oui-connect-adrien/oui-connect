"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useEffect, useState } from "react";
import { ContactForm } from "./contact-form";

export function ContactFormWrapper() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		// Check if reCAPTCHA is ready
		if (executeRecaptcha) {
			setIsReady(true);
		}
	}, [executeRecaptcha]);

	if (!isReady) {
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
