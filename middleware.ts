import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a basic example of role-based middleware
// In a real application, you would verify the token and check roles properly
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Mock authentication check - replace with your actual auth logic
  const isAuthenticated = request.cookies.has('auth-token');
  const userRole = request.cookies.get('user-role')?.value;

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated || userRole !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Protect user routes
  if (pathname.startsWith('/user')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};