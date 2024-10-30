import { useState } from 'react'

type FormState<T> = {
	formData: T
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void
	setFormData: React.Dispatch<React.SetStateAction<T>>
}

export function useForm<T>(initialState: T): FormState<T> {
	const [formData, setFormData] = useState<T>(initialState)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'number' ? Number(value) : value,
		}))
	}

	return { formData, handleChange, setFormData }
}
