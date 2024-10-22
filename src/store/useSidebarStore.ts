import { useEffect } from 'react'
import { create } from 'zustand'

interface SidebarState {
	open: boolean
	toggleOpen: () => void
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
	open: false,
	toggleOpen: () => {
		const { open } = get()
		set({ open: !open })
	},
}))

export const useSidebar = () => {
	const { open, toggleOpen } = useSidebarStore()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const isOpen = window.innerWidth >= 768
			useSidebarStore.setState({ open: isOpen })
		}
	}, [])

	return { open, toggleOpen }
}
