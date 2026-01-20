// src/app/rtkStore.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/rtkTodos/todoSlice";

export const rtkStore = configureStore({
  reducer: {
    todos: todoReducer
  }
});
