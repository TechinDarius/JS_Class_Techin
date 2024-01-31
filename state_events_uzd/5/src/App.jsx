import { useState } from "react";
import "./App.css";
// Character Counter: Develop a character counter for a text input field using the useState hook. It should display the number of characters as the user types.
function App() {
  const [symbols, setSymbol] = useState("");
  const countSymbolHandler = (e) => 
    setSymbol(e.target.value);
  
  return (
    <div>
      <input type="text" value={symbols} onChange={countSymbolHandler} />
      <p>Count: {symbols.length}</p>
    </div>
  );
}

export default App;
