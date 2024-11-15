import { useSession } from 'next-auth/react'

export const useToken = () => {
	const { data: session } = useSession()
	return session?.user?.token || null
}
