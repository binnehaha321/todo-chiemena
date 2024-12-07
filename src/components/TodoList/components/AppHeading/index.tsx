import { useTodo } from '../../../../context/TodoContext'

const AppHeading = () => {
	const {
		todos: { length: todoLength }
	} = useTodo()

	return (
		<p className='text-2xl text-center text-slate-50 font-semibold mb-5'>
			You have <span>{todoLength}</span> tasks to complete
		</p>
	)
}

export default AppHeading
