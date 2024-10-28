// Shadcn Components
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
	Button,
	buttonVariants,
} from '@/components/shadcn'

// Lucide Icons
import { UserRoundX } from 'lucide-react'

interface OwnerDeleteProps {
	handleDelete: () => void
}

export default function OwnerDelete({ handleDelete }: OwnerDeleteProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='outline' className='w-full'>
					<UserRoundX className='mr-2 size-4' />
					Eliminar
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Estás seguro?
					</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogFooter className='pt-2'>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction
						className={buttonVariants({ variant: 'destructive' })}
						onClick={handleDelete}
					>
						Eliminar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
