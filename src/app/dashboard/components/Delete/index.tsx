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
	AlertDialogDescription,
} from '@/components/shadcn'

interface DeleteProps {
	onConfirm: () => void
	icon?: React.ReactNode
	btnStyle?: string
}

export default function Delete({ onConfirm, btnStyle, icon }: DeleteProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='destructive' className={btnStyle}>
					{icon && <span className='mr-2'>{icon}</span>}
					Eliminar
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Estás seguro?
					</AlertDialogTitle>
					<AlertDialogDescription className='sr-only'>
						Esta acción no se puede deshacer. Esto eliminará permanentemente el
						elemento.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className='pt-2'>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>Eliminar</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
