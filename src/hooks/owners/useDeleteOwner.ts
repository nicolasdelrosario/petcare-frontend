import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteOwner } from '@/services/owner.service'
import { useToast } from '@/hooks/useToast'

export const useDeleteOwner = (id: number) => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => deleteOwner(id),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['owner', id] })
			queryClient.invalidateQueries({ queryKey: ['owners'] })
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible eliminar al propietario.',
			})
		},
	})
}