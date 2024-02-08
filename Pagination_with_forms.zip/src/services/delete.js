import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { getOne } from "./get.js";

export const deleteData = async (id) => {
  // const getResponse = await axios.get(`${API_URL}/${id}`);
  const { email } = await getOne(id);

  const confirmed = window.confirm(
    `Ar tikrai norite ištrinti vartotoją ${email}`
  );

  if (!confirmed) return;

  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
