import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
	if (request.nextUrl.pathname === "/access/pages/home") {
		//allow this old url to redirect to oui-access
		// Redirect to the main page (root)
		return NextResponse.redirect(new URL("https://access.oui-connect.fr/"));
	}
	// Check if the request is for /access
	if (request.nextUrl.pathname === "/access") {
		// Redirect to the main page (root)
		return NextResponse.redirect(new URL("/", request.url));
	}

	// Continue with the request if it's not /access
	return NextResponse.next();
}

// Configure which paths the proxy should run on
export const config = {
	matcher: [
		// Match /access exactly
		"/access",
		"/access/pages/home",
		// Optionally, you can also match /access/ with trailing slash
		"/access/",
		"/oui-access",
		"/oui-access/",
		"/oui-scan",
		"/oui-scan/",
	],
};
