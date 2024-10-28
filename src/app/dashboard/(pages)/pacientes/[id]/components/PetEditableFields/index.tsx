// Interfaces
import { Pet as PetI } from '@/interfaces/Pet'

// Shadcn Components
import { Input, Label } from '@/components/shadcn'

interface PetEditableFieldsProps {
	pet: Partial<PetI>
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PetEditableFields({
	pet,
	handleInputChange,
}: PetEditableFieldsProps) {
	const { id, name, specie, weight, age, color, characteristics } = pet

	return (
		<div className='space-y-4'>
			<div key={id} className='grid grid-cols-2 gap-4 text-muted-foreground'>
				<div className='flex flex-col gap-y-1'>
					<Label htmlFor='name' className='text-sm font-medium text-gray-700'>
						Nombre
					</Label>
					<Input
						id='name'
						name='name'
						value={name || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div className='flex flex-col gap-y-1'>
					<Label htmlFor='specie' className='text-sm font-medium text-gray-700'>
						Especie
					</Label>
					<Input
						id='specie'
						name='specie'
						value={specie || ''}
						onChange={handleInputChange}
					/>
				</div>
				<div className='flex flex-col gap-y-1'>
					<Label htmlFor='weight' className='text-sm font-medium text-gray-700'>
						Peso
					</Label>
					<Input
						id='weight'
						name='weight'
						value={weight || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div className='flex flex-col gap-y-1'>
					<Label htmlFor='age' className='text-sm font-medium text-gray-700'>
						Edad
					</Label>
					<Input
						id='age'
						name='age'
						value={age || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div className='flex flex-col gap-y-1'>
					<Label htmlFor='color' className='text-sm font-medium text-gray-700'>
						Color
					</Label>
					<Input
						id='color'
						name='color'
						value={color || ''}
						onChange={handleInputChange}
					/>
				</div>

				<div className='col-span-2 flex flex-col gap-y-1'>
					<Label
						htmlFor='characteristics'
						className='text-sm font-medium text-gray-700'
					>
						Características
					</Label>
					<Input
						id='characteristics'
						name='characteristics'
						value={characteristics || ''}
						onChange={handleInputChange}
					/>
				</div>
			</div>
		</div>
	)
}
