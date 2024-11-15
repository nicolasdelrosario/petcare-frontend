// Interfaces
import { Appointment as IAppointment } from '@/interfaces/Appointment'

// Format Date
import { formatDate } from 'date-fns'

// Lucide Icons
import { Calendar, PawPrint, User, NotepadText, Clock } from 'lucide-react'

interface AppointmentProps {
	appointment: IAppointment
}

export default function Appointment({ appointment }: AppointmentProps) {
	const {
		updatedAt,
		pet: { name: petName, owner: { name: ownerName } = {} } = {},
		dateTime,
		reason,
	} = appointment

	const appointmentDetails = [
		{
			icon: User,
			label: ownerName,
		},
		{
			icon: PawPrint,
			label: petName,
		},
		{
			icon: Calendar,
			label: dateTime && formatDate(dateTime, 'dd MMM yyyy'),
		},
		{
			icon: Clock,
			label: dateTime && formatDate(dateTime, 'HH:mm'),
		},
		{
			icon: NotepadText,
			label: reason || 'No hay notas',
		},
	]

	return (
		<div className='space-y-3'>
			<div className='grid gap-3.5 text-muted-foreground'>
				{appointmentDetails.map(({ icon: Icon, label }, index) => (
					<div key={index} className='flex items-center'>
						{Icon && <Icon className='mr-2 h-4 w-4' />}
						{label}
					</div>
				))}
			</div>
			<div className='flex items-center pt-2 text-sm text-muted-foreground'>
				Última actualización: {formatDate(updatedAt, 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
