// Providers
import SessionAuthProvider from './SessionAuthProvider'
import QueryClientProv from './QueryClientProvider'
import ToasterProvider from './ToasterProvider'
import ThemeProvider from './ThemeProvider'

interface ProvidersProps {
	children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<SessionAuthProvider>
			<QueryClientProv>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<ToasterProvider />
			</QueryClientProv>
		</SessionAuthProvider>
	)
}
