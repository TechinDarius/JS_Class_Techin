import { useState } from "react";
import { getOne } from "../services/get.js";
import { updateData } from "../services/update.js";
import { deleteData } from "./../services/delete.js";
import Form from "./Form.jsx";

function User({ user, setUpdate }) {
  const { id, userName, email, channel, likes } = user;
  const [edit, setEdit] = useState(false);

  const deleteHandler = async (id) => {
    await deleteData(id);
    setUpdate((update) => update + 1);
  };

  const likesHandler = async (id) => {
    const user = await getOne(id);
    const { likes } = user;
    await updateData(id, { likes: likes + 1 });
    setUpdate((update) => update + 1);
  };

  const dislikeHandler = async (id) => {
    const user = await getOne(id);
    const { likes } = user;
    await updateData(id, { likes: likes - 1 });
    setUpdate((update) => update + 1);
  };
  return (
    <div key={id}>
      <h2>{userName}</h2>
      <p>{email}</p>
      <p>{channel}</p>
      <p>{likes}</p>
      <button
        style={{ marginRight: "18px" }}
        onClick={() => dislikeHandler(user.id)}
      >
        👎
      </button>
      <button
        style={{
          height: "23px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "15px",
          border: "1px solid red",
        }}
        onClick={() => deleteHandler(user.id)}
      >
        &times;
      </button>
      <button
        style={{ marginLeft: "18px" }}
        onClick={() => likesHandler(user.id)}
      >
        👍
      </button>
      <br />
      <button
        style={{ marginBlock: "4px", height: "30px" }}
        onClick={() => {
          setEdit((edit) => !edit);
        }}
      >
        ✎ Edit user details
      </button>
      {edit && <Form user={user} setUpdate={setUpdate} setEdit={setEdit}/>}
    </div>
  );
}

export default User;
