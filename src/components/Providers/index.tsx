'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from '../shadcn/toaster'

interface ProvidersProps {
	children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
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
			{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
			<Toaster />
		</QueryClientProvider>
	)
}
