import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          userName,
          password,
        }
      );

      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData.data));
      alert("Login successFull!");
      navigate("/userdetails");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid Details");
    }
  };

  return (
    <Box
      w="30%"
      margin="auto"
      p={6}
      border="1px solid black"
      my={6}
      shadow="md"
      rounded="md"
    >
      <Heading textAlign="center">Login</Heading>
      <form onSubmit={handleLogin}>
        <FormControl mb={2}>
          <FormLabel>Username:</FormLabel>
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl mb={2}>
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="green">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
