// Axios
import axios from 'axios'

// Env
import { env } from '@/config/env'

/**
 * Instancia de axios con la url base del dominio
 */
const API_BASE = axios.create({
	baseURL: env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
})

export default API_BASE
