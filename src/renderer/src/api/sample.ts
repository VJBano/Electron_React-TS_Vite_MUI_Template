import axios from "axios";


const API = import.meta.env.VITE_API_URL
export const fetchPost = async () => {
  try {
    const response = await axios.get(API+"/posts");
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

}

