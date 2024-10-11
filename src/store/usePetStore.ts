import { create } from 'zustand'

// Services
import { getPets } from '@/services/pet.service'

// Interfaces
import { Pet } from '@/interfaces/Pet'

interface PetStore {
	pets: Pet[]
	loading: boolean
	getPets: () => Promise<void>
}

export const usePetStore = create<PetStore>(set => ({
	pets: [],
	loading: false,
	getPets: async () => {
		set({ loading: true })
		try {
			const pets = await getPets()
			set({ pets, loading: true })
		} catch (error) {
			console.log('Failed to fetch users:', error)
			set({ loading: false })
		}
	},
}))
