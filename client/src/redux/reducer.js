// src/redux/reducer.js
import { ADD_TODO, DELETE_TODO } from "./actions";

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
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
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        )
      };

    default:
      return state;
  }
};
