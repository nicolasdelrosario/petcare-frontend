import { Owner } from './Owner'
import { Appointment } from './Appointment'

export interface Pet {
	id: number
	name: string
	type?: string
	gender?: boolean
	weight?: string
	age?: string
	color?: string
	characteristics?: string
	isAlive: boolean
	owner: Owner
	appointments: Appointment[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
}