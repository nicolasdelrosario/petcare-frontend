// Axios
import axios from 'axios'

// Env
import { env } from '@/config/env'

/**
 * Instancia de axios con la url base del dominio
 */
export const createApiInstance = (token?: string) => {
	const instance = axios.create({
		baseURL: env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000/api/v1',
		headers: {
			'Content-Type': 'application/json',
			...(token && { Authorization: `Bearer ${token}` }),
		},
	})

	return instance
}
