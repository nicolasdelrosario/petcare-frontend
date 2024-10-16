// Stores
import { useViewModeStore } from '@/store/useViewModeStore'

// Shadcn Components
import { Button } from '@/components/shadcn'

// Lucide Icons
import { LayoutGrid, List } from 'lucide-react'

export default function ViewToggle() {
	const { viewMode, setViewMode } = useViewModeStore()

	return (
		<div className='flex items-center space-x-2'>
			<Button
				variant={viewMode === 'card' ? 'default' : 'outline'}
				size='icon'
				onClick={() => setViewMode('card')}
			>
				<LayoutGrid className='size-4' />
			</Button>
			<Button
				variant={viewMode === 'table' ? 'default' : 'outline'}
				size='icon'
				onClick={() => setViewMode('table')}
			>
				<List className='size-4' />
			</Button>
		</div>
	)
}
