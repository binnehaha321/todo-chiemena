import { FloatButton } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useTodo } from '../../../context/TodoContext'

const AddButton = () => {
	const { setNewTaskModal } = useTodo()

	return (
		<FloatButton
			icon={<PlusOutlined />}
			tooltip='New task'
			onClick={() => setNewTaskModal(true)}
		/>
	)
}

export default AddButton
