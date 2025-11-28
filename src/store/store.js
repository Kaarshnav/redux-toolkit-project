import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../store/slices/toDoSlice";
const store = configureStore({
  reducer: { toDo: toDoReducer },
});
export default store;
