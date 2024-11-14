// Services
import { createApiInstance } from '@/services/api'

// Interfaces
import { LoginCredentials, RegisterCredentials } from '@/interfaces/auth'

export const authService = {
	login: async (credentials: LoginCredentials) => {
		const api = createApiInstance()
		const { email, password } = credentials
		const { data } = await api.post('/auth/login', {
			email,
			password,
		})

		if (data.error) throw data

		return data
	},

	register: async (credentials: RegisterCredentials) => {
		const api = createApiInstance()
		const { name, email, password } = credentials
		//! TODO: Add workspaceId
		const { data } = await api.post('/auth/register', {
			name,
			email,
			password,
			workspaceId: 1,
		})

		if (data.error) throw data

		return data
	},
}
