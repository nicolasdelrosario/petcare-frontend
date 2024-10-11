import { create } from 'zustand'

// Services
import { getOwners } from '@/services/owner.service'

// Interfaces
import { Owner } from '@/interfaces/Owner'

interface OwnerStore {
	owners: Owner[]
	loading: boolean
	getOwners: () => Promise<void>
}

export const useOwnerStore = create<OwnerStore>(set => ({
	owners: [],
	loading: false,
	getOwners: async () => {
		set({ loading: true })
		try {
			const owners = await getOwners()
			set({ owners, loading: true })
		} catch (error) {
			console.log('Failed to fetch users:', error)
			set({ loading: false })
		}
	},
}))
