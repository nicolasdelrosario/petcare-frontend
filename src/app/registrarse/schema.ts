import { z } from 'zod'

export const signUpSchema = z.object({
	name: z
		.string({ required_error: 'El nombre es requerido' })
		.trim()
		.min(3, { message: 'Debe ingresar un nombre valido (minimo 3 caracteres)' })
		.max(30, { message: 'El nombre no debe exceder los 30 caracteres' })
		.regex(/^[a-zA-Z\s]+$/, {
			message: 'El nombre debe contener solo letras',
		})
		.refine(name => name.trim() !== '', {
			message: 'El nombre es requerido',
		}),
	email: z
		.string({ required_error: 'El correo es requerido' })
		.email({ message: 'Debe ingresar un correo valido' })
		.max(100, { message: 'El correo no debe exceder los 100 caracteres' }),
	password: z
		.string({ required_error: 'La contraseña es requerida' })
		.min(8, { message: 'Debe tener 8 caracteres como minimo' })
		.regex(/\d/, { message: 'Debe incluir al menos un número' })
		.refine(name => name.trim() !== '', {
			message: 'La contraseña es requerida',
		}),
	workspaceId: z.number(),
})
