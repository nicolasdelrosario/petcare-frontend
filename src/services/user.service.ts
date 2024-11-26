import { createApiInstance } from './api'

// Interfaces
import { User } from '@/interfaces/User'

const PATH_USERS = '/users'

export const userService = {
	getUsers: async (token: string): Promise<User[]> => {
		const api = createApiInstance(token)
		const { data } = await api.get(PATH_USERS)

		return data
	},

	getUserById: async (id: number, token: string): Promise<User> => {
		const api = createApiInstance(token)
		const { data } = await api.get(`${PATH_USERS}/${id}`)

		return data
	},

	getUserByEmail: async (email: string, token: string): Promise<User> => {
		const api = createApiInstance(token)
		const { data } = await api.get(`${PATH_USERS}/email/${email}`)

		return data
	},

	updateUser: async (
		id: number,
		changes: Partial<User>,
		token: string
	): Promise<User> => {
		const api = createApiInstance(token)
		const { data } = await api.put(`${PATH_USERS}/${id}`, changes)

		return data
	},

	deleteUser: async (id: number, token: string): Promise<void> => {
		const api = createApiInstance(token)
		await api.delete(`${PATH_USERS}/${id}`)
	},
}
