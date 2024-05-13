/** @format */
import { useState } from "react"
import { Card, Box, Button, Typography, TextField } from "@mui/material"

// eslint-disable-next-line react/prop-types
function Task({ task }) {
	const [updating, setUpdating] = useState(false)
	const toggleUpdating = () => {
		setUpdating(!updating)
	}
	return (
		<Card
			sx={{
				height: "150px",
				mb: 4,
				p: 2,
			}}>
			{updating ? (
				<Box>
					<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
						<TextField
							label="Sửa việc làm"
							variant="outlined"
							value={task.todo}
							sx={{
								// backgroundColor: "#bdc3c7",
								"& label": {
									color: "#3498db",
								},
								"& input": {
									color: "#3498db",
								},
								"& label.Mui-focused": {
									color: "#3498db",
								},
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "##3498db",
									},
									"&:hover fieldset": {
										borderColor: "#3498db",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#3498db",
									},
								},
								minWidth: "250px",
								mr: 2,
							}}
						/>
						<Button
							variant="outlined"
							size="lg"
							sx={{
								height: "40px",
								border: "1px solid bdc3c7",
								color: "bdc3c7",
								textTransform: "capitalize",
								"&:hover": {
									border: "1px solid #bdc3c7",
								},
							}}>
							Sửa
						</Button>
					</Box>
					<Box>
						<Box>
							<Button
								onClick={toggleUpdating}
								variant="outlined"
								size="lg"
								sx={{
									height: "40px",
									border: "1px solid #3498db",
									textTransform: "capitalize",
									"&:hover": {
										background: "#ecf0f1",
									},
									mr: 2,
								}}>
								Thoát
							</Button>
							<Button
								variant="outlined"
								size="lg"
								sx={{
									height: "40px",
									border: "1px solid #3498db",
									textTransform: "capitalize",
									"&:hover": {
										background: "#ecf0f1",
									},
								}}>
								Xoá
							</Button>
						</Box>
					</Box>
				</Box>
			) : (
				<Box sx={{ mt: 2 }}>
					<Box sx={{ mb: 2 }}>
						<Typography>{task.todo}</Typography>
					</Box>
					<Box>
						<Button
							onClick={toggleUpdating}
							variant="outlined"
							size="lg"
							sx={{
								height: "40px",
								border: "1px solid #3498db",
								textTransform: "capitalize",
								"&:hover": {
									background: "#ecf0f1",
								},
								mr: 2,
							}}>
							Sửa
						</Button>
						<Button
							variant="outlined"
							size="lg"
							sx={{
								height: "40px",
								border: "1px solid #3498db",
								textTransform: "capitalize",
								"&:hover": {
									background: "#ecf0f1",
								},
							}}>
							Xoá
						</Button>
					</Box>
				</Box>
			)}
		</Card>
	)
}

export default Task
