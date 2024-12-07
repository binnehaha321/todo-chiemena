/**
 * pending: still be in the future
 * unfinished: over due date
 * done: finished already
 */
type Status = 'pending' | 'unfinished' | 'done'

export interface Todo {
	id: number
	title: string
	description: string
	dueDate: string
	status: Status
}

export interface TodoProps {
	groupBy: string
	todos: Todo[]
}
