// Shadcn Components
import { Input } from '@/components/shadcn'

// Lucide Icons
import { Search as SearchI } from 'lucide-react'

interface SearchProps {
	searchTerm: string
	setSearchTerm: (searchTerm: string) => void
	placeholder: string
}

export default function Search({
	searchTerm,
	setSearchTerm,
	placeholder,
}: SearchProps) {
	return (
		<div className='flex items-center space-x-2'>
			<SearchI className='size-5 text-muted-foreground' />
			<Input
				type='search'
				placeholder={placeholder}
				className='max-w-sm'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
		</div>
	)
}
