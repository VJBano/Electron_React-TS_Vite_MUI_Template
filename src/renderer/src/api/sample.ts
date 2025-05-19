import axios from "axios";


const API = import.meta.env.VITE_API_URL

export const fetchTodos = async () => {
  try {
    const response = await axios.get(API+"/todos");
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

}

