import {
  Avatar,
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./Adminsidebar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  // Sample data for Trending Games table
  const trendingGamesData = [
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Game 1
      gameName: "Game 1",
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Game 2
      gameName: "Game 2",
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Game 3
      gameName: "Game 3",
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Game 4
      gameName: "Game 4",
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Game 5
      gameName: "Game 5",
    },
  ];
  // Sample data for Top Players table
  const topPlayersData = [
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Player 1
      playerName: "Player 1",
      uid: "12345",
      totalWinnings: 5000,
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Player 2
      playerName: "Player 2",
      uid: "67890",
      totalWinnings: 8000,
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Player 3
      playerName: "Player 3",
      uid: "54321",
      totalWinnings: 3000,
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Player 4
      playerName: "Player 4",
      uid: "98765",
      totalWinnings: 6000,
    },
    {
      avatar: "https://via.placeholder.com/50", // Replace with the actual avatar URL for Player 5
      playerName: "Player 5",
      uid: "45678",
      totalWinnings: 7000,
    },
  ];

  return (
    <Flex direction="column" height="100vh" marginX="auto">
      {/* Navbar */}
      <Box>
        <AdminNavbar />
      </Box>
      {/* Main Content */}
      <Flex flexGrow={1}>
        {/* Sidebar */}
        <Box flexBasis={{ base: "100%", md: "20%" }}>
          <AdminSidebar />
        </Box>

        {/* Main Content */}
        <Box
          bg={"white"}
          flexBasis={{ base: "100%", md: "80%" }}
          p="4" // Adjust padding as needed
        >
          {/* Outlet for other content */}
          <Outlet />

          {/* New Column with 4 Boxes */}
          <Flex mt="4" justify="space-between">
            {[
              { content: "750K", label: "Active User" },
              { content: "7500", label: "Paid User" },
              { content: "7500", label: "Total Active User Today" },
              { content: "200M", label: "Total Revenue" },
            ].map((box, index) => (
              <Box key={index} bg="gray.200" p="4" borderRadius="md">
                <VStack spacing="2">
                  <Text fontWeight="bold" fontSize="lg">
                    {box.content}
                  </Text>
                  <Text>{box.label}</Text>
                </VStack>
              </Box>
            ))}
          </Flex>
          {/* End of New Column */}

          {/* Trending Games Table */}
          <Box mt="4">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Trending Games
            </Text>
            <Table
              variant="striped"
              width="100%"
              borderWidth="1px"
              borderRadius="md"
            >
              <Thead>
                <Tr>
                  <Th>Game Avatar</Th>
                  <Th>Game Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {trendingGamesData.map((game, index) => (
                  <Tr key={index}>
                    <Td>
                      <Avatar src={game.avatar} name={game.gameName} />
                    </Td>
                    <Td>{game.gameName}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          {/* End of Trending Games Table */}
          {/* Top Players Table */}
          <Box mt="4">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Top Players
            </Text>
            <Table
              variant="striped"
              width="100%"
              borderWidth="1px"
              borderRadius="md"
            >
              <Thead>
                <Tr>
                  <Th>Player Avatar</Th>
                  <Th>Player Name</Th>
                  <Th>UID</Th>
                  <Th>Total Winnings</Th>
                </Tr>
              </Thead>
              <Tbody>
                {topPlayersData.map((player, index) => (
                  <Tr key={index}>
                    <Td>
                      <Avatar src={player.avatar} name={player.playerName} />
                    </Td>
                    <Td>{player.playerName}</Td>
                    <Td>{player.uid}</Td>
                    <Td>{player.totalWinnings}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          {/* End of Top Players Table */}
        </Box>
      </Flex>
    </Flex>
  );
}
