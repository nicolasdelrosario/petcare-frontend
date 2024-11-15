// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { ownerService } from '@/services/owner.service'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useDeleteOwner = (id: number, onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => {
			if (!token) throw new Error('No token found')
			return ownerService.deleteOwner(id, token)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['owner', id] })
			queryClient.invalidateQueries({ queryKey: ['owners'] })

			if (onSuccessCallback) onSuccessCallback()
			toast({
				title: 'Éxito',
				description: 'El propietario ha sido eliminado exitosamente.',
			})
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
