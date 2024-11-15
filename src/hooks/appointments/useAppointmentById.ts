// Tankstack Query
import { useQuery } from '@tanstack/react-query'

// Services
import { appointmentService } from '@/services/appointment.service'

// Hooks
import { useToken } from '@/services/auth'

export const useAppointmentById = (id: number) => {
	const token = useToken()

	return useQuery({
		queryKey: ['appointment', id],
		queryFn: () => {
			if (!token) throw new Error('No token found')
			return appointmentService.getAppointmentById(id, token)
		},
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
	})
}
