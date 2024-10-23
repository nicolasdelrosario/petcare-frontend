import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteAppointment } from '@/services/appointment.service'
import { useToast } from '@/hooks/useToast'

export const useDeleteAppointment = (id: number) => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => deleteAppointment(id),

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
