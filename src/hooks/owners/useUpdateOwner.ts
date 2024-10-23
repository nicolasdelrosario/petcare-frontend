import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateOwner } from '@/services/owner.service'
import { Owner } from '@/interfaces/Owner'
import { useToast } from '@/hooks/useToast'

interface EditOwnerData {
	id: number
	changes: Omit<Owner, 'id' | 'createdAt' | 'updatedAt'>
}

export const useUpdateOwner = () => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: EditOwnerData) => updateOwner(id, changes),

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
