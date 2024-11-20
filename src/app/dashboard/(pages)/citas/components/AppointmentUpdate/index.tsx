/* eslint-disable @typescript-eslint/no-unused-vars */
// Interfaces
import { Appointment } from '@/interfaces/Appointment'

// Hooks
import { useUpdateAppointment } from '@/hooks/appointments/useUpdateAppointment'
import { useForm } from '@/hooks/useForm'
import { useState } from 'react'

// Components
import { AnimatedInput } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

//Schemas
import { updateAppointmentSchema } from '../AppointmentSchema/updateAppointmentSchema'

//Utils
import { validateWithSchema } from '@/util/validateSchemas'

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
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { data: validateData, errors } = validateWithSchema(
			updateAppointmentSchema,
			{
				...editedAppointment,
				date: new Date(editedAppointment.date + 'T00:00:00'),
			}
		)

		if (errors) {
			setErrors(errors)
			return
		}

		updateAppointmentMutation.mutate({
			id: appointment.id,
			changes: validateData,
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
				error={errors.date || ''}
			/>

			<AnimatedInput
				id='time'
				type='time'
				label='Hora'
				defaultValue={time}
				onChange={handleChange}
				error={errors.time || ''}
			/>

			<AnimatedInput
				id='reason'
				label='Motivo'
				onChange={handleChange}
				defaultValue={reason}
				error={errors.reason || ''}
			/>

			<div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
				<Button type='submit'>Guardar</Button>
			</div>
		</form>
	)
}
