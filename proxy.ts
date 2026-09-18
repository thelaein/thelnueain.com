import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Enforce canonical host (uncomment when DNS ready)
  // const host = request.headers.get("host");
  // if (host === "www.thelnueain.com") {
  //   return NextResponse.redirect(new URL(request.nextUrl.pathname + request.nextUrl.search, "https://thelnueain.com"), 308);
  // }

  // Security hardening at edge
  response.headers.set("X-Robots-Tag", "index, follow");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|opengraph-image|twitter-image).*)"],
};
