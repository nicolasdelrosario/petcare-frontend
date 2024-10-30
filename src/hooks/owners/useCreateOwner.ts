// Services
import { createOwner } from '@/services/owner.service'

// Interfaces
import { Owner } from '@/interfaces/Owner'

// Hooks
import { useToast } from '@/hooks/useToast'

// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateOwner = () => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Owner>) => createOwner(changes),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['owners'] })
			toast({
				title: 'Éxito',
				description: 'El propietario ha sido creado exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible crear el propietario.',
			})
		},
	})
}
