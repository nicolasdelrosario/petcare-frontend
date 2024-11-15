import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogDescription,
	Button,
} from '@/components/shadcn'

// Icons From Lucide React
import { Cat } from 'lucide-react'

// Components
import { PetDetails } from '../'

// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

interface PetDetailsDialogProps {
	pet: PetI
}

export default function PetDetailsDialog({ pet }: PetDetailsDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline' className='w-full'>
					<Cat className='mr-2 size-4' />
					Ver Detalles
				</Button>
			</DialogTrigger>
			<DialogContent aria-describedby='pet-details-description'>
				<DialogHeader>
					<DialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Detalles
					</DialogTitle>
					<DialogDescription className='sr-only' id='pet-details-description'>
						Información completa sobre la mascota.
					</DialogDescription>
				</DialogHeader>
				<PetDetails pet={pet} />
			</DialogContent>
		</Dialog>
	)
}
