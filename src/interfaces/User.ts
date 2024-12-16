import { Workspace } from './Workspace'
import { Appointment } from './Appointment'

export interface User {
	id: number
	email: string
	name: string
	dni?: string
	phone?: string
	password: string
	role: 'user' | 'admin'
	workspace: Workspace
	appointments?: Appointment[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date | null
}
