'use client'

// Tanstack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Env
import { env } from '@/config/env'

interface ProvidersProps {
	children: React.ReactNode
}

export default function QueryClientProv({ children }: ProvidersProps) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 2,
				refetchOnWindowFocus: false,
			},
		},
	})

	return (
		<QueryClientProvider client={queryClient}>
			{children}

			{env.NODE_ENV === 'development' && <ReactQueryDevtools />}
		</QueryClientProvider>
	)
}
