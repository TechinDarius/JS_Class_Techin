// 1. Build Search filter in React  

// React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user. 
// The following are the steps to create a Search filter using React JS: 
// Declare React states for search input values. 
// Create HTML input text for entering search term and update state in onChange function. 
// Add Array.filter() on list of items with search term value. 

import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const initialFruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [fruits, setFruits] = useState(initialFruits);
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    setFruits(initialFruits.filter((f) => f.toLowerCase().includes(searchValue.toLowerCase())));
  };

  const refreshHandler = () => {
    setFruits(initialFruits);
    setSearchValue("");
  };

  return (
    <>
      <div>
        Search:{" "}
        <input
          type="text"
          placeholder="Enter your text..."
          value={searchValue}
          onChange={searchHandler}
        />
        <button onClick={refreshHandler}>Refresh</button>
        <ul>
          {fruits.map((f) => {
            return <li key={nanoid()}>{f}</li>;
          })}
        </ul>
      </div>
    </>
  );
}


export default App;