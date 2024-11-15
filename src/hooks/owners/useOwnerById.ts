// Tankstack Query
import { useQuery } from '@tanstack/react-query'

// Services
import { ownerService } from '@/services/owner.service'

// Hooks
import { useToken } from '@/services/auth'

export const useOwnerById = (id: number) => {
	const token = useToken()

	return useQuery({
		queryKey: ['owner', id],
		queryFn: () => {
			if (!token) throw new Error('No token found')
			return ownerService.getOwnerById(id, token)
		},
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	})
}
