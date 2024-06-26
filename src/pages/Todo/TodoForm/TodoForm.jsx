/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */
import { useState, useRef, useCallback } from "react"
import { Box, TextField } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"
import { toast } from "react-toastify"
import { debounce } from "../../../utils/utils"
// eslint-disable-next-line react/prop-types
function TodoForm({ handleAddTask, handleSearchTask }) {
	const [newTask, setNewTask] = useState("")
	const [addLoading, setAddLoading] = useState(false)
	const [searchLoading, setSearchLoading] = useState(false)
	const [searchMode, setSearchMode] = useState(false)
	const formRef = useRef(null)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setAddLoading(true)
		await handleAddTask(newTask)
		setAddLoading(false)
		setSearchMode(false)
		setNewTask("")
	}

	const debounceSearch = useCallback(
		debounce((value) => {
			handleSearchTask(value)
		}, 500),
		[]
	)

	const handleChangeKeyWordsForm = (e) => {
		console.log(e.target.value)
		setNewTask(e.target.value)
		console.log(searchMode)
		if (searchMode) {
			debounceSearch(e.target.value)
		}
	}

	const handleChangeSearchMode = (e) => {
		e.preventDefault()
		if (newTask) {
			handleSearchTask(newTask)
		}
		if (!searchMode) {
			setSearchLoading(true)
		}
		setSearchMode(true)
		setTimeout(() => {
			setSearchLoading(false)
			toast.success("Đã chuyển qua chế độ tìm kiếm!")
		}, 1000)
	}

	return (
		<Box sx={{ mb: 3 }}>
			<form onSubmit={handleSubmit}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<TextField
						ref={formRef}
						onChange={handleChangeKeyWordsForm}
						value={newTask}
						label={!searchMode ? "Thêm mới việc làm" : "Tìm kiếm việc làm"}
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
							mr: 2,
						}}>
						Thêm mới
					</LoadingButton>
					<LoadingButton
						onClick={handleChangeSearchMode}
						// color="red"
						endIcon={<SendIcon />}
						loadingPosition="end"
						variant="contained"
						type="button"
						size="lg"
						color="warning"
						loading={searchLoading}
						sx={{
							height: "40px",
							border: "1px solid white",
							color: "white",
							textTransform: "capitalize",
							"&:hover": {
								border: "1px solid #bdc3c7",
							},
						}}>
						Tìm kiếm
					</LoadingButton>
				</Box>
			</form>
		</Box>
	)
}

export default TodoForm
