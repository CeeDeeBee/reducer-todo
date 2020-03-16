import React from "react";

const Todo = ({ todo, dispatch }) => {
	return (
		<div
			className={`todo${todo.completed ? " completed" : ""}`}
			onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })}
		>
			<input type="checkbox" checked={todo.completed} readOnly />
			<p>{todo.item}</p>
		</div>
	);
};

export default Todo;
