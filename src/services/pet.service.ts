import { Pet } from '@/interfaces/Pet'

import API_BASE from './api'

const PATH_PETS = '/pets'

// Get Pets
export const getPets = async () => {
	const { data } = await API_BASE.get(`${PATH_PETS}`)
	return data
}

// Get Pet
export const getPet = async (id: string) => {
	const { data } = await API_BASE.get(`${PATH_PETS}/${id}`)
	return data
}

// Update Pet
export const updatePet = async (
	id: string,
	changes: Partial<Pet>
): Promise<Pet> => {
	const { data } = await API_BASE.put(`${PATH_PETS}/${id}`, changes)
	return data
}

// Delete Pet
export const deletePet = async (id: string): Promise<void> => {
	await API_BASE.patch(`${PATH_PETS}/${id}`)
}
