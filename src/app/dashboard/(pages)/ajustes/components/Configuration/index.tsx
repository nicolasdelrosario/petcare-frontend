// Shadcn Components
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	Switch,
	Label,
} from '@/components/shadcn'

//Hooks
import { useTheme } from 'next-themes'

export default function Index() {
	const { setTheme, resolvedTheme } = useTheme()

	return (
		<>
			<Card className='mt-8'>
				<CardHeader>
					<CardTitle>Apariencia</CardTitle>
					<CardDescription>
						Maneja la apariencia de la aplicación.
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<div className='flex items-center justify-between'>
						<div className='space-y-0.5'>
							<Label>Tema</Label>
							<p className='text-sm text-muted-foreground'>
								Elige tu tema preferido.
							</p>
						</div>
						<Switch
							checked={resolvedTheme === 'dark'}
							onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
							aria-label='Cambiar tema entre claro y oscuro'
						/>
					</div>
				</CardContent>
			</Card>
			{/* <Card className='mt-8'>
				<CardHeader>
					<CardTitle>Notificaciones</CardTitle>
					<CardDescription>
						Maneja cómo quieras recibir notificaciones.
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<div className='flex items-center justify-between'>
						<div className='space-y-0.5'>
							<Label>Notificaciones toast</Label>
							<p className='text-sm text-muted-foreground'>
								Recibir toast de notificaciones.
							</p>
						</div>
						<Switch />
					</div>
				</CardContent>
			</Card> */}
		</>
	)
}
