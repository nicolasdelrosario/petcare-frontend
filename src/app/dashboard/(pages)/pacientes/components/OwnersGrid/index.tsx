// Next
import Link from 'next/link'

// Util
import { cn } from '@/lib/utils'

// Interfaces
import { Owner } from '@/interfaces/Owner'

// Components
import { MaxWidthWrapper } from '@/components'

// Shadcn Components
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
	buttonVariants,
} from '@/components/shadcn'

// Lucide Icons
import { Phone, IdCard, PawPrint, User } from 'lucide-react'

interface OwnersGridProps {
	owners: Owner[]
}

export default function OwnersGrid({ owners }: OwnersGridProps) {
	return (
		<section>
			<MaxWidthWrapper>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{owners.map(owner => (
						<Card key={owner.id}>
							<CardHeader className='border-b p-4'>
								<CardTitle className='truncate text-sm font-semibold'>
									{owner.name}
								</CardTitle>
							</CardHeader>
							<CardContent className='p-4'>
								<div className='flex items-center text-sm text-muted-foreground'>
									<Phone className='mr-2 h-4 w-4' />
									{owner?.phone}
								</div>
								<div className='flex items-center text-sm text-muted-foreground'>
									<IdCard className='mr-2 h-4 w-4' />
									{owner?.dni}
								</div>
								<div className='flex items-center text-sm text-muted-foreground'>
									<PawPrint className='mr-2 h-4 w-4' />
									{owner.pets && owner?.pets.length} pets
								</div>
							</CardContent>
							<CardFooter className='className="bg-muted px-4 pb-4'>
								<Link
									href={`/dashboard/pacientes/${owner.id}`}
									className={cn(
										buttonVariants({ variant: 'outline' }),
										'w-full'
									)}
								>
									<User className='mr-2 size-4' />
									Ver Detalles
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</MaxWidthWrapper>
		</section>
	)
}
