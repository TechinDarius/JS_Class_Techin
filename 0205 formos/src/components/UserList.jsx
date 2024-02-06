import { getOne } from "../services/get.js";
import { updateData } from "../services/update.js";
import { deleteData } from "./../services/delete.js";

function UserList({ users, setUpdate }) {
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

  const dislikeHandler = async (id)=>{
    const user = await getOne(id);
    const { likes } = user;
    await updateData(id, { likes: likes - 1 });
    setUpdate((update) => update + 1);
  }

  return (
    <>
      {users.map((user) => {
        const { id, userName, email, channel, likes } = user;
        return (
          <div key={id}>
            <h2>{userName}</h2>
            <p>{email}</p>
            <p>{channel}</p>
            <p>{likes}</p>
            <button style={{ marginRight: "10px" }} onClick={()=>dislikeHandler(user.id)}>👎</button>
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
              style={{ marginLeft: "10px" }}
              onClick={() => likesHandler(user.id)}
            >
              👍
            </button>
          </div>
        );
      })}
    </>
  );
}

export default UserList;
