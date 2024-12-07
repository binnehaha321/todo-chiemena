import { useCallback } from 'react'
import { Button, DatePicker, Form, Input, Modal } from 'antd'
import dayjs from 'dayjs'
import { useTodo } from '../../context/TodoContext'
import { addNewTask } from './service'
import { Todo } from '../TodoList/components/Todos/type'

const NewTask = () => {
	const {
		isNewTaskModalOpen,
		setNewTaskModal,
		isAdding,
		setIsAdding,
		setTodos
	} = useTodo()
	const [form] = Form.useForm()

	const resetFields = useCallback(() => {
		form.resetFields()
		setNewTaskModal(false)
	}, [setNewTaskModal])

	const handleAddTask = useCallback(
		async (values: any) => {
			const { title = '', description = '', dueDate = '' } = values
			if (!title || !dueDate) return

			const payload: Todo = {
				id: Math.random() * 1000, // fake ID
				title,
				description,
				dueDate: dayjs(dueDate).toISOString(),
				status: 'pending' // default
			}

			setIsAdding(true)
			await addNewTask(payload)
			setTodos((prevData) => [...prevData, payload])
			resetFields()
			setIsAdding(false)
		},
		[resetFields, setTodos, setIsAdding, addNewTask]
	)

	return (
		<Modal
			title='New Task'
			open={isNewTaskModalOpen}
			footer={null}
			onCancel={() => setNewTaskModal(false)}
		>
			<Form
				form={form}
				layout='vertical'
				onFinish={handleAddTask}
			>
				<div className='flex justify-between items-center flex-col md:flex-row gap-x-4'>
					<Form.Item
						label='Task name'
						name='title'
						rules={[
							{ required: true, message: 'Please input your task name!' }
						]}
						className='flex-1 w-full'
					>
						<Input placeholder='Your task name...' />
					</Form.Item>
					<Form.Item
						label='Due date'
						name='dueDate'
						rules={[{ required: true, message: 'Select a date' }]}
						className='flex-1 w-full'
					>
						<DatePicker className='w-full' />
					</Form.Item>
				</div>
				<Form.Item
					label='Task name'
					name='description'
					className='flex-1'
				>
					<Input.TextArea
						placeholder='Your task description...'
						rows={3}
						rootClassName='!resize-none'
					/>
				</Form.Item>
				<Form.Item
					label={null}
					className='text-end mb-0'
				>
					<Button
						type='primary'
						htmlType='submit'
						block
						loading={isAdding}
					>
						Add
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default NewTask
