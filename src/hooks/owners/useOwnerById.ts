import { useQuery } from '@tanstack/react-query'
import { getOwner } from '@/services/owner.service'

export const useOwnerById = (id: number) => {
	return useQuery({
		queryKey: ['owner', id],
		queryFn: () => getOwner(id),
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	})
}
