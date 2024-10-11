import { Pet } from './Pet'

export interface Owner {
	id: number
	name: string
	dni?: string
	email?: string
	phone?: string
	address?: string
	pets?: Pet[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
}
