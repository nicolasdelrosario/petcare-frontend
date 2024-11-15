// Providers
import SessionAuthProvider from './SessionAuthProvider'
import QueryClientProv from './QueryClientProvider'
import ToasterProvider from './ToasterProvider'

interface ProvidersProps {
	children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<SessionAuthProvider>
			<QueryClientProv>
				{children}
				<ToasterProvider />
			</QueryClientProv>
		</SessionAuthProvider>
	)
}
