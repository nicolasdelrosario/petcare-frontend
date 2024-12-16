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
			const response = await signIn('credentials', {
				email: credentials.email,
				password: credentials.password,
				redirect: false,
			})

			if (response?.error) throw new Error(response.error)

			return response
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['signin'] })

			if (onSuccessCallback) onSuccessCallback()
		},
		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible iniciar sesión.',
			})
		},
	})
}
