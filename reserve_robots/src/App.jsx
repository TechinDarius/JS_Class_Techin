import { useState } from "react";

import "./App.css";
import Robots from "./components/Robots.jsx";
import Search from "./components/Search";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const searchValueHandler = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="mainContainer">
      <h1>ROBOFRIENDS</h1>
      <p>
        <Search searchValueHandler={searchValueHandler}/>
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px",
          gap: "50px",
        }}
      >
        <Robots searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
