import {
  Avatar,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <Container p="0" bg="white" textColor="black" maxW="100%">
      <Flex
        justify="flex-end" // Adjusted justify to move elements towards the right
        alignItems="center"
        height={{ base: "20", lg: "20" }}
        px={4} // Adjust the padding as needed
      >
        {/* Logo image */}
        {/* Horizontal text and other elements */}
        <Flex alignItems="center" flex="1" justify="flex-end">
          {/* Adjusted justify */}
          {/* Styled text */}
          <Text fontWeight="bold" textColor={"black"} mr={"7rem"}>
            {/* Added mr to manage space */}
            Hello
            <Text as="span" fontStyle="italic">
              👋 John
            </Text>
          </Text>
          {/* Input search field with hover effect */}
          <HStack width="fit-content" spacing={0} justify="flex-end">
            {" "}
            {/* Adjusted width and spacing */}
            <Input
              placeholder="Search..."
              _hover={{ borderColor: "blue.500" }}
              borderColor="gray.300"
              borderRadius="full"
              p={2}
              mr={"8rem"}
            />
          </HStack>
          {/* Avatar with demo image */}
          <Avatar
            size="md"
            name="John Doe"
            src="https://via.placeholder.com/150"
            ml={"2rem"}
          />
          {/* User Registration Button */}
          <NavLink to="/admin/userregistration">
            <Button
              backgroundColor={"#2b329b"}
              textColor={"white"}
              _hover={{ textColor: "black" }}
              ml={"1rem"}
            >
              Add User Registration
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </Container>
  );
}
