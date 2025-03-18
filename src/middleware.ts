import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value
    const protectPath = ["/home"]
    const localPath = ["/login","/register"]
    const isAuthRoute = localPath.some((route)=>path.includes(route))
    const isProtectPath = protectPath.some((route)=>path.includes(route))
    if (!token && isProtectPath) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (isAuthRoute && token) {
        return NextResponse.redirect(new URL('/home', request.url))
    }
}

export const config = {
    matcher: ['/home', '/login','/register','/home/:path*']
};