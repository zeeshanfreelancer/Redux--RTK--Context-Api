import { createContext, useReducer } from "react";
import {
  ADD_TODO,
  DELETE_TODO,
  initialState,
  todoReducer
} from "../useReducer/todoReducer";

export const TodoUseReducerContext = createContext();

export const TodoUseReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: ADD_TODO, payload: text });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <TodoUseReducerContext.Provider
      value={{ todos: state.todos, addTodo, deleteTodo }}
    >
      {children}
    </TodoUseReducerContext.Provider>
  );
};
