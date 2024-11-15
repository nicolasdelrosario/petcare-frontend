// Tankstack Query
import { useQuery } from '@tanstack/react-query'

// Services
import { petService } from '@/services/pet.service'

// Hooks
import { useToken } from '@/services/auth'

export const usePets = () => {
	const token = useToken()

	return useQuery({
		queryKey: ['pets'],
		queryFn: () => {
			if (!token) throw new Error('No token found')
			return petService.getPets(token)
		},
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
