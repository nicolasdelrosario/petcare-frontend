'use client'

// Next
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// React
import { useState } from 'react'

// Utils
import { cn } from '@/lib/utils'

// Components
import { HelpModal } from '../index'

// Shadcn Components
import { Button, ScrollArea } from '@/components/shadcn'

// Lucide Icons
import {
	ChevronLeft,
	ChevronRight,
	Home,
	Calendar,
	Users,
	Settings,
	PawPrint,
	HelpCircle,
} from 'lucide-react'

// Zustand Store
import { useSidebar } from '@/store/useSidebarStore'

const navItems = [
	{ name: 'Home', href: '/dashboard/home', icon: Home, description: 'Inicio' },
	{
		name: 'Citas',
		href: '/dashboard/citas',
		icon: Calendar,
		description: 'Citas',
	},
	{
		name: 'Pacientes',
		href: '/dashboard/pacientes',
		icon: Users,
		description: 'Pacientes',
	},
]

export default function Sidebar() {
	const pathname = usePathname()
	const { open, toggleOpen } = useSidebar()
	const [helpModalOpen, setHelpModalOpen] = useState(false)

	// Toggle modal for Help
	const handleHelpClick = () => setHelpModalOpen(true)

	return (
		<>
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
							aria-label={
								open ? 'Cambiar a vista compacta' : 'Abrir vista expandida'
							}
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
									aria-label={item.description}
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
						<Link
							href={'/dashboard/ajustes'}
							className={cn(
								'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
								pathname === '/dashboard/ajustes'
									? 'bg-accent text-accent-foreground'
									: 'text-muted-foreground',
								!open && 'justify-center'
							)}
							aria-label='Ajustes'
						>
							<Settings className='h-5 w-5' />
							{open && <span className='ml-2'>Ajustes</span>}
						</Link>

						<div
							className={cn(
								'flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground',
								!open && 'justify-center'
							)}
							onClick={handleHelpClick}
						>
							<HelpCircle className='h-5 w-5' />
							{open && <span className='ml-2'>Ayuda</span>}
						</div>

						{/* <Button
							variant='ghost'
							size={open ? 'sm' : 'icon'}
							className={`mt-2 w-full ${open ? 'justify-start' : 'justify-center'}`}
							onClick={toggleOpen}
							aria-label={
								open ? 'Cambiar a vista compacta' : 'Abrir vista expandida'
							}
						>
							{open ? (
								<>
									<ChevronLeft className='mr-2 h-4 w-4' />
									<span>Vista Compacta</span>
								</>
							) : (
								<ChevronRight className='h-4 w-4' />
							)}
						</Button> */}
					</div>
				</div>
			</aside>
			<HelpModal open={helpModalOpen} onOpenChange={setHelpModalOpen} />
		</>
	)
}
