import { z } from 'zod'

export const updateOwnerSchema = z.object({
	email: z
		.string()
		.email({ message: 'Ingrese un correo valido' })
		.max(100, { message: 'El correo no debe exceder los 100 caracteres' })
		.optional(),
	phone: z
		.string()
		.length(9, { message: 'El telefono debe tener exactamente 9 digitos' })
		.refine(phone => /^\d+$/.test(phone), {
			message: 'El telefono debe contener solo numeros',
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
