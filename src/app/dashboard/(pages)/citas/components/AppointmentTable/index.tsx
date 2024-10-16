// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Format Date
import { format } from 'date-fns'

// Components
import { AppointmentDetailsDialog } from '../index'

// Shadcn Components
import { TableRow, TableCell } from '@/components/shadcn'

interface AppointmentTableRow {
	appointment: Appointment
}

export default function AppointmentTableRow({
	appointment,
}: AppointmentTableRow) {
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
}
