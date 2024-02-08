import Form from "./components/Form";
import UsersList from "./components/UsersList";
import { useState, useEffect } from "react";
// import axios from "axios";
import { RiseLoader } from "react-spinners";
import { getAllDataPaginated } from "./services/get.js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//import { LocalFireDepartmentOutlined } from "@mui/icons-material";

// const API_URL = "http://localhost:3000/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const changePerPageHandler = (e) => setPerPage(Number(e.target.value));
  //console.log(perPage);
  const fetchData = async () => {
    try {
      const response = await getAllDataPaginated(page,perPage);
      const { data, items } = response.data;

      setUsers(data);
      setTotal(items);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update, page, perPage]);
  return (
    <>
      <Form setUpdate={setUpdate} />
      {!error && !isLoading && (
        <UsersList users={users} setUpdate={setUpdate} />
      )}
      {isLoading && <RiseLoader />}
      {error && <p>{error}</p>}

      <div style={{ color: "blue", marginBottom: "0px" }}>
        Po kiek irasu rodyti:
        <select style={{ margin: "20px" }} onChange={changePerPageHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
        </select>
      </div>

      <Stack style={{ margin: "20px" }} spacing={2}>
        <Pagination
          count={
            total % perPage == 0
              ? total / perPage
              : Math.floor(total / perPage) + 1
          }
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </Stack>
    </>
  );
}

export default App;
