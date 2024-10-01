// Metadata
import constructMetadata from '@/util/constructMetadata'

// Font Family
import { Poppins } from 'next/font/google'

// CSS
import './globals.css'

// Shadcn
import { cn } from '@/lib/utils'

// Components
import { Navbar } from '@/components'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata = constructMetadata()

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='es'>
			<body className={cn('min-h-screen', poppins.className)}>
				<header className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
					<Navbar />
				</header>
				{children}
				<footer></footer>
			</body>
		</html>
	)
}
