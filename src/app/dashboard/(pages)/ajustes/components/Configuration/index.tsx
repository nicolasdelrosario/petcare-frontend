// Shadcn Components
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	Button,
	Switch,
	Label,
} from '@/components/shadcn'

export default function index() {
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
						<Switch />
					</div>
				</CardContent>
			</Card>
			<Card className='mt-8'>
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
			</Card>
		</>
	)
}
