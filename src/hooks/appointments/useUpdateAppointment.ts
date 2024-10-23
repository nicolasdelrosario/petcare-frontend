import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAppointment } from '@/services/appointment.service'
import { Appointment } from '@/interfaces/Appointment'
import { useToast } from '@/hooks/useToast'

interface UpdateAppointmentData {
	id: number
	changes: Omit<
		Appointment,
		'id' | 'createdAt' | 'updatedAt' | 'status' | 'pet' | 'user'
	>
}

export const useUpdateAppointment = () => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: UpdateAppointmentData) =>
			updateAppointment(id, changes),

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
