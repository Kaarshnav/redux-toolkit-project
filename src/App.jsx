import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDos, removeToDos } from "./store/slices/toDoSlice";

function App() {
  const [toDo, setToDo] = useState("");
  const dispatch = useDispatch();
  const allToDos = useSelector((state) => state.toDo.toDos);

  const handleAddToDo = () => {
    if (toDo.trim().length === 0) return;
    dispatch(addToDos(toDo));
    setToDo("");
  };

  const handleRemoveToDo = (id) => {
    dispatch(removeToDos(id));
  };

  return (
    <div className="container">
      <h2 className="title">Todo App</h2>

      <div className="input-box">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="btn add-btn" onClick={handleAddToDo}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {allToDos?.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              className="btn remove-btn"
              onClick={() => handleRemoveToDo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
