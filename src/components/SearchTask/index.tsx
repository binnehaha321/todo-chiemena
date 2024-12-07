import { Form, Input, Popover } from 'antd'
import { useTodo } from '../../context/TodoContext'

const SearchTask = () => {
	const { setTaskNameToFind } = useTodo()

	const handleFinish = ({ taskName }: { ['taskName']: string }) => {
		setTaskNameToFind(taskName)
	}

	return (
		<Form onFinish={handleFinish}>
			<Form.Item
				name='taskName'
				rules={[
					{
						required: true,
						message: 'Please type your task!'
					}
				]}
				className='mb-0'
			>
				<Popover content='Not work now'>
					<Input.Search
						placeholder='Find a task...'
						autoFocus
						disabled
					/>
				</Popover>
			</Form.Item>
		</Form>
	)
}

export default SearchTask
