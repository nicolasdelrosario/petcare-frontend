import { User } from './User'

export interface Workspace {
	id: number
	name: string
	deletedAt?: Date | null
	users?: User[]
}
