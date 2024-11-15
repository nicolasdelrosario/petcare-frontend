// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { appointmentService } from '@/services/appointment.service'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useCreateAppointment = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Appointment>) => {
			if (!token) throw new Error('No token found')
			return appointmentService.createAppointment(changes, token)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['appointments'] })
			toast({
				title: 'Éxito',
				description: 'La cita ha sido creada exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'Ocurrió un error al crear la cita.',
			})
		},
	})
}
