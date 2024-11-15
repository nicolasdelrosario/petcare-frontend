'use client'

import { SessionProvider } from 'next-auth/react'

interface ProvidersProps {
	children: React.ReactNode
}

export default function SessionAuthProvider({ children }: ProvidersProps) {
	return <SessionProvider>{children}</SessionProvider>
}
