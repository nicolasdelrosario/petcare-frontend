/* eslint-disable @typescript-eslint/no-unused-vars */
// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Hooks
import { useUpdateAppointment } from '@/hooks/appointments/useUpdateAppointment'
import { useForm } from '@/hooks/useForm'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

interface AppointmentUpdateProps {
	appointment: Appointment
	setIsEditing: (isEditing: boolean) => void
}

export default function AppointmentUpdate({
	appointment,
	setIsEditing,
}: AppointmentUpdateProps) {
	const { date, time, reason } = appointment
	const { formData: editedAppointment, handleChange } = useForm(appointment)
	const updateAppointmentMutation = useUpdateAppointment()

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const {
			id,
			createdAt,
			updatedAt,
			deletedAt,
			user,
			pet,
			dateTime,
			...changes
		} = editedAppointment

		updateAppointmentMutation.mutate({
			id: appointment.id,
			changes,
		})

		setIsEditing(false)
	}

	return (
		<form onSubmit={handleUpdate} className='flex flex-col gap-4'>
			<AnimatedInput
				id='date'
				type='date'
				label='Fecha'
				// @ts-expect-error: The defaultValue may not match the expected string type
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
