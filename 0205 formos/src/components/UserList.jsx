import User from "./user.jsx";

function UserList({ users, setUpdate }) {
  return (
    <>
      {users.map((user) => {
        return <User user={user} key={user.id} setUpdate={setUpdate} />;
      })}
    </>
  );
}

export default UserList;
