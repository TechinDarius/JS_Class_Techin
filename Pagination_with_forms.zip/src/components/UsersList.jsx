import { deleteData } from "./../services/delete.js";
import { getOne } from "./../services/get.js";
import { updateData } from "./../services/update.js";

function UsersList({ users, setUpdate }) {
  
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
            <button onClick={() => deleteHandler(id)}>X Delete</button>
            <button onClick={() => likesHandler(id)}>Like</button>
          </div>
        );
      })}
    </>
  );
}

export default UsersList;
