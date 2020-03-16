export const initialState = {
    todos: [{
            item: "Learn About Reducers",
            completed: false,
            id: 1
        },
        {
            item: "Finish Project",
            completed: false,
            id: 2
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case "TOGGLE_COMPLETED":
            return {
                todos: state.todos.map(todo => {
                    return todo.id === action.payload ? {
                            ...todo,
                            completed: !todo.completed
                        } :
                        todo;
                })
            };
        case "CLEAR_COMPLETED":
            return {
                todos: state.todos.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
};