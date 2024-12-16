// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { userService } from '@/services/user.service'

// Interfaces
import { User } from '@/interfaces/User'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

interface EditPetData {
	id: number
	changes: Omit<
		User,
		'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'role' | 'workspace'
	>
}

export const useUpdateUser = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: EditPetData) => {
			if (!token) throw new Error('No token found')
			return userService.updateUser(id, changes, token)
		},

		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['user', id] })
			queryClient.invalidateQueries({ queryKey: ['users'] })
			toast({
				title: 'Éxito',
				description: 'El usuario actualizado exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible actualizar el usuario.',
			})
		},
	})
}
