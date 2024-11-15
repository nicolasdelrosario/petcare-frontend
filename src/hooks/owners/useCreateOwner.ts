// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { ownerService } from '@/services/owner.service'

// Interfaces
import { Owner } from '@/interfaces/Owner'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useCreateOwner = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Owner>) => {
			if (!token) throw new Error('No token found')
			return ownerService.createOwner(changes, token)
		},

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
