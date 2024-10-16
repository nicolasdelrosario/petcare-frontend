import { MaxWidthWrapper } from '@/components'

interface HeaderProps {
	title: string
}

export default function Header({ title }: HeaderProps) {
	return (
		<header className='border-b bg-background'>
			<MaxWidthWrapper className='flex h-14 items-center'>
				<h1 className='text-2xl font-semibold'>{title}</h1>
			</MaxWidthWrapper>
		</header>
	)
}
