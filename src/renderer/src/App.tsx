/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */

import { Container, Typography } from "@mui/material"
import type React from "react"
import { useState } from "react";
import { fetchPost } from "./api/sample";

const App:React.FC = () => {

  const [posts, setPosts] = useState<any[]>([]);


   const fetchData = async () =>  {
      try {
        const posts = await fetchPost();
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }



  return (
    <Container maxWidth={false} disableGutters sx={{width:"100%", display:"flex", justifyContent:"center",}}>
      <Typography onClick={() => alert("Hellos")}>This is Electron React-TS Vite With Material UI</Typography>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => fetchData()}>
        click me
      </button>
    </Container>
  )
}

export default App
