import { useQuery } from '@tanstack/react-query'
import { getOwners } from '@/services/owner.service'

const useOwner = () => {
	return useQuery({
		queryKey: ['owners'],
		queryFn: getOwners,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}

export default useOwner
