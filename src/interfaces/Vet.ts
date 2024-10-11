import { User } from './User'

export interface Vet {
	id: number
	name: string
	address?: string
	phone?: string
	users: User[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
}
