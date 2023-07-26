import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const AboutUsPage = ({ authToken }) => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserDetails = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    setUserDetails(user);
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <div>Loading user details...</div>;
  }

  return (

    <Box
      border="1px solid gray"
      p="4"
      rounded="md"
      shadow="md"
      width="20%"
      margin="auto"
      mt="2rem"
    >
      <Heading as="h2" size="lg" mb="4">
        User Details
      </Heading>
      <Text>
        <strong>Username:</strong> {userDetails.userName}
      </Text>
      <Text>
        <strong>Email:</strong> {userDetails.email}
      </Text>
      <Text>
        <strong>Password:</strong> {userDetails.password}
      </Text>
    </Box>
  );
};

export default AboutUsPage;
