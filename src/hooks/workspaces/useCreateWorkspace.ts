// Tankstack Query
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Services
import { workspaceService } from '@/services/workspace.service'

// Interfaces
import { Workspace } from '@/interfaces/Workspace'

// Hooks
import { useToast } from '@/hooks/useToast'

export const useCreateWorkspace = (
	onSuccessCallback?: (workspaceId: number) => void
) => {
	const queryClient = useQueryClient()
	const { toast } = useToast()

	return useMutation({
		mutationFn: (changes: Partial<Workspace>) => {
			return workspaceService.createWorkspace(changes)
		},

		onSuccess: data => {
			queryClient.invalidateQueries({ queryKey: ['workspaces'] })

			if (onSuccessCallback) onSuccessCallback(data.id)
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
