// components/OwnersGrid.tsx
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
	buttonVariants,
} from '@/components/shadcn'
import { MaxWidthWrapper } from '@/components'
import { Phone, IdCard, PawPrint, User } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Owner } from '@/interfaces/Owner'

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
