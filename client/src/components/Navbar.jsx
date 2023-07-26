import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box width="14%" margin="auto" p={2}>
      <Link to="/">
        <Button colorScheme="blue" marginRight="15" ml="8">
          Signup
        </Button>
      </Link>
      <Link to="/login">
        <Button colorScheme="green">Login</Button>
      </Link>
    </Box>
  );
};

export default Navbar;
