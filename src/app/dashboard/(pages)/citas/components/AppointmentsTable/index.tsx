// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Format Date
import { format } from 'date-fns'

// Components
import { MaxWidthWrapper } from '@/components'
import AppointmentDetailsDialog from '../AppointmentDetailsDialog'

// Shadcn Components
import {
	Table,
	TableBody,
	TableHeader,
	TableHead,
	TableRow,
	TableCell,
} from '@/components/shadcn'

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
					{appointments.map((appointment: Appointment) => {
						const { id, date, pet } = appointment
						const { name: petName, owner } = pet
						const { name: ownerName } = owner

						return (
							<TableRow key={id}>
								<TableCell>{ownerName}</TableCell>
								<TableCell>{petName}</TableCell>
								<TableCell>{format(new Date(date), 'dd MMMM yyyy')}</TableCell>
								<TableCell>{format(new Date(date), 'HH:mm')}</TableCell>
								<TableCell>
									<AppointmentDetailsDialog appointment={appointment} />
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</MaxWidthWrapper>
	)
}
