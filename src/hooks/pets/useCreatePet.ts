// Services
import { createPet } from '@/services/pet.service'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Hooks
import { useToast } from '@/hooks/useToast'

// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreatePet = () => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Pet>) => createPet(changes),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['pets'] })
			toast({
				title: 'Éxito',
				description: 'La mascota ha sido creada exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible crear la mascota.',
			})
		},
	})
}
