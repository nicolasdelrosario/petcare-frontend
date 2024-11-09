import { Owner } from './Owner'
import { Appointment } from './Appointment'

export interface Pet {
	id: number
	name: string
	species?: string
	breed?: string
	sex?: boolean
	weight?: string
	birthDate?: Date
	color?: string
	characteristics?: string
	isAlive: boolean
	owner: Owner
	appointments: Appointment[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
}
