import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	// Retrieve token from NextAuth's JWT
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	})

	// If there is no token (user is not authenticated), redirect to the homepage
	if (!token) return NextResponse.redirect(new URL('/', request.url))
}

// Match paths starting with /dashboard
export const config = {
	matcher: '/dashboard/:path*',
}
