'use client'

import Sidebar from './components/Sidebar'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/useSidebarStore'

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
		</div>
	)
}
