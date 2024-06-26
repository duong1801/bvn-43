/** @format */

import { Container, Typography, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { client } from "../../apis"
import { toast } from "react-toastify"
import TodoForm from "./TodoForm/TodoForm"
import ListTasks from "./ListTasks/ListTasks"
import CircularProgress from "@mui/material/CircularProgress"

function Todo() {
	const [tasks, setTasks] = useState(null)

	const handleAddTask = async (task) => {
		if (!task) {
			toast.error("Vui lòng nhập công việc!")
			return
		}

		const response = await client.addTodo(task)
		const newTask = response?.data
		setTasks([newTask, ...tasks])

		toast.success("Thêm mới công việc thành công!")
	}

	const handleDeleteTask = async (id) => {
		const response = await client.removeTodo(id)
		if (response.code === 200) {
			setTasks((prevStasks) => {
				const newTasks = [...prevStasks].filter((tasks) => tasks._id !== id)
				return newTasks
			})
			toast.success("Xoá công việc thành công!")
		} else {
			toast.error("Có lỗi xảy ra vui lòng kiểm tra!")
		}
	}

	const handleUpdateTask = async (id, data) => {
		if (!data) {
			toast.error("Vui lòng nhập công việc!")
			return
		}
		const response = await client.editTodo(id, data)

		if (response.code === 200) {
			setTasks((prevStasks) => {
				const newTasks = [...prevStasks]
				const taskUpdated = newTasks.find((task) => task._id === id)
				taskUpdated.todo = data
				return newTasks
			})
			toast.success("Cập nhật việc thành công!")
		} else {
			toast.error("Có lỗi xảy ra vui lòng kiểm tra!")
		}
	}

	const handleSearchTask = async (keyword) => {
		const response = await client.searchTodo(keyword)
		const data = await response.data
		setTasks(data.listTodo)
	}

	useEffect(() => {
		;(async () => {
			// await client.getApiKey()
			const response = await client.getTodo()
			setTasks(response?.data?.listTodo)
		})()
	}, [])
	return tasks ? (
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
			<Box sx={{ maxWidth: "800px", margin: "0px auto" }}>
				<TodoForm
					handleAddTask={handleAddTask}
					handleSearchTask={handleSearchTask}
				/>
				<ListTasks
					handleDeleteTask={handleDeleteTask}
					handleUpdateTask={handleUpdateTask}
					tasks={tasks}
				/>
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
