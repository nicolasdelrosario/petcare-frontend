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

// Update Owner
export const updateOwner = async (
	id: number,
	changes: Partial<Owner>
): Promise<Owner> => {
	const { data } = await API_BASE.put(`${PATH_OWNER}/${id}`, changes)
	return data
}

// Delete Owner
export const deleteOwner = async (id: number): Promise<void> => {
	await API_BASE.patch(`${PATH_OWNER}/${id}`)
}

// Create Owner
export const createOwner = async (changes: Partial<Owner>): Promise<Owner> => {
	const { data } = await API_BASE.post(`${PATH_OWNER}`, changes)
	return data
}
