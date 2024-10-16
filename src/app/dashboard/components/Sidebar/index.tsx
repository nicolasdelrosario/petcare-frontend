'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/shadcn/button'
import { ScrollArea } from '@/components/shadcn/react-scroll-area'
import {
	ChevronLeft,
	ChevronRight,
	Home,
	Calendar,
	Users,
	Settings,
	HelpCircle,
	PawPrint,
} from 'lucide-react'

// Zustand Store
import { useSidebarStore } from '@/store/useSidebarStore'

const navItems = [
	{ name: 'Home', href: '/dashboard/home', icon: Home },
	{ name: 'Citas', href: '/dashboard/citas', icon: Calendar },
	{ name: 'Pacientes', href: '/dashboard/pacientes', icon: Users },
]

const bottomNavItems = [
	{ name: 'Ajustes', href: '/ajustes', icon: Settings },
	{ name: 'Ayuda', href: '/ayuda', icon: HelpCircle },
]
export default function Sidebar() {
	const pathname = usePathname()
	const { open, toggleOpen } = useSidebarStore()

	return (
		<aside
			className={cn(
				'fixed left-0 top-0 z-40 h-screen bg-background transition-all duration-300 ease-in-out',
				open ? 'w-64' : 'w-16'
			)}
		>
			<div className='flex h-full flex-col border-r'>
				<div className='flex h-16 items-center justify-between px-3 py-4'>
					{open && (
						<Link href='/' className='flex items-center space-x-2'>
							<PawPrint className='h-6 w-6' />
							<span className='text-lg font-semibold'>Petcare</span>
						</Link>
					)}
					<Button
						variant='ghost'
						size='icon'
						className='ml-auto'
						onClick={toggleOpen}
					>
						{open ? (
							<ChevronLeft className='h-4 w-4' />
						) : (
							<ChevronRight className='h-4 w-4' />
						)}
					</Button>
				</div>
				<ScrollArea className='flex-1 py-2'>
					<nav className='flex flex-col space-y-1 px-2'>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
									pathname === item.href
										? 'bg-accent text-accent-foreground'
										: 'text-muted-foreground',
									!open && 'justify-center'
								)}
							>
								<item.icon className='h-5 w-5' />
								{open && <span className='ml-2'>{item.name}</span>}
							</Link>
						))}
					</nav>
				</ScrollArea>
				<div className='mt-auto px-2 py-4'>
					{bottomNavItems.map(item => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
								pathname === item.href
									? 'bg-accent text-accent-foreground'
									: 'text-muted-foreground',
								!open && 'justify-center'
							)}
						>
							<item.icon className='h-5 w-5' />
							{open && <span className='ml-2'>{item.name}</span>}
						</Link>
					))}
					{open && (
						<Button
							variant='ghost'
							size='sm'
							className='mt-2 w-full justify-start'
							onClick={toggleOpen}
						>
							{open ? (
								<ChevronLeft className='mr-2 h-4 w-4' />
							) : (
								<ChevronRight className='mr-2 h-4 w-4' />
							)}
							<span>Vista Compacta</span>
						</Button>
					)}
				</div>
			</div>
		</aside>
	)
}
