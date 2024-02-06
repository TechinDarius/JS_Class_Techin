import { useState } from "react";

function Search({ searchValueHandler }) {
  const [inputValue, setInputValue] = useState("");

  const inputValueSeter = (e) => {
    setInputValue(e.target.value);
    searchValueHandler(inputValue);
  };

  return (
    <>
      <input
        onChange={inputValueSeter}
        value={inputValue}
        type="text"
        placeholder="Enter robot name..."
      />
    </>
  );
}

export default Search;
