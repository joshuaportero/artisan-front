import { NextRequest, NextResponse } from "next/server";
import { fetchAuthSession } from "aws-amplify/auth/server";

import { runWithAmplifyServerContext } from "./utils/utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const currentPath = new URL(request.url).pathname;
  if (currentPath === "/auth") {
    return response;
  }

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (context) => {
      try {
        const session = await fetchAuthSession(context, {});
        return session.tokens !== undefined;
      } catch (err) {
        console.error("Error fetching session:", err);
        return false;
      }
    },
  });

  if (authenticated) {
    return response;
  }

  return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth|signup).*)"],
};
