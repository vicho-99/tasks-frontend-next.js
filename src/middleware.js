import { NextResponse } from 'next/server'

export async function middleware(request) {

    let url = request.url;

    let privateUrl = url.includes("dashboard");

    if (privateUrl === true) {

        let cookie = request.cookies.get('lW611f')

        if (!cookie || !cookie.value)

            return NextResponse.redirect(new URL('/auth/login', request.url));

    }

    const requestHeaders = new Headers(request.headers);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });

}

export const config = {
    matcher: '/:path*',
}