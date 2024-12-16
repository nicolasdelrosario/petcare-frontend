// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { authService } from '@/services/auth.service'

// Interfaces
import { RegisterCredentials } from '@/interfaces/auth'

// Hooks
import { useToast } from '@/hooks/useToast'

export const useRegister = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (credentials: RegisterCredentials) => {
			return authService.register(credentials)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })

			if (onSuccessCallback) onSuccessCallback()
			toast({
				title: 'Éxito',
				description: 'El usuario ha sido creado exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible crear el usuario.',
			})
		},
	})
}
