import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ dispatch }) => {
	const [inputValue, setInputValue] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleChange = e => {
		setInputValue(e.target.value);
	};

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			type: "ADD_TODO",
			payload: { item: inputValue, dueDate: selectedDate }
		});
		setInputValue("");
		setSelectedDate(new Date());
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
				<DatePicker selected={selectedDate} onChange={handleDateChange} />
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

export default TodoForm;
