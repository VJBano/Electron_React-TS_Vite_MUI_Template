import axios from "axios";


const API = import.meta.env.VITE_BASE_URL;

const ApiInstance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default ApiInstance
