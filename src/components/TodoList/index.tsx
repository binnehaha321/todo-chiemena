import { Divider, Space } from 'antd'
import AppHeading from './components/AppHeading'
import Todos from './components/Todos'
import SearchTask from '../SearchTask'
import Filter from './components/Filter'
import AddButton from '../NewTask/AddButton'
import NewTask from '../NewTask'

const TodoList = () => {
	return (
		<div className='w-50 flex justify-center mt-10'>
			<Space.Compact direction='vertical'>
				<AppHeading />
				<div className='p-3 rounded-md bg-slate-100'>
					<SearchTask />
					<Divider
						dashed
						rootClassName='bg-slate-200 my-3'
					/>
					<Filter />
					<Todos />
				</div>
			</Space.Compact>
			<AddButton />
			<NewTask />
		</div>
	)
}

export default TodoList
