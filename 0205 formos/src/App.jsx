import { useState, useEffect } from "react";
import Form from "./components/Form";
import UserList from "./components/userList";
import { ClimbingBoxLoader } from "react-spinners";
import { getAllData } from "./services/get.js";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      <Form setUpdate={setUpdate}/>
      {!error && !isLoading && <UserList users={users}  setUpdate={setUpdate}/>}
      {isLoading && <ClimbingBoxLoader color="#36d7b7" size={24} />}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
