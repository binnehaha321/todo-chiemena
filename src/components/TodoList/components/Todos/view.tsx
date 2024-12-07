import { Empty, Flex, Space } from 'antd'
import { TodoProps } from './type'
import SingleTask from '../SingleTask'
import { formatGroupingText } from './service'

interface Props {
	todos: TodoProps[]
}

const ViewTodos = ({ todos }: Props) => {
	return (
		<Flex
			vertical
			className='my-5 space-y-5 w-full max-h-[60dvh] lg:max-h-[30rem] overflow-y-auto'
		>
			{!todos.length ? (
				<Empty />
			) : (
				todos.map((group) => (
					<Space.Compact
						key={group.groupBy}
						direction='vertical'
					>
						<p
							className='font-medium text-lg'
							style={{ textTransform: 'uppercase' }}
						>
							{formatGroupingText(group.groupBy)}
						</p>
						{!group.todos.length ? (
							<Empty />
						) : (
							group.todos.map((todo) => (
								<SingleTask
									key={todo.id}
									todo={todo}
								/>
							))
						)}
					</Space.Compact>
				))
			)}
		</Flex>
	)
}

export default ViewTodos
