// Shadcn Components
import {
	Label,
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
} from '@/components/shadcn'

interface AnimatedSelectProps {
	id: string
	label: string
	value: string | undefined
	options: { id: string | number; name: string }[]
	placeholder?: string
	onChange: (value: string) => void
}

export default function AnimatedSelect({
	id,
	label,
	value,
	options,
	placeholder = '',
	onChange,
}: AnimatedSelectProps) {
	const selectedOption = options.find(option => option.id.toString() === value)

	return (
		<div className='group relative my-4'>
			<Label
				htmlFor={id}
				className={`absolute left-3 top-1/2 -translate-y-1/2 transform cursor-text px-1 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground ${value ? 'pointer-events-none top-0 -translate-y-1/2 text-xs font-medium text-foreground' : ''}`}
			>
				<span
					className={`bg-background px-1 ${value ? 'text-xs font-medium' : ''}`}
				>
					{label}
				</span>
			</Label>

			<Select onValueChange={onChange}>
				<SelectTrigger id={id} className='w-full'>
					{value ? (
						<span>{selectedOption?.name}</span>
					) : (
						<span className='text-muted-foreground'>{placeholder}</span>
					)}
				</SelectTrigger>
				<SelectContent>
					{options.map(option => (
						<SelectItem key={option.id} value={`${option.id}`}>
							{option.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
