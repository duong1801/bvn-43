/** @format */

import Task from "./Task/Task"

function ListTasks({ tasks, handleDeleteTask, handleUpdateTask }) {
	return tasks?.map((task) => (
		<Task
			task={task}
			handleDeleteTask={handleDeleteTask}
			handleUpdateTask={handleUpdateTask}
			key={task._id}
		/>
	))
}

export default ListTasks
