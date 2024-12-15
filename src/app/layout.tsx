//Next
import { Metadata } from 'next'

//React
import { PropsWithChildren } from 'react'

//Font Family
import { Poppins } from 'next/font/google'

//CSS
import './globals.css'

//Shadcn
import { cn } from '@/lib/utils'

//Components
import ClientLayout from './client-layout'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'PetCare',
	description: 'Optimiza tu veterinaria con PetCare',
	keywords: ['PetCare', 'SaaS', 'veterinaria'],
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='es' suppressHydrationWarning>
			<body className={cn('min-h-screen', poppins.className)}>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	)
}
