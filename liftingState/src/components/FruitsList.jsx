import Counter from "./Counter";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material/";
import Button from "@mui/material/Button";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { nanoid } from "nanoid";
function FruitsList({ fruitsList, deleteFromList, editFruit }) {
  const jsx = fruitsList.map((fruit) => {
    return (
      <List key={nanoid()}>
        <ListItem disablePadding>
          <Button variant="outlined" onClick={() => editFruit(fruit)}>
            Edit
          </Button>
          <ListItemButton>
            <ListItemIcon onClick={() => deleteFromList(fruit)}>
              <DeleteForeverTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={fruit} />
          </ListItemButton>
        </ListItem>
      </List>
    );
  });
  const counter = fruitsList.length;
  return (
    <div>
      <div>{jsx}</div>
      <Counter count={counter}/>
    </div>
  );
}

export default FruitsList;
