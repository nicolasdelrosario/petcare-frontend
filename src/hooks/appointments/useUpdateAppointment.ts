// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { appointmentService } from '@/services/appointment.service'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

interface UpdateAppointmentData {
	id: number
	changes: Omit<
		Appointment,
		'id' | 'createdAt' | 'updatedAt' | 'status' | 'pet' | 'user'
	>
}

export const useUpdateAppointment = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: UpdateAppointmentData) => {
			if (!token) throw new Error('No token found')
			return appointmentService.updateAppointment(id, changes, token)
		},

		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['appointment', id] })
			queryClient.invalidateQueries({ queryKey: ['appointments'] })
			toast({
				title: 'Éxito',
				description: 'La cita ha sido actualizada exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible actualizar la cita.',
			})
		},
	})
}
