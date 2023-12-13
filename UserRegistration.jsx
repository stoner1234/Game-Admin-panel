import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";

// import AdminNavbar from "./AdminNavbar";


export default function UserRegistration() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    uid: "",
    coins: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* <AdminNavbar /> */}
      <Box
        p={4}
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="-2rem"
      >
        <VStack spacing={4} width="400px">
          {/* Email */}
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

          {/* Password */}
          <FormControl>
            <FormLabel>PassWord</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.coins}
              onChange={handleInputChange}
              placeholder="*******"
            />
          </FormControl>

          {/* Name */}
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </FormControl>

          {/* UID */}
          <FormControl>
            <FormLabel>UID</FormLabel>
            <Input
              type="text"
              name="uid"
              value={formData.uid}
              onChange={handleInputChange}
              placeholder="Enter your UID"
            />
          </FormControl>

          {/* Coins */}
          <FormControl>
            <FormLabel>Coins</FormLabel>
            <Input
              type="number"
              name="coins"
              value={formData.coins}
              onChange={handleInputChange}
              placeholder="Enter your coins"
            />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="teal" onClick={handleSubmit} width="100%">
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
}
