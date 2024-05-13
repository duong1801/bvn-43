/** @format */

import Task from "./Task/Task"

function ListTasks({ tasks, handleDeleteTask }) {
	return tasks?.map((task) => (
		<Task task={task} handleDeleteTask={handleDeleteTask} key={task._id} />
	))
}

export default ListTasks
