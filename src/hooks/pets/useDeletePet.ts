// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { petService } from '@/services/pet.service'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useDeletePet = (id: number) => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => {
			if (!token) throw new Error('No token found')
			return petService.deletePet(id, token)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['pet', id] })
			queryClient.invalidateQueries({ queryKey: ['pets'] })
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
