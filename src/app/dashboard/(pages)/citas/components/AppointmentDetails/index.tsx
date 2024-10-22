'use client'

// React
import { useState } from 'react'

// Zustand
import { useAppointmentStore } from '@/store/useAppointmentStore'

// Hooks
import { useToast } from '@/hooks/useToast'

// Interfaces
import { Appointment as AppointmentI } from '@/interfaces/Appointment'

// Format Date
import { format, parseISO, setHours, setMinutes } from 'date-fns'

// Components
import { AppointmentEditableFields, Appointment } from '../index'
import { ActionButtons } from '@/app/dashboard/components'

interface AppointmentDetailsProps {
	appointment: AppointmentI
}

export default function AppointmentDetails({
	appointment,
}: AppointmentDetailsProps) {
	const { toast } = useToast()
	const { updateAppointment, removeAppointment } = useAppointmentStore()
	const [isEditing, setIsEditing] = useState(false)
	const [time, setTime] = useState(format(new Date(appointment.date), 'HH:mm'))
	const [editedAppointment, setEditedAppointment] = useState({
		reason: appointment.reason,
		date: format(new Date(appointment.date), 'yyyy-MM-dd'),
	})

	const updateEditedAppointment = (name: string, value: string) => {
		if (name === 'time') {
			setTime(value)
		} else {
			setEditedAppointment(prev => ({ ...prev, [name]: value }))
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		updateEditedAppointment(name, value)
	}

	const handleSave = async () => {
		if (!editedAppointment.reason || !time) {
			return toast({
				title: 'Error',
				description: 'Todos los campos son requeridos.',
			})
		}

		const combinedDateTime = setMinutes(
			setHours(parseISO(editedAppointment.date), parseInt(time.split(':')[0])),
			parseInt(time.split(':')[1])
		)

		const updatedData = {
			reason: editedAppointment.reason,
			date: combinedDateTime,
		}

		const result = await updateAppointment(appointment.id, updatedData)
		toast({
			title: result.success ? 'Éxito' : 'Error',
			description: result.message,
		})
		setIsEditing(false)
	}

	const handleDelete = async () => {
		const result = await removeAppointment(appointment.id)
		toast({
			title: result.success ? 'Éxito' : 'Error',
			description: result.message,
		})
	}

	return (
		<div className='pt-2'>
			{isEditing ? (
				<AppointmentEditableFields
					editedAppointment={editedAppointment}
					time={time}
					handleInputChange={handleInputChange}
				/>
			) : (
				<Appointment appointment={appointment} />
			)}
			<ActionButtons
				isEditing={isEditing}
				handleSave={handleSave}
				setIsEditing={setIsEditing}
				handleDelete={handleDelete}
			/>
		</div>
	)
}
