import { Input, Label } from '@/components/shadcn'

interface EditableFieldsProps {
	editedAppointment: { date: string; reason: string | undefined }
	time: string
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function EditableFields({
	editedAppointment,
	time,
	handleInputChange,
}: EditableFieldsProps) {
	return (
		<div className='space-y-4'>
			<div className='flex flex-col gap-y-1'>
				<Label
					htmlFor='date'
					className='text-pretty text-sm font-medium text-gray-700'
				>
					Fecha
				</Label>
				<Input
					id='date'
					name='date'
					type='date'
					value={editedAppointment.date}
					onChange={handleInputChange}
					className='hover:cursor-pointer'
				/>
			</div>

			<div className='flex flex-col gap-y-1'>
				<Label
					htmlFor='time'
					className='text-pretty text-sm font-medium text-gray-700'
				>
					Hora
				</Label>
				<Input
					id='time'
					name='time'
					type='time'
					value={time}
					onChange={handleInputChange}
					className='hover:cursor-pointer'
				/>
			</div>

			<div className='flex flex-col gap-y-1'>
				<Label
					htmlFor='reason'
					className='text-pretty text-sm font-medium text-gray-700'
				>
					Notas
				</Label>
				<Input
					id='reason'
					name='reason'
					value={editedAppointment.reason || ''}
					onChange={handleInputChange}
					placeholder='Ingresa las notas de la cita'
				/>
			</div>
		</div>
	)
}
