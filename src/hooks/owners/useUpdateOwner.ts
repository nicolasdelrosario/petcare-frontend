// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { ownerService } from '@/services/owner.service'

// Interfaces
import { Owner } from '@/interfaces/Owner'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

interface EditOwnerData {
	id: number
	changes: Omit<Owner, 'id' | 'createdAt' | 'updatedAt'>
}

export const useUpdateOwner = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: EditOwnerData) => {
			if (!token) throw new Error('No token found')
			return ownerService.updateOwner(id, changes, token)
		},
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['owner', id] })
			queryClient.invalidateQueries({ queryKey: ['owners'] })
			toast({
				title: 'Éxito',
				description: 'El propietario ha sido actualizado exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible actualizar el propietario.',
			})
		},
	})
}
