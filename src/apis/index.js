/** @format */
import config from "../config/api"

const getTodo = async () => {
	const options = {
		headers: {
			"Content-Type": "application/json",
			"X-Api-Key": config["X-Api-Key"],
		},
	}
	const response = await fetch(`${config.API_ROOT}/todos`, options)
	const todos = response.json()
	return todos
}

export const client = {
	getTodo,
}
