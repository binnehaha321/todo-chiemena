import dayjs from 'dayjs'
import { Todo, TodoProps } from './type'
import { FilterMode } from '../../../../context/TodoContext'
import { DEFAULT_DATE_FORMAT } from '../../constants'

const API = `${import.meta.env.VITE_BASE_URL}/todos`

export const getTodos = async () => {
	try {
		const res = await fetch(API)
		if (!res.ok) return

		const data = (await res.json()) as Todo[]
		return data
	} catch (error: any) {
		throw new Error(error)
	}
}

export const formatGroupingText = (group: string) => {
	const isValidDateFormat = (group: string): boolean => {
		const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/
		return regex.test(group)
	}

	if (isValidDateFormat(group)) return dayjs(group).format(DEFAULT_DATE_FORMAT)
	return group
}

export const filterTasks = (filterMode: FilterMode | '', todos: Todo[]) => {
	switch (filterMode) {
		case 'today': {
			return filterTaskByToday(todos)
		}
		case 'done': {
			return filterTaskByDone(todos)
		}
		case 'unfinished': {
			return filterTaskByUnfinished(todos)
		}
		default: {
			return groupTodoByDate(todos)
		}
	}
}

const filterTaskByToday = (todos: Todo[]): TodoProps[] => {
	const today = dayjs().format(DEFAULT_DATE_FORMAT)
	const todayTasks = todos.filter((todo) => todo.dueDate === today)
	return [{ groupBy: today, todos: todayTasks }]
}

const filterTaskByDone = (todos: Todo[]): TodoProps[] => {
	const doneTasks = todos.filter((todo) => todo.status === 'done')
	return [{ groupBy: 'done', todos: doneTasks }]
}

const filterTaskByUnfinished = (todos: Todo[]): TodoProps[] => {
	const unfinishedTasks = todos.filter((todo) => todo.status === 'unfinished')
	return [{ groupBy: 'unfinished', todos: unfinishedTasks }]
}

const groupTodoByDate = (todos: Todo[]): TodoProps[] => {
	const groupedTasks = todos.reduce((acc, todo) => {
		const date = dayjs(todo.dueDate).format(DEFAULT_DATE_FORMAT)
		const existingGroup = acc.find((group) => group.groupBy === date)

		if (existingGroup) {
			existingGroup.todos.push(todo)
		} else {
			acc.push({ groupBy: date, todos: [todo] })
		}

		return acc
	}, [] as TodoProps[])

	// Sort the grouped tasks by date in descending order
	return groupedTasks.sort(
		(a, b) => dayjs(b.groupBy).unix() - dayjs(a.groupBy).unix()
	)
}
