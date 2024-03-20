/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */

import { Container, Typography } from "@mui/material"
import type React from "react"


const App:React.FC = () => {

  return (
    <Container maxWidth={false} disableGutters sx={{width:"100%", display:"flex", justifyContent:"center",}}>
      <Typography onClick={() => alert("Hellos")}>This is Electron React-TS Vite With Material UI</Typography>
    </Container>
  )
}

export default App
