import { observable, computed, action, makeObservable } from 'mobx';

class TodoItemStore {
	id = Math.random();
	title = '';
	finished = false;

	constructor(title) {
		makeObservable(this, {
			title: observable,
			finished: observable,
			toggle: action
		});
		this.title = title;
	}

	toggle() {
		this.finished = !this.finished;
	}
}

class TodoListStore {
	todos = [];
	get unfinishedTodoCount() {
		return this.todos.filter(todo => !todo.finished).length;
	}
	constructor(todos) {
		makeObservable(this, {
			todos: observable,
			unfinishedTodoCount: computed,
			addTodo: action
		});
		this.todos = todos;
	}
	addTodo(title) {
		const newItem = new TodoItemStore(title);
		this.todos.push(newItem);
	}
}
const todoStore = new TodoListStore([new TodoItemStore('Get Coffee'), new TodoItemStore('Write simpler code')]);
export default todoStore;
