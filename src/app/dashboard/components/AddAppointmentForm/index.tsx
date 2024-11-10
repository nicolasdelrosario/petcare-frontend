'use client'

// Hooks
import { useForm } from '@/hooks/useForm'
import { usePets } from '@/hooks/pets/usePets'
import { useCreateAppointment } from '@/hooks/appointments/useCreateAppointment'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'
import { Pet } from '@/interfaces/Pet'

// Components
import { AnimatedInput, AnimatedSelect } from '@/components'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { Clock, NotepadText } from 'lucide-react'

interface AddAppointmentFormProps {
	onSuccess: () => void
}

type AppointmentFormData = Partial<Appointment> & {
	petId: number
	userId: number
}

export default function AddAppointmentForm({
	onSuccess,
}: AddAppointmentFormProps) {
	const pets = usePets()
	const createAppointment = useCreateAppointment()

	const {
		formData: appointmentData,
		handleChange,
		updateField,
	} = useForm<Partial<AppointmentFormData>>({
		userId: 1,
	} as Partial<AppointmentFormData>)

	const handleSelectPet = (petId: string) => {
		updateField('petId', Number(petId))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createAppointment.mutate(appointmentData)
		onSuccess()
	}

	return (
		<form onSubmit={handleSubmit}>
			<AnimatedSelect
				id='pet'
				label='Mascota'
				options={
					pets.data?.map((pet: Pet) => ({
						id: pet.id,
						name: pet.name,
					})) ?? []
				}
				value={appointmentData.petId?.toString()}
				onChange={handleSelectPet}
			/>

			<div className='grid grid-cols-2 gap-4'>
				<AnimatedInput
					key='date'
					id='date'
					label='Fecha'
					type='date'
					onChange={handleChange}
				/>
				<AnimatedInput
					key='time'
					id='time'
					label='Hora'
					type='time'
					onChange={handleChange}
					icon={<Clock />}
				/>
			</div>

			<AnimatedInput
				key='reason'
				id='reason'
				label='Motivo'
				type='text'
				onChange={handleChange}
				icon={<NotepadText />}
			/>

			<div className='mt-8 flex justify-end'>
				<Button type='submit'>Agregar Propietario</Button>
			</div>
		</form>
	)
}
