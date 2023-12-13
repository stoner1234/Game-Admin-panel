import { Box, ChakraProvider, Text, VStack } from "@chakra-ui/react";

import LOGO from "@/assets/Logo.png"; // Import your logo image

// import React from "react";

const AdminSidebar = () => {
  return (
    <ChakraProvider>
      <VStack
        className="sideBar_btn_NavLind"
        bg="#2b329b"
        padding="1rem"
        align="center"
        mt="-5rem"
        textColor={"white"}
        h="100vh" // Set the height to 100vh (100% of viewport height)
        minHeight="600px" // Set a minimum height as needed
      >
        <Box>
          <img
            src={LOGO}
            alt="Logo"
            style={{ width: "7rem", height: "7rem", margin: "1rem" }}
          />
        </Box>

        <VStack align="center" mt="-1rem">
          <Text
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: "bold",
              fontSize: "2rem",
              margin: "1rem 0",
            }}
          >
            Admin
          </Text>

          <VStack align="start" ml="2" spacing="2rem">
            {/* Increase spacing here */}
            {[
              "Dashboard",
              "List of Games",
              "List of Users",
              "Profit Loss Report",
              "Bet History",
              "Settings",
              "Log Out",
            ].map((label, index) => (
              <Text key={index}>{label}</Text>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};

export default AdminSidebar;
