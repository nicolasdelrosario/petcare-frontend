// Tankstack Query
import { useQuery } from '@tanstack/react-query'

// Services
import { ownerService } from '@/services/owner.service'

// Hooks
import { useToken } from '@/services/auth'

export const useOwners = () => {
	const token = useToken()

	return useQuery({
		queryKey: ['owners'],
		queryFn: () => {
			if (!token) throw new Error('No token found')
			return ownerService.getOwners(token)
		},
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
