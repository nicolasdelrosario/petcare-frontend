import API_BASE from './api'

const PATH_PETS = '/pets'

export const getPets = async () => {
	const { data } = await API_BASE.get(`${PATH_PETS}`)
	return data
}

export const getPet = async (id: string) => {
	const { data } = await API_BASE.get(`${PATH_PETS}/${id}`)
	return data
}
