import TodoList from './components/TodoList';
import { Provider, observer } from 'mobx-react';
import { TodoStore } from './stores';

const stores = { TodoStore };
const App = observer(() => {
	return (
		<Provider {...stores}>
			<div className="App">
				<h1>use mobx implement todo list</h1>
				<TodoList />
			</div>
		</Provider>
	);
});

export default App;
