import { z } from 'zod'

export const logInSchema = z.object({
	email: z.string().email({ message: 'Debe ingresar un correo valido' }),
	password: z.string(),
})
