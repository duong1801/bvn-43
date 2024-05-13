/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */
import { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
// import { useState } from "react"
// eslint-disable-next-line react/prop-types
function TodoForm({ handleAddTask }) {
	const [newTask, setNewTask] = useState("")

	return (
		<Box sx={{ mb: 3 }}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					handleAddTask(newTask)
				}}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<TextField
						onChange={(e) => {
							setNewTask(e.target.value)
						}}
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
					<Button
						type="submit"
						variant="outlined"
						size="lg"
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
					</Button>
				</Box>
			</form>
		</Box>
	)
}

export default TodoForm
