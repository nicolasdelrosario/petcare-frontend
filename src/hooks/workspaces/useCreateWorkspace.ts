// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { workspaceService } from '@/services/workspace.service'

// Interfaces
import { Workspace } from '@/interfaces/Workspace'

// Hooks
import { useToast } from '@/hooks/useToast'
import { useToken } from '@/services/auth'

export const useCreateWorkspace = () => {
	const queryClient = useQueryClient()
	const token = useToken()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Workspace>) => {
			if (!token) throw new Error('No token found')
			return workspaceService.createWorkspace(changes, token)
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['workspaces'] })
			toast({
				title: 'Éxito',
				description: 'El espacio de trabajo ha sido creado exitosamente.',
			})
		},

		onError: () => {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'No ha sido posible crear el espacio de trabajo.',
			})
		},
	})
}
