import API_BASE from './api'

// Interfaces
import { Owner } from '@/interfaces/Owner'

const PATH_OWNER = '/owners'

// Get Owners
export const getOwners = async (): Promise<Owner[]> => {
	const { data } = await API_BASE.get(`${PATH_OWNER}`)
	return data
}

// Get Owner
export const getOwner = async (id: number): Promise<Owner> => {
	const { data } = await API_BASE.get(`${PATH_OWNER}/${id}`)
	return data
}
