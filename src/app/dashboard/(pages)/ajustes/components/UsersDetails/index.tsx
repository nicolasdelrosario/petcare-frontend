'use client'

// React
import { useState } from 'react'

// Hooks
import { useUsers } from '@/hooks/users/useUsers'

// Shadcn Components
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Badge,
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/shadcn'

// Icons from Lucide
import { Settings, Users } from 'lucide-react'

// Components
import AddUserForm from '../AddUserForm'

export default function UsersDetails({ workspaceId }: { workspaceId: number }) {
	const { data: users } = useUsers()
	const [dialogOpen, setDialogOpen] = useState(false)

	const handleSuccess = () => setDialogOpen(false)

	return (
		<Card className='mt-8'>
			<CardHeader>
				<CardTitle>Miembros</CardTitle>
				<CardDescription>Maneja a los miembros de tu equipo.</CardDescription>
			</CardHeader>

			<CardContent>
				<div className='flex flex-col gap-4'>
					{users?.map(user => (
						<div key={user.id} className='flex items-center justify-between'>
							<div className='flex flex-col'>
								<p className='font-medium'>{user.name}</p>
								<p className='text-sm text-muted-foreground'>{user.email}</p>
							</div>
							<div className='flex items-center space-x-2'>
								<Badge className='capitalize'>{user.role}</Badge>
								<Button variant='ghost' size='icon'>
									<Settings className='size-4' />
								</Button>
							</div>
						</div>
					))}

					<div className='mt-8 flex justify-end'>
						<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
							<DialogTrigger asChild>
								<Button>
									<Users className='mr-2 size-4' />
									Invitar Miembro
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Añadir Nuevo Miembro</DialogTitle>
								</DialogHeader>
								<AddUserForm
									workspaceId={workspaceId}
									onSuccess={handleSuccess}
								/>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
