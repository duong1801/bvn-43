/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */
import { useState } from "react"
import { Box, TextField } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"
// eslint-disable-next-line react/prop-types
function TodoForm({ handleAddTask }) {
	const [newTask, setNewTask] = useState("")
	const [addLoading, setAddLoading] = useState(false)
	const handleSubmit = async (e) => {
		e.preventDefault()
		setAddLoading(true)
		await handleAddTask(newTask)
		setAddLoading(false)
		setNewTask("")
	}

	return (
		<Box sx={{ mb: 3 }}>
			<form onSubmit={handleSubmit}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<TextField
						onChange={(e) => {
							setNewTask(e.target.value)
						}}
						value={newTask}
						label="Thêm mới việc làm"
						variant="outlined"
						sx={{
							// backgroundColor: "#bdc3c7",
							"& label": {
								color: "white",
							},
							"& input": {
								color: "white",
							},
							"& label.Mui-focused": {
								color: "white",
							},
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#dbd8d8",
								},
								"&:hover fieldset": {
									borderColor: "white",
								},
								"&.Mui-focused fieldset": {
									borderColor: "white",
								},
							},
							minWidth: "450px",
							mr: 2,
						}}
					/>
					<LoadingButton
						// color="red"
						endIcon={<SendIcon />}
						loadingPosition="end"
						variant="contained"
						type="submit"
						size="lg"
						loading={addLoading}
						sx={{
							height: "40px",
							border: "1px solid white",
							color: "white",
							textTransform: "capitalize",
							"&:hover": {
								border: "1px solid #bdc3c7",
							},
						}}>
						Thêm mới
					</LoadingButton>
				</Box>
			</form>
		</Box>
	)
}

export default TodoForm
