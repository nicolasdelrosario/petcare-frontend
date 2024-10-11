import { useEffect } from 'react'
import { usePetStore } from '@/store/usePetStore'

const usePet = () => {
	const { pets, loading, getPets } = usePetStore()

	useEffect(() => {
		getPets()
	}, [getPets])

	return { pets, loading }
}

export default usePet
