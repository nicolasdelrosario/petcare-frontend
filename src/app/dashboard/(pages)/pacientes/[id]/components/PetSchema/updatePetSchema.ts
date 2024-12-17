import { z } from 'zod'

export const updatePetSchema = z.object({
	color: z
		.string()
		.min(3, { message: 'Ingrese un color valido (minimo 3 caracteres)' })
		.max(20, { message: 'El color no debe exceder los 20 caracteres' })
		.optional(),
	weight: z
		.string({ message: 'Ingrese un peso válido' })
		.regex(/^\d+(\.\d+)?$/, { message: 'Ingrese un peso válido' })
		.refine(weight => parseFloat(weight) > 0, {
			message: 'Ingrese un peso válido',
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
