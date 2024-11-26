// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { userService } from '@/services/user.service'
// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useDeleteUser = (id: number) => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => {
			if (!token) throw new Error('No token found')
			return userService.deleteUser(id, token)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user', id] })
			queryClient.invalidateQueries({ queryKey: ['users'] })
			toast({
				title: 'Éxito',
				description: 'La mascota ha sido eliminada exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible eliminar a la mascota.',
			})
		},
	})
}
