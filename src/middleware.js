import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('access_token')?.value
  const pathname = request.nextUrl.pathname

  // Not logged in & accessing protected page
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Logged in & trying to access login page
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!login|api|_next|favicon.ico).*)'],
}
