import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
// import { observer } from 'mobx-react';

// 1. 初始化 mobx 容器仓库
/* class Store {
	count = 0;
	constructor() {
		// 观察全部数据
		makeAutoObservable(this);
		makeObservable(this, {
			count: observable,
			increment: action
		});
	}
	// action
	increment() {
		this.count++;
	}
}
const store = new Store(); */

/* const App = observer(props => {
	const { store } = props;
	return (
		<div>
			<h1>App Component</h1>
			<p>{store.count}</p>
			<p>
				<button onClick={() => store.increment()}>Increment</button>
			</p>
		</div>
	);
}); */
ReactDOM.render(
	<React.StrictMode>
		{/* <App store={store} /> */}
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
