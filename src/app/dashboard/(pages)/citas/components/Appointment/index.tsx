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
		pet: { name: petName, owner: { name: ownerName } = {} } = {},
		date,
		reason,
	} = appointment

	return (
		<>
			<div className='flex items-center text-pretty pb-2 text-start text-muted-foreground'>
				<User className='mr-2 size-4 min-w-4' />
				{ownerName}
			</div>
			<div className='flex items-center text-pretty pb-2 text-start text-muted-foreground'>
				<PawPrint className='mr-2 size-4 min-w-4' />
				{petName}
			</div>
			<div className='flex items-center text-pretty pb-2 text-start text-muted-foreground'>
				<Calendar className='mr-2 size-4 min-w-4' />
				{format(new Date(date), 'dd MMMM yyyy')}
			</div>
			<div className='flex items-center text-pretty pb-2 text-start text-muted-foreground'>
				<Clock className='mr-2 size-4 min-w-4' />
				{format(new Date(date), 'HH:mm')}
			</div>
			<div className='flex items-center text-pretty text-start text-muted-foreground'>
				<NotepadText className='mr-2 size-4 min-w-4' />
				{reason || 'No hay notas'}
			</div>
		</>
	)
}
