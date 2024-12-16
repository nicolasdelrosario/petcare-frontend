'use client'

// Next
import { usePathname } from 'next/navigation'

// CSS
import './globals.css'

// Components
import { Navbar, Footer, Providers } from '@/components'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function ClientLayout({ children }: RootLayoutProps) {
	const pathname = usePathname()

	const isHomePage = pathname === '/'

	return (
		<Providers>
			{isHomePage && (
				<header className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-black'>
					<Navbar />
				</header>
			)}
			<main className='grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col'>
				<div className='flex h-full flex-1 flex-col'>{children}</div>
			</main>

			{isHomePage && <Footer />}
		</Providers>
	)
}
