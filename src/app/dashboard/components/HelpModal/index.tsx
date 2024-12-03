'use client'

// Shadcn Components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	Button,
	Card,
	CardContent,
	Separator,
} from '@/components/shadcn'

import { Mail, Phone, Clock, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

interface Props {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function HelpModal({ open, onOpenChange }: Props) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='max-w-2xl'>
				<DialogHeader>
					<DialogTitle className='text-2xl'>Ayuda y Soporte</DialogTitle>
					<DialogDescription>
						Estamos aquí para ayudarte! Elige tu forma de contacto preferida
					</DialogDescription>
				</DialogHeader>

				<div className='grid gap-4 py-4'>
					<Card>
						<CardContent className='pt-6'>
							<div className='grid gap-4'>
								<div className='flex items-center gap-3'>
									<Mail className='h-5 w-5 text-primary' />
									<div>
										<p className='font-medium'>Correo</p>
										<p className='text-sm text-muted-foreground'>
											<Link
												href='mailto:delrosariolozanonicolas@gmail.com'
												className='hover:underline'
											>
												delrosariolozanonicolas@gmail.com
											</Link>
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<Phone className='h-5 w-5 text-primary' />
									<div>
										<p className='font-medium'>Teléfono</p>
										<p className='text-sm text-muted-foreground'>
											<Link href='tel:913-621-524' className='hover:underline'>
												913-621-524
											</Link>
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<Clock className='h-5 w-5 text-primary' />
									<div>
										<p className='font-medium'>Horarios de Atención</p>
										<p className='text-sm text-muted-foreground'>
											Lunes - Viernes: 9:00 AM - 6:00 PM
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Separator />

					<div>
						<h3 className='mb-4 text-lg font-medium'>Contáctanos</h3>
						<div className='flex gap-4'>
							<Button variant='outline' size='icon' asChild>
								<Link
									href='https://github.com/nicolasdelrosario'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Github className='size-4' />
								</Link>
							</Button>
							<Button variant='outline' size='icon' asChild>
								<Link
									href='https://linkedin.com/in/nicolasdelrosario'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Linkedin className='size-4' />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
