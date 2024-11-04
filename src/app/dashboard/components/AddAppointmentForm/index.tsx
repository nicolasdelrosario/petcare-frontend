'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { useOwners } from '@/hooks/owners/useOwners'
import { useCreateAppointment } from '@/hooks/appointments/useCreateAppointment'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'

interface AddAppointmentFormProps {
	onSuccess: () => void
}

export default function AddAppointmentForm({
	onSuccess,
}: AddAppointmentFormProps) {
	// const { data: owners } = useOwners()
	// const createAppointment = useCreateAppointment()

	// const {
	// 	formData: appointmentData,
	// 	handleChange,
	// 	setFormData,
	// } = useForm<Partial<Appointment>>({} as Partial<Appointment>)

	// const handleSelectOwner = (ownerId: string) => {
	// 	setFormData(prev => ({ ...prev, ownerId: Number(ownerId) }))
	// }

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault()
	// 	createAppointment.mutate(appointmentData)
	// 	onSuccess()
	// }

	return <div>index</div>
}
