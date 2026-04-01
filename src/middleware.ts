import { NextRequest, NextResponse } from "next/server";

// Block common WordPress/CMS scanner paths at the edge
const BLOCKED_PATHS = [
  "/wp-admin",
  "/wp-login",
  "/wp-content",
  "/wp-includes",
  "/wordpress",
  "/wp-config",
  "/xmlrpc.php",
  "/.env",
  "/admin",
  "/administrator",
  "/phpmyadmin",
  "/setup-config.php",
];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.toLowerCase();

  for (const blocked of BLOCKED_PATHS) {
    if (path.startsWith(blocked)) {
      return new NextResponse(null, { status: 410 }); // Gone
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/wp-:path*",
    "/wordpress/:path*",
    "/xmlrpc.php",
    "/.env",
    "/admin/:path*",
    "/administrator/:path*",
    "/phpmyadmin/:path*",
    "/setup-config.php",
  ],
};
