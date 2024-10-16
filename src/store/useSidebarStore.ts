import { create } from 'zustand'

interface SidebarState {
	open: boolean
	toggleOpen: () => void
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
	open: window.innerWidth < 768 ? false : true,
	toggleOpen: () => {
		const { open } = get()
		set({ open: !open })
	},
}))
