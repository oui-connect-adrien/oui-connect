"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

interface RecaptchaProviderProps {
	children: ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
	const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

	if (!siteKey) {
		console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured");
		return <>{children}</>;
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
