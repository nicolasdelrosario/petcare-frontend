import { useQuery } from '@tanstack/react-query'
import { getPets } from '@/services/pet.service'

export const usePets = () => {
	return useQuery({
		queryKey: ['pets'],
		queryFn: getPets,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
