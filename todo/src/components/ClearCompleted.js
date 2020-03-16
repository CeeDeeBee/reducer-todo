import React from "react";

const ClearCompleted = ({ dispatch }) => {
	const handleClick = () => {
		dispatch({ type: "CLEAR_COMPLETED" });
	};

	return (
		<div className="clear-completed-wrapper">
			<button onClick={handleClick}>Clear Completed</button>
		</div>
	);
};

export default ClearCompleted;
