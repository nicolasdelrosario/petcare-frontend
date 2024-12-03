// Services
import { createApiInstance } from '@/services/api'

// Interfaces
import { Workspace } from '@/interfaces/Workspace'

const PATH_WORKSPACES = '/workspaces'

export const workspaceService = {
	getWorkspaceById: async (id: number): Promise<Workspace> => {
		const api = createApiInstance()
		const { data } = await api.get(`${PATH_WORKSPACES}/${id}`)

		return data
	},

	createWorkspace: async (changes: Partial<Workspace>): Promise<Workspace> => {
		const api = createApiInstance()
		const { data } = await api.post(PATH_WORKSPACES, changes)

		return data
	},
}
