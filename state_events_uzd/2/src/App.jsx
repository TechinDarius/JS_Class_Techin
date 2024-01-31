import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    setName(e.target.value);
  };
  const clickHandler = () => {
    alert(`Hello, ${name}`);
  };
  return (
    <>
      <h1>Easy name input form:</h1>
      <p>
        Enter your name{" "}
        <input type="text" value={name} onChange={submitHandler} />
        <button onClick={clickHandler} style={{ marginLeft: "20px" }}>
          Submit
        </button>
      </p>
    </>
  );
}

export default App;

// function App() {
//   const initialNumber = 0;
//   const [number, setNumber] = useState(initialNumber);
//   const plusHandler = () => {
//     setNumber(number + 1);
//   };
//   const minusHandler = () => {
//     setNumber(number - 1);
//   };
//   const resetHandler = () => {
//     setNumber(initialNumber);
//   };
//   return (
//     <div>
//       <h1>Counter:</h1>
//       <button onClick={plusHandler} style={{ marginRight: "20px" }}>
//         +1
//       </button>
//       <span style={{ color: number < 0 ? "#ff0000" : "#000" }}>{number}</span>
//       <button onClick={minusHandler} style={{ marginLeft: "20px" }}>
//         -1
//       </button>
//       <p>
//         <button onClick={resetHandler} style={{ width: "110px" }}>
//           RESET
//         </button>
//       </p>
//     </div>
//   );
// }

// export default App;
