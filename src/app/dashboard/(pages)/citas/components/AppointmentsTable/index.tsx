// Components
import { MaxWidthWrapper } from '@/components'
import { DataTable } from './data-table'
import { columns } from './columns'
import useAppointment from '@/hooks/useAppointment'

export default function AppointmentsTable() {
	const { appointments } = useAppointment()
	return (
		<MaxWidthWrapper>
			<DataTable columns={columns} data={appointments}></DataTable>
		</MaxWidthWrapper>
	)
}
