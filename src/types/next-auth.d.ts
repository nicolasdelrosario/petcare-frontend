import 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			name: string
			token: string
			userId: number
			workspaceId: number
		}
	}
}
