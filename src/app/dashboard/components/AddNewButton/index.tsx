'use client'

// React
import { useState } from 'react'

// Components
import { AddOwnerForm, AddPetForm, AddAppointmentForm } from '..'

// Shadcn Components
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/shadcn'

// Lucide Icons
import { Plus } from 'lucide-react'

export default function AddNewButton() {
	const [dialogState, setDialogState] = useState({
		owner: false,
		pet: false,
		appointment: false,
	})

	// Toggle
	const openDialog = (type: 'owner' | 'pet' | 'appointment') =>
		setDialogState({ ...dialogState, [type]: true })
	const closeDialog = (type: 'owner' | 'pet' | 'appointment') =>
		setDialogState({ ...dialogState, [type]: false })

	// Render Dialogs
	const renderDialog = (
		isOpen: boolean,
		onClose: () => void,
		title: string,
		FormComponent: JSX.Element
	) => (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						{title}
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className='sr-only'>
					{title} Formulario
				</DialogDescription>
				{FormComponent}
			</DialogContent>
		</Dialog>
	)

	// Menu Items
	const menuItems = [
		{ label: 'Añadir Cita', onClick: () => openDialog('appointment') },
		{ label: 'Añadir Propietario', onClick: () => openDialog('owner') },
		{ label: 'Añadir Mascota', onClick: () => openDialog('pet') },
	]

	return (
		<>
			<div className='fixed bottom-6 right-6'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size='icon' aria-label='Añadir Nuevo'>
							<Plus className='size-5' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						{menuItems.map(item => (
							<DropdownMenuItem
								className='cursor-pointer'
								key={item.label}
								onClick={item.onClick}
							>
								{item.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Render Appointment Dialog */}
			{renderDialog(
				dialogState.appointment,
				() => closeDialog('appointment'),
				'Añadir Cita',
				<AddAppointmentForm onSuccess={() => closeDialog('appointment')} />
			)}

			{/* Render Owner Dialog */}
			{renderDialog(
				dialogState.owner,
				() => closeDialog('owner'),
				'Añadir Propietario',
				<AddOwnerForm onSuccess={() => closeDialog('owner')} />
			)}

			{/* Render Pet Dialog */}
			{renderDialog(
				dialogState.pet,
				() => closeDialog('pet'),
				'Añadir Mascota',
				<AddPetForm onSuccess={() => closeDialog('pet')} />
			)}
		</>
	)
}
