// Interfaces
import { Pet } from '@/interfaces/Pet'

// Icons
import {
	PawPrint,
	Cat,
	Squirrel,
	Weight,
	Hourglass,
	Rainbow,
} from 'lucide-react'

export const generatePetDetails = (pet: Pet) => [
	{ icon: PawPrint, value: pet.name, label: 'Nombre' },
	{
		icon: Cat,
		value: pet.species || 'Especie no especificada.',
		label: 'Especie',
	},
	{ icon: Squirrel, value: pet.sex ? 'Macho' : 'Hembra', label: 'Sexo' },
	{
		icon: Weight,
		value: pet.weight ? `${pet.weight} kg` : 'Peso no especificado.',
		label: 'Peso',
	},
	{ icon: Hourglass, value: pet.age || 'Edad no especificada.', label: 'Edad' },
	{
		icon: Rainbow,
		value: pet.color || 'Color no especificado.',
		label: 'Color',
	},
]
