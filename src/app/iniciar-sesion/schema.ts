import { z } from 'zod'

export const logInSchema = z.object({
	email: z
		.string({ required_error: 'El correo es requerido' })
		.email({ message: 'Debe ingresar un correo valido' })
		.max(100, { message: 'El correo no debe exceder los 100 caracteres' })
		.refine(name => name.trim() !== '', {
			message: 'El correo es requerido',
		}),
	password: z
		.string({ required_error: 'La contraseña es requerida' })
		.min(8, { message: 'Debe tener 8 caracteres como minimo' })
		.refine(name => name.trim() !== '', {
			message: 'La contraseña es requerida',
		}),
})
