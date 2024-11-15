import { Pet } from './Pet'
import { User } from './User'

export interface Appointment {
	id: number
	date: Date
	time: string
	status: boolean
	reason?: string
	pet: Pet
	user: User
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
	dateTime?: string | number | Date
}
