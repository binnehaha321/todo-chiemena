import { useCallback, useMemo, useState } from 'react'
import {
	Button,
	Checkbox,
	Flex,
	Popconfirm,
	Popover,
	Space,
	Typography
} from 'antd'
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { changeTaskStatus, isOverdue, removeTask } from './service'
import { Todo } from '../Todos/type'
import { useTodo } from '../../../../context/TodoContext'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

interface Props {
	todo: Todo
}

const SingleTask = ({ todo }: Props) => {
	const { removeTodo, setTodos } = useTodo()
	const [checked, setChecked] = useState(todo.status === 'done' ? true : false)

	const handleChangeStatus = useCallback(
		async (e: CheckboxChangeEvent) => {
			const isChecked = e.target.checked
			setChecked(isChecked)
			const status = isChecked ? 'done' : 'unfinished'
			await changeTaskStatus(todo.id, status)
			setTodos((prevTodos) =>
				prevTodos.map((todoItem) =>
					todoItem.id === todo.id ? { ...todoItem, status } : todoItem
				)
			)
		},
		[setTodos, changeTaskStatus]
	)

	const handleRemoveTask = useCallback(
		async (todoId: number) => {
			await removeTask(todoId)
			removeTodo(todo.id)
		},
		[removeTask, removeTodo]
	)

	const content = useMemo(
		() => (
			<Space>
				<Popover content='Not work now'>
					<Button
						icon={<EditOutlined />}
						size='small'
						disabled
					>
						Edit
					</Button>
				</Popover>
				<Popconfirm
					title='Delete this task?'
					onConfirm={() => handleRemoveTask(todo.id)}
					trigger={'click'}
				>
					<Button
						icon={<DeleteOutlined />}
						size='small'
						danger
					>
						Delete
					</Button>
				</Popconfirm>
			</Space>
		),
		[removeTodo, todo.id]
	)

	return (
		<Flex className='items-start gap-2'>
			<Checkbox
				checked={checked}
				onChange={handleChangeStatus}
			/>
			<Space.Compact direction='vertical'>
				<Typography.Text
					className={classNames('font-semibold', {
						'text-red-500': isOverdue(todo.dueDate)
					})}
				>
					{todo.title}
				</Typography.Text>
				<Typography.Text>{todo.description}</Typography.Text>
			</Space.Compact>
			<Popover
				content={content}
				placement='right'
			>
				<Button
					icon={<MoreOutlined />}
					type='text'
					className='ml-auto'
				/>
			</Popover>
		</Flex>
	)
}

export default SingleTask
