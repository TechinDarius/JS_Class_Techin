import { useState } from "react";
import InputForm from "./components/InputForm";
import FruitsList from "./components/FruitsList";

function App() {
  const [fruits, setFruits] = useState(["1", "2"]);

  const addFruitToList = (enteredFruitTitle) => {
    setFruits((fruits) => [...fruits, enteredFruitTitle]);

  };
  const deleteFruitsHandler = (fruitTitle) => {
    let confirmation = window.confirm(
      `Are you sure? You will delete ${fruitTitle}`
    );
    if (!confirmation) return;
    else {
      setFruits(fruits.filter((fruit) => fruit !== fruitTitle));
    }
  };
  const editFruitHandler = (fruitTitle) => {
    setFruits(
      fruits.map((fruit) => {
        if (fruit === fruitTitle) return `Edited${fruit}`;
        else {
          return  fruit ;
        }
      })
    );
  };
  return (
    <>
      <InputForm addFruit={addFruitToList} />
      <FruitsList
        fruitsList={fruits}
        deleteFromList={deleteFruitsHandler}
        editFruit={editFruitHandler}
      />
    </>
  );
}

export default App;
