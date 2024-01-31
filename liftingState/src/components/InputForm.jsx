import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function InputForm({ addFruit }) {
  const [value, setValue] = useState("");
  const setFruitHandler = (e) => {
    setValue(e.target.value);
  };
  const addFruitToListHandler = () => {
    addFruit(value);
    setValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30vw",
        gap: "10px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={setFruitHandler}
        value={value}
      />
      <Button variant="contained" onClick={addFruitToListHandler}>
        ADD
      </Button>
    </div>
  );
}

export default InputForm;
