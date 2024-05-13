/** @format */

import Task from "./Task/Task"

function ListTasks({ tasks }) {
	return tasks.map((task) => <Task task={task} key={task._id} />)
}

export default ListTasks
