/** @format */

import { Container, Typography, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { client } from "../../apis"
import { toast } from "react-toastify"
import TodoForm from "./TodoForm/TodoForm"
import ListTasks from "./ListTasks/ListTasks"
import CircularProgress from "@mui/material/CircularProgress"

function Todo() {
	const [tasks, setTasks] = useState([])
	const [loading, setLoading] = useState(false)

	const handleAddTask = async (task) => {
		if (!task) {
			toast.error("Vui lòng nhập công việc!")
			return
		}
		setLoading(true)
		const response = await client.addTodo(task)
		const newTask = response?.data
		setTasks([newTask, ...tasks])
		setLoading(false)
		toast.success("Thêm mới công việc thành công!")
	}

	const handleDeleteTask = (id) => {
		console.log(id)
	}

	useEffect(() => {
		;(async () => {
			// await client.getApiKey()
			const response = await client.getTodo()
			setTasks(response?.data?.listTodo)
		})()
	}, [])
	return tasks.length ? (
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
				<TodoForm handleAddTask={handleAddTask} loading={loading} />
				<ListTasks handleDeleteTask={handleDeleteTask} tasks={tasks} />
			</Box>
		</Container>
	) : (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			<CircularProgress disableShrink />
		</Box>
	)
}

export default Todo
