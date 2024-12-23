// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Components
import { AppointmentDetails } from '../index'

// Shadcn Components
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogDescription,
	Button,
} from '@/components/shadcn'

// Icons From Lucide React
import { Stethoscope } from 'lucide-react'

interface AppointmentDetailsDialogProps {
	appointment: Appointment
}

export default function AppointmentDetailsDialog({
	appointment,
}: AppointmentDetailsDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline' className='w-full'>
					<Stethoscope className='mr-2 size-4' />
					Ver Detalles
				</Button>
			</DialogTrigger>
			<DialogContent aria-describedby='appointment-details-description'>
				<DialogHeader>
					<DialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Detalles
					</DialogTitle>
					<DialogDescription
						className='sr-only'
						id='appointment-details-description'
					>
						Información completa sobre la cita.
					</DialogDescription>
					<AppointmentDetails appointment={appointment} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
