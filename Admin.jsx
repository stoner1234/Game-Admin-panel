import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import AdminNavbar from "./AdminNavbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your logic for admin login here
  };

  return (
    // <AdminNavbar />
    <Flex
      align="center"
      justify="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        marginTop="-20rem"
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <NavLink to="/admin/dashboard">
            <Button colorScheme="teal" width="full" mt={4} type="submit">
              Submit
            </Button>
          </NavLink>
        </form>
      </Box>
    </Flex>
  );
}
