import {
	Button,
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/shadcn'

interface ActionButtonsProps {
	isEditing: boolean
	handleSave: () => void
	setIsEditing: (value: boolean) => void
	handleDelete: () => void
}

const ActionButtons = ({
	isEditing,
	handleSave,
	setIsEditing,
	handleDelete,
}: ActionButtonsProps) => (
	<div className='flex justify-end space-x-2 pt-6'>
		{isEditing ? (
			<>
				<Button variant='outline' onClick={() => setIsEditing(false)}>
					Cancelar
				</Button>
				<Button onClick={handleSave}>Guardar</Button>
			</>
		) : (
			<>
				<Button variant='outline' onClick={() => setIsEditing(true)}>
					Editar
				</Button>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant='destructive'>Eliminar</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
								Estás seguro?
							</AlertDialogTitle>
						</AlertDialogHeader>
						<AlertDialogFooter className='pt-2'>
							<AlertDialogCancel>Cancelar</AlertDialogCancel>
							<AlertDialogAction onClick={handleDelete}>
								Eliminar
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</>
		)}
	</div>
)

export default ActionButtons
