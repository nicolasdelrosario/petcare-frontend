import { createApiInstance } from './api'

// Interfaces
import { Pet } from '@/interfaces/Pet'

const PATH_PETS = '/pets'

export const petService = {
	getPets: async (token: string): Promise<Pet[]> => {
		const api = createApiInstance(token)
		const { data } = await api.get(PATH_PETS)

		return data
	},

	getPetById: async (id: number, token: string): Promise<Pet> => {
		const api = createApiInstance(token)
		const { data } = await api.get(`${PATH_PETS}/${id}`)

		return data
	},

	createPet: async (changes: Partial<Pet>, token: string): Promise<Pet> => {
		const api = createApiInstance(token)
		const { data } = await api.post(PATH_PETS, changes)

		return data
	},

	updatePet: async (
		id: number,
		changes: Partial<Pet>,
		token: string
	): Promise<Pet> => {
		const api = createApiInstance(token)
		const { data } = await api.put(`${PATH_PETS}/${id}`, changes)

		return data
	},

	deletePet: async (id: number, token: string): Promise<void> => {
		const api = createApiInstance(token)
		await api.delete(`${PATH_PETS}/${id}`)
	},
}
