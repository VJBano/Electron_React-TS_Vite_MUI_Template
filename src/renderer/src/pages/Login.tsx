import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, SyntheticEvent } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ApiInstance from "@renderer/api/config";
import axios, { type AxiosResponse, type AxiosError } from "axios";
import type { AuthErrResponseType } from "@renderer/interfaces/Axios";


const Login: React.FC = () => {


  const [loginForm, setLoginForm] = useState({ email: "", password: "" });



  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const user = {
        email: loginForm.email,
        password: loginForm.password,
      };

      const data = await ApiInstance.post("/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res: AxiosResponse) => {
          return res.data;
        })
        .catch((err: AxiosError) => {
          return err.response?.status;
        });

      console.log("data: ", data)
      alert(data.message)
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<AuthErrResponseType>;

        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }

      return { errorMessage: "Something Went Wrong" };
    }


  };

  return (
    <Box
      sx={{
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#f0f0f0", // White background for the form
            p: 5,
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            color={"black"}
            sx={{ color: "black" }}
          >
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              InputLabelProps={{ style: { color: "black" } }} // White label text
              InputProps={{
                style: { color: "black", backgroundColor: "white" }, // White input field and black text
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              autoComplete="current-password"
              InputLabelProps={{ style: { color: "black" } }} // White label text
              InputProps={{
                style: { color: "black", backgroundColor: "white" }, // White input field and black text
              }}
            />

            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
