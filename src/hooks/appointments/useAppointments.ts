import { useQuery } from '@tanstack/react-query'
import { getAppointments } from '@/services/appointment.service'

export const useAppointments = () => {
	return useQuery({
		queryKey: ['appointments'],
		queryFn: getAppointments,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
