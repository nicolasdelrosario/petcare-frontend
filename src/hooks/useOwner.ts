import { useEffect } from 'react'
import { useOwnerStore } from '@/store/useOwnerStore'

const useOwner = () => {
	const { owners, loading, getOwners } = useOwnerStore()

	useEffect(() => {
		getOwners()
	}, [getOwners])

	return { owners, loading }
}

export default useOwner
