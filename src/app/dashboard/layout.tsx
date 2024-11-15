'use client'

// Stores
import { useSidebarStore } from '@/store/useSidebarStore'

// Utils
import { cn } from '@/lib/utils'

// Components
import { Sidebar, AddNewButton } from './components'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: RootLayoutProps) {
	const { open } = useSidebarStore()

	return (
		<div className='flex min-h-screen'>
			<Sidebar />
			<div
				className={cn(
					'flex flex-1 flex-col transition-all duration-300',
					open ? 'ml-64' : 'ml-16'
				)}
			>
				{children}
			</div>
			<AddNewButton />
		</div>
	)
}
