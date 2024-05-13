/** @format */
import { useState } from "react"
import { Card, Box, Button, Typography, TextField } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"
import EditIcon from "@mui/icons-material/Edit"
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt"
// eslint-disable-next-line react/prop-types
function Task({ task, handleDeleteTask }) {
	const [updating, setUpdating] = useState(false)
	const [loading, setLoading] = useState(false)
	const handleWhenClickBtnDelete = async () => {
		const isDelete = confirm(`Bạn chắc chắn muốn xoá`)
		if (!isDelete) return
		setLoading(true)
		// eslint-disable-next-line react/prop-types
		await handleDeleteTask(task._id)
		setLoading(false)
	}
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
							// eslint-disable-next-line react/prop-types
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
										borderColor: "#3498db",
									},
									"&:hover fieldset": {
										borderColor: "#3498db",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#3498db",
									},
								},
								minWidth: "450px",
								mr: 2,
							}}
						/>
						<LoadingButton
							endIcon={<SendIcon />}
							// loading={loading}
							loadingPosition="end"
							variant="contained"
							onClick={toggleUpdating}
							size="lg"
							sx={{
								height: "40px",
								border: "1px solid #3498db",
								textTransform: "capitalize",
								"&:hover": {
									background: "#1565c0",
								},
								mr: 2,
							}}>
							Sửa
						</LoadingButton>
					</Box>
					<Box>
						<Box>
							<LoadingButton
								endIcon={<DoDisturbAltIcon />}
								onClick={toggleUpdating}
								loadingPosition="end"
								variant="contained"
								size="lg"
								sx={{
									height: "40px",
									border: "1px solid #3498db",
									textTransform: "capitalize",
									"&:hover": {
										background: "#1565c0",
									},
									mr: 2,
								}}>
								Thoát
							</LoadingButton>
							<LoadingButton
								endIcon={<SendIcon />}
								loading={loading}
								loadingPosition="end"
								variant="contained"
								size="lg"
								sx={{
									height: "40px",
									border: "1px solid #3498db",
									textTransform: "capitalize",
									"&:hover": {
										background: "#1565c0",
									},
								}}>
								Xoá
							</LoadingButton>
						</Box>
					</Box>
				</Box>
			) : (
				<Box sx={{ mt: 2 }}>
					<Box sx={{ mb: 2 }}>
						<Typography>{task.todo}</Typography>
					</Box>
					<Box>
						<LoadingButton
							endIcon={<EditIcon />}
							// loading={loading}
							loadingPosition="end"
							variant="contained"
							onClick={toggleUpdating}
							size="lg"
							sx={{
								height: "40px",
								border: "1px solid #3498db",
								textTransform: "capitalize",
								"&:hover": {
									background: "#1565c0",
								},
								mr: 2,
							}}>
							Sửa
						</LoadingButton>
						<LoadingButton
							endIcon={<SendIcon />}
							onClick={handleWhenClickBtnDelete}
							loading={loading}
							loadingPosition="end"
							variant="contained"
							size="lg"
							sx={{
								height: "40px",
								border: "1px solid #3498db",
								textTransform: "capitalize",
								"&:hover": {
									background: "#1565c0",
								},
							}}>
							Xoá
						</LoadingButton>
					</Box>
				</Box>
			)}
		</Card>
	)
}

export default Task
