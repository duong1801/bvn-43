/** @format */

import { Container, Typography, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { client } from "../../apis"
import TodoForm from "./TodoForm/TodoForm"
import ListTasks from "./ListTasks/ListTasks"

function Todo() {
	const [tasks, setTasks] = useState([])
	// const handleAddTask = (task) => {
	// 	console.log(task)
	// }
	useEffect(() => {
		;(async () => {
			const response = await client.getTodo()
			console.log(response)
			// setTasks(response?.data?.listTodo)
		})()
	}, [])
	return (
		<Container sx={{ bgcolor: "#45aaf2", height: "100vh", color: "white" }}>
			<Typography
				variant="h2"
				sx={{
					p: 2,
					textAlign: "center",
					translateX: "-50%",
					fontWeight: "400",
				}}>
				Todo List
			</Typography>
			<Box sx={{ maxWidth: "600px", margin: "0px auto" }}>
				<TodoForm />
				<ListTasks tasks={tasks} />
			</Box>
		</Container>
	)
}

export default Todo
