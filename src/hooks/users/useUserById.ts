// Tankstack Query
import { useQuery } from '@tanstack/react-query'

// Services
import { userService } from '@/services/user.service'

// Hooks
import { useToken } from '@/services/auth'

export const useUserById = (id: number) => {
	const token = useToken()

	return useQuery({
		queryKey: ['user', id],
		queryFn: () => {
			if (!token) throw new Error('No token found')
			return userService.getUserById(id, token)
		},
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
