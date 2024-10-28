// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Components
import { PetDetails } from '../'

// Shadcn Components
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Button,
} from '@/components/shadcn'

// Icons From Lucide React
import { Cat } from 'lucide-react'

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
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='border-b bg-background pb-2 text-lg font-semibold'>
						Detalles
					</DialogTitle>
				</DialogHeader>
				<PetDetails pet={pet} />
			</DialogContent>
		</Dialog>
	)
}
