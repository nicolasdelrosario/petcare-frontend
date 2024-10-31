// Components
import { MaxWidthWrapper } from '@/components'

// Lucide Icons
import { DataTable } from './data-table'
import { columns } from './columns'
import useOwner from '@/hooks/useOwner'

export default function OwnersTable() {
	const { owners } = useOwner()
	return (
		<MaxWidthWrapper>
			<DataTable columns={columns} data={owners} />
		</MaxWidthWrapper>
	)
}
