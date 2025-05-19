/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */

import { Container } from "@mui/material"
import type React from "react"

import Login from "./pages/Login";
import { useEffect, useState } from "react";
import ApiInstance from "./api/config";
import { fetchTodos } from "./api/sample";


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const App:React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

useEffect(() => {

  fetchTodos().then((res) => {
    setTodos(res)
  })

},[])

  return (
    <Container maxWidth={false} disableGutters sx={{width:"100%", display:"flex", justifyContent:"center",}}>

     {todos.map((i) => {

      return (<p key={i.id}>{i.title}</p>)

     })}
    </Container>
  )
}

export default App
