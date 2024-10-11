import { create } from 'zustand'

interface ViewModeState {
	viewMode: 'table' | 'card'
	setViewMode: (mode: 'table' | 'card') => void
}

export const useViewModeStore = create<ViewModeState>(set => ({
	viewMode: 'card',
	setViewMode: mode => set({ viewMode: mode }),
}))
