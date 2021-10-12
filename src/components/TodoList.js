import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Input from './Input';

const TodoItem = observer(({ todo }) => (
	<li>
		<input type="checkbox" checked={todo.finished} onChange={() => todo.toggle()} />
		{todo.title}
	</li>
));

// function component 用法
const TodoList = inject('TodoStore')(
	observer(({ TodoStore }) => {
		const onSubmitTitle = title => {
			TodoStore.addTodo(title);
		};
		return (
			<div>
				<Input submitTitle={onSubmitTitle} />
				<ul>
					{TodoStore.todos.map(todo => (
						<TodoItem todo={todo} key={todo.id} />
					))}
				</ul>
				Tasks left: {TodoStore.unfinishedTodoCount}
			</div>
		);
	})
);
// class component 用法
/* const TodoList = inject('TodoStore')(
	observer(
		class TodoList extends Component {
			render() {
				const { todos, unfinishedTodoCount } = this.props.TodoStore;
				return (
					<div>
						<ul>
							{todos.map(todo => (
								<TodoItem todo={todo} key={todo.id} />
							))}
						</ul>
						Tasks left: {unfinishedTodoCount}
					</div>
				);
			}
		}
	)
); */

export default TodoList;
