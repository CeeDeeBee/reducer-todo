import React from "react";

const Todo = ({ todo, dispatch }) => {
	return (
		<div
			className={`todo${todo.completed ? " completed" : ""}${
				todo.dueDate.getDate() < new Date().getDate() ? " overdue" : ""
			}`}
			onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })}
		>
			<input type="checkbox" checked={todo.completed} readOnly />
			<p className="todo-item">{todo.item}</p>
			<p className="due-date">
				{todo.dueDate.getMonth() + 1}/{todo.dueDate.getDate()}/
				{todo.dueDate.getFullYear()}
			</p>
		</div>
	);
};

export default Todo;
