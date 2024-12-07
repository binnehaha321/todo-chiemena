import { useState } from 'react'
import TodoContext, { FilterMode } from '.'
import {
	Todo,
	TodoProps
} from '../../components/TodoList/components/Todos/type'

const TodoProvider = ({ children }: React.PropsWithChildren) => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [groupTodos, setGroupTodos] = useState<TodoProps[]>([])
	const [taskNameToFind, setTaskNameToFind] = useState('')
	const [isNewTaskModalOpen, setNewTaskModal] = useState(false)
	const [isAdding, setIsAdding] = useState(false)
	const [filterMode, setFilterMode] = useState<FilterMode | ''>('unfinished')

	const addNewTask = (newTask: TodoProps) => {
		setGroupTodos((prevData) => [...prevData, newTask])
	}

	const removeTask = (taskId: number) => {
		const task = todos.find((task) => task.id === taskId)
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== task?.id))
	}

	return (
		<TodoContext.Provider
			value={{
				groupTodos,
				todos,
				setTodos,
				taskNameToFind,
				setTaskNameToFind,
				isNewTaskModalOpen,
				setNewTaskModal,
				isAdding,
				setIsAdding,
				filterMode,
				setFilterMode,
				addNewTodo: addNewTask,
				removeTodo: removeTask
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider
