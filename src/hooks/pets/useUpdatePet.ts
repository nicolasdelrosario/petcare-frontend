import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updatePet } from '@/services/pet.service'
import { Pet } from '@/interfaces/Pet'
import { useToast } from '@/hooks/useToast'

interface EditPetData {
	id: number
	changes: Omit<Pet, 'id' | 'createdAt' | 'updatedAt'>
}

export const useUpdatePet = () => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: ({ id, changes }: EditPetData) => updatePet(id, changes),

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
