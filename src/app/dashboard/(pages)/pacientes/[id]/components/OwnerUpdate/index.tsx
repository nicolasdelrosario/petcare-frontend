// Interfaces
import { Owner } from '@/interfaces/Owner'

// Shadcn Components
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Button,
	Input,
	Label,
	DialogFooter,
} from '@/components/shadcn'

// Icons From Lucide React
import { UserPen } from 'lucide-react'

interface OwnerEditProps {
	isEditing: boolean
	setIsEditing: (value: boolean) => void
	owner: Owner
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleUpdate: () => void
}

export default function OwnerEdit({
	owner,
	handleInputChange,
	handleUpdate,
	isEditing,
	setIsEditing,
}: OwnerEditProps) {
	const { dni, email, phone, address, name } = owner

	return (
		<Dialog open={isEditing} onOpenChange={setIsEditing}>
			<DialogTrigger asChild>
				<Button
					variant='outline'
					className='w-full'
					onClick={() => setIsEditing(true)}
				>
					<UserPen className='mr-2 size-4' />
					Editar
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Editar
					</DialogTitle>
				</DialogHeader>

				{/* Inputs */}
				<div className='space-y-4'>
					{/* Nombre */}
					<div className='flex flex-col gap-y-1'>
						<Label
							htmlFor='name'
							className='text-pretty text-sm font-medium text-gray-700'
						>
							Nombre
						</Label>
						<Input
							id='name'
							name='name'
							value={name}
							onChange={handleInputChange}
						/>
					</div>

					{/* Correo Electrónico */}
					<div className='flex flex-col gap-y-1'>
						<Label
							htmlFor='email'
							className='text-pretty text-sm font-medium text-gray-700'
						>
							Correo Electrónico
						</Label>
						<Input
							id='email'
							name='email'
							value={email || ''}
							onChange={handleInputChange}
						/>
					</div>

					{/* Teléfono */}
					<div className='flex flex-col gap-y-1'>
						<Label
							htmlFor='phone'
							className='text-pretty text-sm font-medium text-gray-700'
						>
							Teléfono
						</Label>
						<Input
							id='phone'
							name='phone'
							value={phone || ''}
							onChange={handleInputChange}
						/>
					</div>

					{/* Dirección */}
					<div className='flex flex-col gap-y-1'>
						<Label
							htmlFor='address'
							className='text-pretty text-sm font-medium text-gray-700'
						>
							Dirección
						</Label>
						<Input
							id='address'
							name='address'
							value={address || ''}
							onChange={handleInputChange}
						/>
					</div>

					{/* DNI */}
					<div className='flex flex-col gap-y-1'>
						<Label
							htmlFor='dni'
							className='text-pretty text-sm font-medium text-gray-700'
						>
							DNI
						</Label>
						<Input
							id='dni'
							name='dni'
							value={dni || ''}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				{/* Footer */}
				<DialogFooter>
					<Button variant='outline' onClick={() => setIsEditing(false)}>
						Cancelar
					</Button>
					<Button variant='default' onClick={handleUpdate}>
						Guardar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
