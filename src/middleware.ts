import { NextResponse, NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest)
{
    const sessionCookie = getSessionCookie(request);

    if (!sessionCookie) return NextResponse.json({}, { status: 401 });

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/guess/:path*']
}