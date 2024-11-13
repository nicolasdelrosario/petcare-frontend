// NextAuth
import NextAuth from 'next-auth'

// Providers
import CredentialsProvider from 'next-auth/providers/credentials'

// API
import API_BASE from '@/services/api'

interface SessionUser {
	email: string
	token: string
}

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'email', placeholder: 'test@test.com' },
				password: { label: 'password', type: 'password' },
			},
			// eslint-disable-next-line
			async authorize(credentials, req) {
				const { data } = await API_BASE.post('/auth/login', {
					email: credentials?.email,
					password: credentials?.password,
				})

				const user = data

				if (user.error) throw user

				return user
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},

		async session({ session, token }) {
			session.user = token as unknown as SessionUser
			return session
		},
	},
	pages: {
		signIn: '/iniciar-sesion',
	},
})

export { handler as GET, handler as POST }
