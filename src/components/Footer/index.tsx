import Link from 'next/link'

import { MaxWidthWrapper } from '@/components'

export default function Footer() {
	return (
		<footer className='relative h-20 border-t border-gray-200 bg-white dark:border-gray-400 dark:bg-black'>
			<MaxWidthWrapper className='mt-4 text-center lg:mt-0'>
				<div className='flex h-full flex-col items-center justify-center lg:flex-row lg:justify-between'>
					<div className='pb-4 text-center lg:pb-0 lg:text-left'>
						<p className='text-sm text-muted-foreground dark:text-gray-100'>
							&copy; {new Date().getFullYear()} Todos los derechos reservados.
						</p>
					</div>

					<div className='flex items-center justify-center'>
						<div className='flex space-x-8'>
							<Link
								href='/terminos-condiciones'
								className='text-sm text-muted-foreground hover:text-gray-600 dark:hover:text-gray-100'
							>
								Términos y condiciones
							</Link>
							<Link
								href='/'
								className='text-sm text-muted-foreground hover:text-gray-600 dark:hover:text-gray-100'
							>
								Política de Privacidad
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	)
}
