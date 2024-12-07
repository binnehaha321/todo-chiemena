import { Status } from '../Todos/type'

export const isOverdue = (dueDate: string) => {
	const taskDueDate = new Date(dueDate)
	const currentDate = new Date()
	return taskDueDate < currentDate
}

export const removeTask = async (taskId: number) => {
	try {
		const res = await fetch(`http://localhost:8000/todos/${taskId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return res
	} catch (error) {
		throw error
	}
}

export const changeTaskStatus = async (taskId: number, status: Status) => {
	try {
		const res = await fetch(`http://localhost:8000/todos/${taskId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ status })
		})
		return res
	} catch (error) {
		throw error
	}
}
