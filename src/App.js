import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };
  const deleteBtn = (event) => {
    const target = event.target.parentElement;
    setToDos(
      toDos.filter((item, index) => {
        return index !== parseInt(target.id);
      })
    );
    console.log(toDos);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write you to do."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index} id={index}>
            {toDo}
            <button onClick={deleteBtn}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
