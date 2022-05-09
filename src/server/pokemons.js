import api from './api'

export const emptyResult = {
	count: 0,
	next: null,
	previous: null,
	results: []
}

export async function getPokemonsPaginated(limit, offset) {
	try {
		const params = {
			limit: limit,
			offset: offset
		}
		const { data } = await api.get('/pokemon', params)
		return data
	} catch (error) {
		console.error(error)
		return emptyResult
	}
}

export async function getByName(name) {
	try {
		const { data } = await api.get(`/pokemon/${name}`)
		return data
	} catch (error) {
		console.error(error)
		return {}
	}
}