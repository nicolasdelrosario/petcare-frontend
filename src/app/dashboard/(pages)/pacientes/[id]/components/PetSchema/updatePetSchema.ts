import { z } from 'zod'

export const updatePetSchema = z.object({
	color: z
		.string()
		.min(3, { message: 'Ingrese un color valido (minimo 3 caracteres)' })
		.max(20, { message: 'El color no debe exceder los 20 caracteres' })
		.optional(),
	weight: z
		.string()
		.refine(weight => !isNaN(parseFloat(weight)), {
			message: 'El peso debe contener solo numeros',
		})
		.optional(),
	characteristics: z
		.string()
		.min(3, {
			message: 'Las caracteristicas deben tener como minimo 3 caracteres',
		})
		.max(100, {
			message: 'Las caracteristicas no deben excerder los 100 caracteres',
		})
		.optional(),
})
