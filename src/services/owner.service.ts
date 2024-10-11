import API_BASE from './api'

const PATH_OWNER = '/owners'

export const getOwners = async () => {
	const { data } = await API_BASE.get(`${PATH_OWNER}`)
	return data
}

export const getOwner = async (id: string) => {
	const { data } = await API_BASE.get(`${PATH_OWNER}/${id}`)
	return data
}
