import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { filterTasks, getTodos } from './service'
import ViewTodos from './view'
import { useTodo } from '../../../../context/TodoContext'
import { TodoProps } from './type'

const Todos = () => {
	const { isAdding, setIsAdding, setTodos, todos, filterMode } = useTodo()
	const [tasks, setTasks] = useState<TodoProps[]>([])

	useEffect(() => {
		const handleGetTodos = async () => {
			setIsAdding(true)
			const res = (await getTodos()) ?? []
			setTodos(res)
			const filteredTasks = filterTasks('', res)
			setTasks(filteredTasks)
			setIsAdding(false)
		}
		handleGetTodos()
	}, [setIsAdding, setTodos, getTodos, filterTasks])

	useEffect(() => {
		const filteredTasks = filterTasks(filterMode, todos)
		setTasks(filteredTasks)
	}, [filterMode, filterTasks, todos])

	if (isAdding) return <Spin className='my-5 w-full' />

	return <ViewTodos todos={tasks} />
}

export default Todos
