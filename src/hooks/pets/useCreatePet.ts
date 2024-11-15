// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { petService } from '@/services/pet.service'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useCreatePet = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Pet>) => {
			if (!token) throw new Error('No token found')
			return petService.createPet(changes, token)
		},

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
