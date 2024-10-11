import { User } from './User'

export interface UserRol {
	id: number
	name: string
	users: User[]
	createdAt: Date
	updatedAt: Date
	deletedAt?: Date
}
