import { z } from 'zod'

export const addOwnerSchema = z.object({
	name: z
		.string({ required_error: 'El nombre es requerido' })
		.min(3, { message: 'Ingrese un nombre valido (minimo 3 caracteres)' })
		.max(30, { message: 'El nombre no debe exceder los 30 caracteres' })
		.refine(name => name.trim() !== '', {
			message: 'El nombre es requerido',
		}),
	dni: z
		.string({ required_error: 'El DNI es requerido' })
		.min(8, { message: 'Ingrese un DNI valido' })
		.refine(dni => /^\d+$/.test(dni), {
			message: 'El DNI debe contener solo numeros',
		}),
	email: z
		.string()
		.email({ message: 'Ingrese un correo valido' })
		.max(100, { message: 'El correo no debe exceder los 100 caracteres' })
		.optional(),
	phone: z
		.string()
		.length(9, { message: 'Ingrese un telefono valido' })
		.refine(phone => /^\d+$/.test(phone), {
			message: 'Ingrese un numero valido',
		})
		.refine(phone => phone.startsWith('9'), {
			message: 'El formato debe ser 9xx-xxx-xxx',
		})
		.optional(),
	address: z
		.string()
		.min(5, { message: 'Ingrese una dirección válida (mínimo 5 caracteres)' })
		.max(100, { message: 'La dirección no debe exceder los 100 caracteres' })
		.optional(),
})
