import { Todo } from '../TodoList/components/Todos/type'

const API = 'http://localhost:8000/todos'

export const addNewTask = async (taskData: Todo) => {
	try {
		const response = await fetch(API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(taskData)
		})

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error adding new task:', error)
		throw error
	}
}
