// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { appointmentService } from '@/services/appointment.service'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useDeleteAppointment = (id: number) => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => {
			if (!token) throw new Error('No token found')
			return appointmentService.deleteAppointment(id, token)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['appointment', id] })
			queryClient.invalidateQueries({ queryKey: ['appointments'] })
			toast({
				title: 'Éxito',
				description: 'La cita ha sido eliminada exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible eliminar la cita.',
			})
		},
	})
}
