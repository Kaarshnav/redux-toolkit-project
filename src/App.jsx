import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDos, removeToDos } from "./store/slices/toDoSlice";

function App() {
  const [toDo, setToDo] = useState("");
  const dispatch = useDispatch();
  const allToDos = useSelector((state) => state.toDo.toDos);
  const handleToDoChange = (e) => {
    setToDo(e.target.value);
  };
  const handleAddToDo = () => {
    dispatch(addToDos(toDo));
  };
  const handleRemoveToDo = (id) => {
    dispatch(removeToDos(id));
  };

  console.log(allToDos);
  return (
    <>
      <input onChange={handleToDoChange}></input>
      <button onClick={handleAddToDo}>Add</button>

      <ul>
        {allToDos?.map((todo) => (
          <div style={{ display: "flex", width: "50" }}>
            <li style={{ marginRight: "10px", padding: "10px" }}>
              {todo.text}
            </li>
            <button onClick={() => handleRemoveToDo(todo.id)}>remove</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
