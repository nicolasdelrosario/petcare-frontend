'use client'

// React
import { useState } from 'react'

// Hooks
import { useDeleteAppointment } from '@/hooks/appointments/useDeleteAppointment'

// Interfaces
import { Appointment as AppointmentI } from '@/interfaces/Appointment'

// Components
import { AppointmentUpdate, Appointment } from '../index'
import { Delete } from '@/app/dashboard/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

interface AppointmentDetailsProps {
	appointment: AppointmentI
}

export default function AppointmentDetails({
	appointment,
}: AppointmentDetailsProps) {
	const [isEditing, setIsEditing] = useState(false)

	const deleteAppointmentMutation = useDeleteAppointment(appointment.id)

	const handleDelete = () => deleteAppointmentMutation.mutate()

	return (
		<div className='pt-2'>
			{isEditing ? (
				<AppointmentUpdate
					appointment={appointment}
					setIsEditing={setIsEditing}
				/>
			) : (
				<>
					<Appointment appointment={appointment} />
					<div className='flex flex-col gap-y-2 pt-6 sm:flex-row sm:justify-end sm:space-x-2'>
						<Button variant='outline' onClick={() => setIsEditing(true)}>
							Editar
						</Button>
						<Delete onConfirm={handleDelete} />
					</div>
				</>
			)}
		</div>
	)
}
