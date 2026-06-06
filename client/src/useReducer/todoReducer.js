export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const initialState = {
  todos: []
};

export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      if (!action.payload.trim()) return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload }
        ]
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    default:
      return state;
  }
}
