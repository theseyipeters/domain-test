import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const hostname = req.headers.get("host") || "";

	// Split the hostname to extract the subdomain
	const subdomain = hostname.split(".")[0];

	// If the request is for learn
	if (subdomain === "learn") {
		return NextResponse.rewrite(new URL("/learn", req.url));
	}

	// If the request is for assistant
	if (subdomain === "assistant") {
		return NextResponse.rewrite(new URL("/assistant", req.url));
	}

	// Default behavior for no subdomain
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next|.*\\..*).*)"], // This ensures that middleware runs only on pages and skips static assets or APIs.
};
