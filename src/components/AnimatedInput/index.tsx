// Components
import { Input, Label } from '@/components/shadcn'

// Utils
import { cn } from '@/lib/utils'

interface AnimatedInputProps {
	className?: string
	defaultValue?: string
	error?: string
	icon?: React.ReactNode
	id: string
	label: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	value?: string
}

export default function AnimatedInput({
	className,
	defaultValue,
	error,
	icon,
	id,
	label,
	onChange,
	placeholder = '',
	type = 'text',
	value,
}: AnimatedInputProps) {
	return (
		<div className='group relative my-4'>
			<Label
				htmlFor={id}
				className='origin-start absolute top-1/2 z-10 block -translate-y-1/2 cursor-text px-1 text-xs text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+div>input:not(:placeholder-shown)]:pointer-events-none has-[+div>input:not(:placeholder-shown)]:top-0 has-[+div>input:not(:placeholder-shown)]:-translate-y-1/2 has-[+div>input:not(:placeholder-shown)]:cursor-default has-[+div>input:not(:placeholder-shown)]:text-xs has-[+div>input:not(:placeholder-shown)]:font-medium has-[+div>input:not(:placeholder-shown)]:text-foreground'
			>
				<span className='inline-flex bg-transparent px-2 text-gray-800 dark:text-muted-foreground'>
					{label}
				</span>
			</Label>

			<div className='relative flex items-center'>
				<Input
					id={id}
					type={type}
					name={id}
					value={value}
					defaultValue={defaultValue}
					placeholder={placeholder}
					className={cn(
						'text-pretty pr-10 text-base dark:border-zinc-700 dark:focus:border-zinc-100',
						icon && 'pr-10',
						className
					)}
					onChange={onChange}
				/>
				{icon && (
					<div className='absolute right-3 flex size-4 items-center text-gray-800 dark:text-muted-foreground'>
						{icon}
					</div>
				)}
			</div>
			<div className='absolute leading-none'>
				{error && (
					<span className='pl-3 text-[.80rem] text-red-400'>{error}</span>
				)}
			</div>
		</div>
	)
}
