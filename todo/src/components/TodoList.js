import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, dispatch }) => {
	return (
		<div className="todo-list">
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} dispatch={dispatch} />
			))}
		</div>
	);
};

export default TodoList;
