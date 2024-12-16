// Next
import Link from 'next/link'

// Utils
import { cn } from '@/lib/utils'

// Interfaces
import { Owner } from '@/interfaces/Owner'

// Components
import { MaxWidthWrapper } from '@/components'

// Shadcn Components
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	buttonVariants,
} from '@/components/shadcn'

// Lucide Icons
import { User } from 'lucide-react'

interface OwnersTableProps {
	owners: Owner[]
}

export default function OwnersTable({ owners }: OwnersTableProps) {
	return (
		<MaxWidthWrapper>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Nombre</TableHead>
						<TableHead>DNI</TableHead>
						<TableHead>Teléfono</TableHead>
						{/* <TableHead>Mascotas</TableHead> */}
						<TableHead>Correo</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{owners.map(owner => (
						<TableRow key={owner.id}>
							<TableCell>{owner.name}</TableCell>
							<TableCell>
								{owner?.dni ? owner?.dni : 'DNI no especificado.'}
							</TableCell>
							<TableCell>
								{owner?.phone ? owner?.phone : 'Teléfono no especificado.'}
							</TableCell>
							{/* <TableCell>{owner.pets && owner?.pets.length}</TableCell> */}
							<TableCell>
								{owner?.email ? owner?.email : 'Correo no especificado.'}
							</TableCell>
							<TableCell>
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
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</MaxWidthWrapper>
	)
}
