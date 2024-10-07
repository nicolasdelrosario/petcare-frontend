// Next
import Link from 'next/link'

// Components
import { MaxWidthWrapper } from '@/components'

// Shadcn
import { buttonVariants } from '../shadcn/button'

// Icons
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function Navbar() {
	return (
		<MaxWidthWrapper>
			<nav className='flex h-14 items-center justify-between border-b border-zinc-200'>
				<Link href='/' className='z-40 flex text-lg font-semibold'>
					Petcare
				</Link>
				<div className='flex h-full items-center space-x-4'>
					<Link
						href='/'
						className={buttonVariants({
							size: 'sm',
							className: 'text-xs sm:text-sm',
						})}
					>
						Registrar
						<ArrowRightIcon className='ml-1.5 h-5 w-5' />
					</Link>

					<div className='hidden h-8 w-px bg-zinc-200 sm:block' />

					<Link
						href='/login'
						className={buttonVariants({
							size: 'sm',
							variant: 'outline',
							className: 'text-xs sm:text-sm',
						})}
					>
						Login
					</Link>
				</div>
			</nav>
		</MaxWidthWrapper>
	)
}
