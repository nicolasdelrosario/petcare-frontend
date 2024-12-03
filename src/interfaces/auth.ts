export interface RegisterCredentials {
	name: string
	email: string
	password: string
	workspaceId: number
}

export interface LoginCredentials {
	email: string
	password: string
}

export interface UserResponse {
	error?: string
	name: string
	token: string
	userId: number
	workspaceId: number
}
