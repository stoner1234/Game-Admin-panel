// import React from "react";

import {
  Box,
  Heading,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function BetHistory() {
  const games = [
    {
      id: 1,
      name: "Blackjack",
      bets: [
        { playerId: 1, amount: 50 },
        { playerId: 2, amount: 25 },
        // Add more bets for Blackjack
      ],
    },
    {
      id: 2,
      name: "Roulette",
      bets: [
        { playerId: 1, amount: 30 },
        { playerId: 3, amount: 20 },
        // Add more bets for Roulette
      ],
    },
    {
      id: 3,
      name: "Slots",
      bets: [
        { playerId: 2, amount: 10 },
        { playerId: 4, amount: 15 },
        // Add more bets for Slots
      ],
    },
    {
      id: 4,
      name: "Poker",
      bets: [
        { playerId: 3, amount: 40 },
        { playerId: 5, amount: 50 },
        // Add more bets for Poker
      ],
    },
    {
      id: 5,
      name: "Baccarat",
      bets: [
        { playerId: 4, amount: 20 },
        { playerId: 5, amount: 30 },
        // Add more bets for Baccarat
      ],
    },
  ];

  // Calculate total earnings for each game
  const totalEarnings = games.map((game) => ({
    id: game.id,
    name: game.name,
    total: game.bets.reduce((total, bet) => total + bet.amount, 0),
  }));

  // Find the top-earning and least-earning games
  const topGame = totalEarnings.reduce(
    (max, game) => (game.total > max.total ? game : max),
    totalEarnings[0]
  );
  const leastGame = totalEarnings.reduce(
    (min, game) => (game.total < min.total ? game : min),
    totalEarnings[0]
  );

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Bet History
      </Heading>

      {/* Table for each game */}
      {games.map((game) => (
        <Box key={game.id} mb={8}>
          <Heading as="h2" size="md" mb={4}>
            {game.name}
          </Heading>
          <Table variant="simple">
            <TableCaption>
              Total Earnings: $
              {totalEarnings.find((totalGame) => totalGame.id === game.id)
                ?.total || 0}
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Player ID</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {game.bets.map((bet) => (
                <Tr key={bet.playerId}>
                  <Td>{bet.playerId}</Td>
                  <Td>${bet.amount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ))}

      {/* Display top and least earning games */}
      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>
          Top Earning Game
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Game ID</Th>
              <Th>Game Name</Th>
              <Th>Total Earnings</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{topGame.id}</Td>
              <Td>{topGame.name}</Td>
              <Td>${topGame.total}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>
          Least Earning Game
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Game ID</Th>
              <Th>Game Name</Th>
              <Th>Total Earnings</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{leastGame.id}</Td>
              <Td>{leastGame.name}</Td>
              <Td>${leastGame.total}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
