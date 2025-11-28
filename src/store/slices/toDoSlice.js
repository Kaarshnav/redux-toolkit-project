import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialSate = {
  toDos: [{ id: nanoid(), text: "Dummy text" }],
};
const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialSate,
  reducers: {
    addToDos: (state, action) => {
      console.log(state.toDos, action.payload);
      const currentTodo = { id: nanoid(), text: action.payload };
      state.toDos.push(currentTodo);
    },
    removeToDos: (state, action) => {
      console.log(action, state.toDos);
      state.toDos = state.toDos.filter((todo) => todo.id != action.payload);
    },
  },
});
export const { addToDos, removeToDos } = toDoSlice.actions;
export default toDoSlice.reducer;
