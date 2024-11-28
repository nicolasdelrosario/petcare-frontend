'use client'

// Next
import { usePathname } from 'next/navigation'

// Font Family
import { Poppins } from 'next/font/google'

// CSS
import './globals.css'

// Shadcn
import { cn } from '@/lib/utils'

// Components
import { Navbar, Footer, Providers } from '@/components'
import { ThemeProvider } from '@/components/Providers/ThemeProvider'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	const pathname = usePathname()

	const isHomePage = pathname === '/'

	return (
		<html lang='es' suppressHydrationWarning>
			<body className={cn('min-h-screen', poppins.className)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Providers>
						{isHomePage && (
							<header className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
								<Navbar />
							</header>
						)}

						<main className='grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col'>
							<div className='flex h-full flex-1 flex-col'>{children}</div>
						</main>

						{isHomePage && <Footer />}
					</Providers>
				</ThemeProvider>
			</body>
		</html>
	)
}
