import TodoList from './components/TodoList'
import TodoProvider from './context/TodoContext/Provider'

function App() {
	return (
		<TodoProvider>
			<TodoList />
		</TodoProvider>
	)
}

export default App
