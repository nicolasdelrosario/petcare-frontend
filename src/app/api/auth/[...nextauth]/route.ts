// NextAuth
import NextAuth from 'next-auth'

// Providers
import CredentialsProvider from 'next-auth/providers/credentials'

// Services
import { authService } from '@/services/auth.service'

// Interfaces
import { UserResponse } from '@/interfaces/auth'

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'email' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) return null

				const user = await authService.login(credentials)

				if (!user) return null

				return user
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},

		async session({ session, token }) {
			session.user = token as unknown as UserResponse
			return session
		},
	},
	pages: {
		signIn: '/iniciar-sesion',
	},
})

export { handler as GET, handler as POST }
