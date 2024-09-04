// Metadata
import constructMetadata from '@/util/constructMetadata'

// Font Family
import { Recursive } from 'next/font/google'

// CSS
import './globals.css'

const recursive = Recursive({ subsets: ['latin'] })

export const metadata = constructMetadata()

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={recursive.className}>
				<header></header>
				{children}
				<footer></footer>
			</body>
		</html>
	)
}
