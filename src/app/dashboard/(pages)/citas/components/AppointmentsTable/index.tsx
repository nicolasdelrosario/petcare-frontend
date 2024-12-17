// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Format Date
import { formatDate } from 'date-fns'

// Components
import { MaxWidthWrapper } from '@/components'
import { AppointmentDetailsDialog } from '../index'

// Shadcn Components
import {
	Table,
	TableBody,
	TableHeader,
	TableHead,
	TableRow,
	TableCell,
} from '@/components/shadcn'

import { Info } from 'lucide-react'

interface AppointmentsTableProps {
	appointments: Appointment[]
}

export default function AppointmentsTable({
	appointments,
}: AppointmentsTableProps) {
	return (
		<MaxWidthWrapper>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Dueño:</TableHead>
						<TableHead>Mascota:</TableHead>
						<TableHead>Fecha</TableHead>
						<TableHead>Hora</TableHead>
						<TableHead>Detalles</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{appointments.length > 0 ? (
						appointments.map(appointment => {
							if (appointment !== null && appointment.pet !== null) {
								const { id, pet, dateTime } = appointment
								const { name: petName, owner } = pet
								const { name: ownerName } = owner

								return (
									<TableRow key={id}>
										<TableCell>{ownerName || 'Nombre no disponible'}</TableCell>
										<TableCell>{petName || 'Nombre no disponible'}</TableCell>
										<TableCell>
											{dateTime
												? formatDate(dateTime, 'dd MMM yyyy')
												: 'Fecha no disponible'}
										</TableCell>
										<TableCell>
											{dateTime
												? formatDate(dateTime, 'HH:mm')
												: 'Hora no disponible'}
										</TableCell>
										<TableCell>
											<AppointmentDetailsDialog appointment={appointment} />
										</TableCell>
									</TableRow>
								)
							}
						})
					) : (
						<TableRow>
							<TableCell
								colSpan={5}
								className='py-4 text-center text-muted-foreground'
							>
								<Info className='mx-auto size-5' />
								Aún no se han agendado citas.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</MaxWidthWrapper>
	)
}
