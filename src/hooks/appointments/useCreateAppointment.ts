// Services
import { createAppointment } from '@/services/appointment.service'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Hooks
import { useToast } from '@/hooks/useToast'

// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateAppointment = () => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Appointment>) => createAppointment(changes),

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
				description: 'Ocurrio un error al crear la cita.',
			})
		},
	})
}
