import { useQuery } from '@tanstack/react-query'
import { getPet } from '@/services/pet.service'

export const usePetById = (id: number) => {
	return useQuery({
		queryKey: ['pet', id],
		queryFn: () => getPet(id),
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
