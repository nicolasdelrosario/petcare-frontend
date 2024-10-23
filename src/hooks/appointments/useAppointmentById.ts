import { useQuery } from '@tanstack/react-query'
import { getAppointment } from '@/services/appointment.service'

export const useAppointmentById = (id: number) => {
	return useQuery({
		queryKey: ['appointment', id],
		queryFn: () => getAppointment(id),
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
