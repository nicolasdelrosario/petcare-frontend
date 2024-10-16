// Stores
import { useViewModeStore } from '@/store/useViewModeStore'

// interfaces
import { Appointment } from '@/interfaces/Appointment'

// Components
import { MaxWidthWrapper } from '@/components'
import { AppointmentCard, AppointmentTable } from '../index'

// Shadcn Components
import {
	Table,
	TableBody,
	TableHeader,
	TableHead,
	TableRow,
} from '@/components/shadcn'

interface AppointmentListProps {
	appointments: Appointment[]
}

export default function AppointmentList({
	appointments,
}: AppointmentListProps) {
	const { viewMode } = useViewModeStore()

	return viewMode === 'card' ? (
		<section>
			<MaxWidthWrapper>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{appointments.map(appointment => (
						<AppointmentCard key={appointment.id} appointment={appointment} />
					))}
				</div>
			</MaxWidthWrapper>
		</section>
	) : (
		<MaxWidthWrapper>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Dueño:</TableHead>
						<TableHead>Mascota:</TableHead>
						<TableHead>Fecha</TableHead>
						<TableHead>Hora</TableHead>
						<TableHead>Detalles</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{appointments.map(appointment => (
						<AppointmentTable key={appointment.id} appointment={appointment} />
					))}
				</TableBody>
			</Table>
		</MaxWidthWrapper>
	)
}
