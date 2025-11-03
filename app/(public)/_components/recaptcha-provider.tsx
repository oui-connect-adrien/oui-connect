"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

interface RecaptchaProviderProps {
	children: ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
	const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

	if (!siteKey) {
		throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required but not configured in environment variables");
	}

	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={siteKey}
			scriptProps={{
				async: false,
				defer: false,
				appendTo: "head",
				nonce: undefined,
			}}
		>
			{children}
		</GoogleReCaptchaProvider>
	);
}
