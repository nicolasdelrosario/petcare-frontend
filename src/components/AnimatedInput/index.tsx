// Components
import { Input, Label } from '@/components/shadcn'

// Utils
import { cn } from '@/lib/utils'

interface AnimatedInputProps {
	id: string
	label: string
	type?: string
	value?: string
	defaultValue?: string
	placeholder?: string
	icon?: React.ReactNode
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	error?: string
}

export default function AnimatedLabelInput({
	id,
	label,
	type = 'text',
	value,
	defaultValue,
	placeholder = '',
	icon,
	onChange,
	error,
}: AnimatedInputProps) {
	return (
		<div className='group relative my-4'>
			<Label
				htmlFor={id}
				className='origin-start absolute top-1/2 z-10 block -translate-y-1/2 cursor-text px-1 text-xs text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+div>input:not(:placeholder-shown)]:pointer-events-none has-[+div>input:not(:placeholder-shown)]:top-0 has-[+div>input:not(:placeholder-shown)]:-translate-y-1/2 has-[+div>input:not(:placeholder-shown)]:cursor-default has-[+div>input:not(:placeholder-shown)]:text-xs has-[+div>input:not(:placeholder-shown)]:font-medium has-[+div>input:not(:placeholder-shown)]:text-foreground'
			>
				<span className='inline-flex bg-background px-2'>{label}</span>
			</Label>

			<div className='relative flex items-center'>
				<Input
					id={id}
					type={type}
					name={id}
					value={value}
					defaultValue={defaultValue}
					placeholder={placeholder}
					className={cn('text-pretty pr-10 text-base', icon && 'pr-10')}
					onChange={onChange}
				/>
				{icon && (
					<div className='absolute right-3 flex size-4 items-center text-muted-foreground'>
						{icon}
					</div>
				)}
			</div>
			<div className='absolute leading-none'>
				{error && <span className='text-xxs italic text-red-500'>{error}</span>}
			</div>
		</div>
	)
}
