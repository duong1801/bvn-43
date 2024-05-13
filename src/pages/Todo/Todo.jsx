/** @format */

import { Container, Typography, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { client } from "../../apis"
import { toast } from "react-toastify"
import TodoForm from "./TodoForm/TodoForm"
import ListTasks from "./ListTasks/ListTasks"

function Todo() {
	const [tasks, setTasks] = useState([])
	const handleAddTask = async (task) => {
		if (!task) {
			toast.error("Vui lòng nhập công việc!", {
				position: "bottom-right",
			})
			return
		}
		const response = await client.addTodo(task)
		const newTask = response?.data
		const newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}

	useEffect(() => {
		;(async () => {
			// await client.getApiKey()
			const response = await client.getTodo()
			setTasks(response?.data?.listTodo)
		})()
	}, [])
	return (
		<Container
			sx={{ bgcolor: "#45aaf2", minHeight: "100vh", p: 2, color: "white" }}>
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
				<TodoForm handleAddTask={handleAddTask} />
				<ListTasks tasks={tasks} />
			</Box>
		</Container>
	)
}

export default Todo
