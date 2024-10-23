import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePet } from '@/services/pet.service'
import { useToast } from '@/hooks/useToast'

export const useDeletePet = (id: number) => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: () => deletePet(id),

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
