import React, { useReducer } from "react";
import { todoReducer, initialState } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ClearCompleted from "./components/ClearCompleted";
import "./App.scss";

function App() {
	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<div className="App">
			<TodoForm dispatch={dispatch} />
			<ClearCompleted dispatch={dispatch} />
			<TodoList todos={state.todos} dispatch={dispatch} />
		</div>
	);
}

export default App;
