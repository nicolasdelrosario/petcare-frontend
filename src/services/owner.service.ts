import { createApiInstance } from './api'

// Interfaces
import { Owner } from '@/interfaces/Owner'

const PATH_OWNER = '/owners'

export const ownerService = {
	getOwners: async (token: string): Promise<Owner[]> => {
		const api = createApiInstance(token)
		const { data } = await api.get(PATH_OWNER)

		return data
	},

	getOwnerById: async (id: number, token: string): Promise<Owner> => {
		const api = createApiInstance(token)
		const { data } = await api.get(`${PATH_OWNER}/${id}`)

		return data
	},

	createOwner: async (
		changes: Partial<Owner>,
		token: string
	): Promise<Owner> => {
		const api = createApiInstance(token)
		const { data } = await api.post(PATH_OWNER, changes)

		return data
	},

	updateOwner: async (
		id: number,
		changes: Partial<Owner>,
		token: string
	): Promise<Owner> => {
		const api = createApiInstance(token)
		const { data } = await api.put(`${PATH_OWNER}/${id}`, changes)

		return data
	},

	deleteOwner: async (id: number, token: string): Promise<void> => {
		const api = createApiInstance(token)
		await api.patch(`${PATH_OWNER}/${id}`)
	},
}
