'use client'

// Auth
import { useSession } from 'next-auth/react'

// Hooks
import { useUserById } from '@/hooks/users/useUserById'

// Components
import { MaxWidthWrapper } from '@/components'
import { Configuration, UserDetails, UsersDetails } from './components'

// Shadcn Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn'

// Lucide Icons
import { Settings, User, Users } from 'lucide-react'

export default function Seetings() {
	const { data: session } = useSession()
	const { data: user } = useUserById(session?.user.userId as number)

	return (
		<MaxWidthWrapper className='mt-8 space-y-4'>
			<h2 className='text-3xl font-bold tracking-tight'>Ajustes</h2>
			<p className='text-muted-foreground'>
				Maneja tus preferencias y ajustes de la plataforma.
			</p>

			<Tabs defaultValue='general' className='space-y-4'>
				<TabsList>
					<TabsTrigger value='general' className='flex items-center gap-2'>
						<Settings className='size-4' />
						Configuración
					</TabsTrigger>
					<TabsTrigger value='account' className='flex items-center gap-2'>
						<User className='size-4' />
						Cuenta
					</TabsTrigger>
					<TabsTrigger value='team' className='flex items-center gap-2'>
						<Users className='size-4' />
						Equipo
					</TabsTrigger>
				</TabsList>

				<TabsContent value='general' className='space-y-4'>
					<Configuration />
				</TabsContent>
				<TabsContent value='account'>
					{user && <UserDetails user={user} />}
				</TabsContent>
				<TabsContent value='team'>
					{user && <UsersDetails workspaceId={user.workspace.id} />}
				</TabsContent>
			</Tabs>
		</MaxWidthWrapper>
	)
}
