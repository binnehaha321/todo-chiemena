import { createContext, useContext } from 'react'
import {
	Status,
	Todo,
	TodoProps
} from '../../components/TodoList/components/Todos/type'

export type FilterMode = Status | 'today'

interface TodoContextProps {
	groupTodos: TodoProps[]
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
	taskNameToFind: string
	setTaskNameToFind: (value: string) => void
	isNewTaskModalOpen: boolean
	setNewTaskModal: (value: boolean) => void
	isAdding: boolean
	setIsAdding: (value: boolean) => void
	filterMode: FilterMode | ''
	setFilterMode: (mode: FilterMode | '') => void
	addNewTodo: (task: TodoProps) => void
	removeTodo: (taskId: number) => void
}

const TodoContext = createContext<TodoContextProps>({
	groupTodos: [],
	todos: [],
	setTodos: () => {},
	taskNameToFind: '',
	setTaskNameToFind: () => {},
	isNewTaskModalOpen: false,
	setNewTaskModal: () => {},
	isAdding: false,
	setIsAdding: () => {},
	filterMode: 'unfinished',
	setFilterMode: () => {},
	addNewTodo: () => {},
	removeTodo: () => {}
})

export const useTodo = () => useContext(TodoContext)

export default TodoContext
