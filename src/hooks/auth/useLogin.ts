// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Auth
import { signIn } from 'next-auth/react'

// Interfaces
import { LoginCredentials } from '@/interfaces/auth'

// Hooks
import { useToast } from '@/hooks/useToast'

export const useLogin = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: async (credentials: LoginCredentials) => {
			return await signIn('credentials', {
				email: credentials.email,
				password: credentials.password,
				redirect: false,
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['me'] })

			if (onSuccessCallback) onSuccessCallback()
		},
		onError: (error: Error) => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: error.message || 'No ha sido posible iniciar sesión.',
			})
		},
	})
}
