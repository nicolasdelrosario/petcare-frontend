// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Hooks
import { useUpdateAppointment } from '@/hooks/appointments/useUpdateAppointment'
import { useForm } from '@/hooks/useForm'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Format Date
import { format, parseISO, setHours, setMinutes } from 'date-fns'

interface AppointmentUpdateProps {
	appointment: Appointment
	setIsEditing: (isEditing: boolean) => void
}

export default function AppointmentUpdate({
	appointment,
	setIsEditing,
}: AppointmentUpdateProps) {
	const { formData: editedAppointment, handleChange } = useForm({
		reason: appointment.reason,
		date: format(new Date(appointment.date), 'yyyy-MM-dd'),
		time: format(new Date(appointment.date), 'HH:mm'),
	})

	const updateAppointmentMutation = useUpdateAppointment()

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const [hours, minutes] = editedAppointment.time.split(':').map(Number)
		const combinedDateTime = setMinutes(
			setHours(parseISO(editedAppointment.date), hours),
			minutes
		)

		const updatedData = {
			reason: editedAppointment.reason,
			date: combinedDateTime,
		}

		updateAppointmentMutation.mutate({
			id: appointment.id,
			changes: updatedData,
		})

		setIsEditing(false)
	}

	const { date, time, reason } = editedAppointment

	return (
		<form onSubmit={handleUpdate} className='flex flex-col gap-4'>
			<AnimatedInput
				id='date'
				type='date'
				label='Fecha'
				defaultValue={date}
				onChange={handleChange}
			/>

			<AnimatedInput
				id='time'
				type='time'
				label='Hora'
				defaultValue={time}
				onChange={handleChange}
			/>

			<AnimatedInput
				id='reason'
				label='Motivo'
				onChange={handleChange}
				defaultValue={reason}
			/>

			<div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
				<Button type='submit'>Guardar</Button>
			</div>
		</form>
	)
}
