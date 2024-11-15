// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { petService } from '@/services/pet.service'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

interface EditPetData {
	id: number
	changes: Omit<Pet, 'id' | 'createdAt' | 'updatedAt'>
}

export const useUpdatePet = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: EditPetData) => {
			if (!token) throw new Error('No token found')
			return petService.updatePet(id, changes, token)
		},

		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['pet', id] })
			queryClient.invalidateQueries({ queryKey: ['pets'] })
			toast({
				title: 'Éxito',
				description: 'La mascota ha sido actualizada exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible actualizar la mascota.',
			})
		},
	})
}
