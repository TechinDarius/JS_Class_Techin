import "./App.css";

import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  // State stringas
  const [name, setName] = useState("Name");

  const clickHandler = () => {
    setName(() => "Ana");
  };

  const bookChangeHandler = () => {
    setBook((book) => {
      return {
        ...book,
        author: "J.K Rowling",
      };
    });
  };
  // state masyvas
  const [book, setBook] = useState({
    title: "Harry Potter",
    author: "JK Rowling",
  });

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTaskHandler = () => {
    let trimedTask = task.trim();
    if (trimedTask === "") {
      setTask("");
      return;
    }
    setTasks([...tasks, trimedTask]);
    setTask("");
  };
const deleteHandler=(task)=>{
// const filteredTasks=tasks.filter((t)=>t!=task);
// setTasks(filteredTasks);
setTasks(tasks.filter((t)=>t!=task));
}; return (
    <>
      {" "}
      <div
        className="simpleState"
        style={{
          backgroundColor: "gray",
          padding: "20px",
          marginBlock: "20px",
        }}
      >
        {name}
      </div>
      <button onClick={clickHandler}> Click</button>
      <div className="objectState">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <button onClick={bookChangeHandler}>Push</button>
      </div>
      <div className="arrayState">
        <h1>Task list</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTaskHandler}>Add text</button>
      </div>
      <div className="taskLists">
        {tasks.map((task) => (
          <p key={nanoid()}>
            <span>{task}</span>
            <span>
              <button
                onClick={() => {
                  deleteHandler(task);
                }}
              >
                Delete
              </button>
            </span>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
