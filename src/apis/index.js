/** @format */
import config from "../config/api"
let apiKey = localStorage.getItem("apiKey")
const options = {
	headers: {
		"Content-Type": "application/json",
		"X-Api-Key": apiKey,
	},
}

const fetchApiKey = async () => {
	const response = await fetch(
		`${config.API_ROOT}/api-key?email=${config.email}`,
		options
	)
	return response
}
const getApiKey = async () => {
	const response = await fetchApiKey()
	const data = await response.json()
	apiKey = data.data.apiKey
	localStorage.setItem("apiKey", apiKey)
}
const refreshApiKey = async () => {
	localStorage.removeItem("apiKey")
	apiKey = null
	await getApiKey()
}

const getTodo = async () => {
	const response = await fetch(`${config.API_ROOT}/todos`, options)
	if (!response.ok) {
		await refreshApiKey()
		options.headers["X-Api-Key"] = apiKey
		const response = await fetch(`${config.API_ROOT}/todos`, options)
		const todos = await response.json()
		return todos
	}
	const todos = await response.json()
	return todos
}

const addTodo = async (data) => {
	const response = await fetch(`${config.API_ROOT}/todos`, {
		...options,
		method: "POST",
		body: JSON.stringify({ todo: data }),
	})
	if (!response.ok) {
		await refreshApiKey()
		options.headers["X-Api-Key"] = apiKey
		const response = await fetch(`${config.API_ROOT}/todos`, {
			...options,
			method: "POST",
			body: JSON.stringify({ todo: data }),
		})
		const todo = await response.json()
		return todo
	}
	const todo = await response.json()
	return todo
}

const removeTodo = async (id) => {
	const response = await fetch(`${config.API_ROOT}/todos/${id}`, {
		...options,
		method: "DELETE",
	})
	if (!response.ok) {
		await refreshApiKey()
		options.headers["X-Api-Key"] = apiKey
		const response = await fetch(`${config.API_ROOT}/todos/${id}`, {
			...options,
			method: "DELETE",
		})
		const todo = await response.json()
		return todo
	}
	const todo = await response.json()
	return todo
}

const editTodo = async (id, data) => {
	const response = await fetch(`${config.API_ROOT}/todos/${id}`, {
		...options,
		method: "PATCH",
		body: JSON.stringify({ todo: data }),
	})
	if (!response.ok) {
		await refreshApiKey()
		options.headers["X-Api-Key"] = apiKey
		const response = await fetch(`${config.API_ROOT}/todos/${id}`, {
			...options,
			method: "PATCH",
			body: JSON.stringify({ todo: data }),
		})
		const todo = await response.json()
		return todo
	}
	const todo = await response.json()
	return todo
}

const searchTodo = async (keywords) => {
	const response = await fetch(
		`${config.API_ROOT}/todos?q=${keywords}`,
		options
	)
	if (!response.ok) {
		await refreshApiKey()
		options.headers["X-Api-Key"] = apiKey
		const response = await fetch(`${config.API_ROOT}/todos`, options)
		const todos = await response.json()
		return todos
	}
	const todos = await response.json()
	return todos
}
export const client = {
	getTodo,
	addTodo,
	removeTodo,
	editTodo,
	searchTodo,
}
