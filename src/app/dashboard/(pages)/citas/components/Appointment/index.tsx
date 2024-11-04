// Interfaces
import { Appointment as IAppointment } from '@/interfaces/Appointment'

// Format Date
import { format } from 'date-fns'

// Lucide Icons
import { Calendar, Clock, PawPrint, User, NotepadText } from 'lucide-react'

interface AppointmentProps {
	appointment: IAppointment
}

export default function Appointment({ appointment }: AppointmentProps) {
	const {
		updatedAt,
		pet: { name: petName, owner: { name: ownerName } = {} } = {},
		date,
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
			label: format(new Date(date), 'dd MMMM yyyy'),
		},
		{
			icon: Clock,
			label: format(new Date(date), 'HH:mm'),
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
				Última actualización: {format(new Date(updatedAt), 'dd MMM yyyy HH:mm')}
			</div>
		</div>
	)
}
