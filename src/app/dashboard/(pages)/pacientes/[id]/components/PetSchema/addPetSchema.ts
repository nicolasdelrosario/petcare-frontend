import { z } from 'zod'

export const addPetSchema = z.object({
	name: z
		.string({ required_error: 'El nombre es requerido' })
		.min(3, { message: 'Ingrese un nombre valido (minimo 3 caracteres)' })
		.max(30, { message: 'El nombre no debe exceder los 30 caracteres' })
		.refine(name => name.trim() !== '', {
			message: 'El nombre es requerido',
		}),
	specie: z
		.string()
		.min(3, { message: 'Ingrese una nombre valido (minimo 3 caracteres)' })
		.max(30, {
			message: 'El nombre de la especie no debe exceder los 30 caracteres',
		})
		.optional(),
	type: z
		.string()
		.min(3, { message: 'Ingrese una nombre valido (minimo 3 caracteres)' })
		.max(30, {
			message: 'El nombre de la raza no debe exceder los 30 caracteres',
		})
		.optional(),
	age: z
		.string()
		.refine(weight => !isNaN(parseFloat(weight)), {
			message: 'La edad debe contener solo numeros',
		})
		.optional(),
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