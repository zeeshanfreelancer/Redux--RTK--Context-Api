// src/app/reduxStore.js
import { createStore } from "redux";
import { todoReducer } from "../redux/reducer";

export const reduxStore = createStore(todoReducer);
