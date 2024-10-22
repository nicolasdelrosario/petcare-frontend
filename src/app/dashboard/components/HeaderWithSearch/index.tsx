// Components
import { MaxWidthWrapper } from '@/components'
import { Header, ViewToggle, Search } from '@/app/dashboard/components'

interface HeaderWithSearchProps {
	title: string
	searchTerm: string
	setSearchTerm: (term: string) => void
	placeholder: string
}

export default function HeaderWithSearch({
	title,
	searchTerm,
	setSearchTerm,
	placeholder,
}: HeaderWithSearchProps) {
	return (
		<>
			<Header title={title} />
			<MaxWidthWrapper className='h-auto'>
				<div className='flex items-center justify-between py-10'>
					<Search
						placeholder={placeholder}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					<ViewToggle />
				</div>
			</MaxWidthWrapper>
		</>
	)
}
