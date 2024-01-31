import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("ON");
  const statusHandler = () => {
    if (status === "ON") setStatus("OFF");
    else if (status === "OFF") setStatus("ON");
  };

  return (
    <div>
      <button onClick={statusHandler} style={{ color: status === "ON" ? "red" : "blue" }}>{status}</button>
    
    </div>
  );
}

export default App;
