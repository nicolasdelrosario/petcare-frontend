import { UserRol } from './UserRol'
import { Vet } from './Vet'
import { Appointment } from './Appointment'

export interface User {
	id: number
	name: string
	dni?: string
	email: string
	phone?: string
	password: string
	userRol: UserRol
	vet: Vet
	appointments: Appointment[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
}
