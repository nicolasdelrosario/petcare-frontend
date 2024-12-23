import { z } from 'zod'

export const updateAppointmentSchema = z.object({
	date: z.date().refine(date => date.getTime() >= Date.now(), {
		message: 'Ingrese una fecha valida',
	}),
	time: z.string({ required_error: 'La hora es requerida' }),
	reason: z
		.string({ required_error: 'El motivo de la cita es obligatorio' })
		.min(3, { message: 'El motivo debe tener al menos 3 caracteres' }),
})
