import axios from 'axios'
import { env } from '@/config/env'

/**
 * Instancia de axios con la url base del dominio
 */
const API_BASE = axios.create({
	baseURL: env.API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default API_BASE
