import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: inputValue });
		setInputValue("");
	};

	return (
		<div className="todo-form">
			<form onSubmit={handleSubmit}>
				<label htmlFor="todoInput">New Todo</label>
				<input
					type="text"
					id="todoInput"
					placeholder="New Todo"
					value={inputValue}
					onChange={handleChange}
				/>
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

export default TodoForm;
