import { z } from 'zod'

export function validateWithSchema<T>(schema: z.ZodSchema<T>, data: unknown) {
	try {
		return { data: schema.parse(data), errors: null }
	} catch (error) {
		if (error instanceof z.ZodError) {
			const newErrors: { [key: string]: string } = {}
			error.errors.forEach(err => {
				if (err.path[0]) newErrors[err.path[0] as string] = err.message
			})
			return { data: null, errors: newErrors }
		}
		return { data: null, errors: { general: 'Un error ha ocurrido' } }
	}
}
