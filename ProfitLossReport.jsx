// import React from "react";

import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function ProfitLossReport() {
  const gamesData = [
    { name: "Blackjack", wagered: 15000, winnings: 12000, profitLoss: -3000 },
    { name: "Roulette", wagered: 10000, winnings: 11500, profitLoss: 1500 },
    { name: "Slots", wagered: 20000, winnings: 18000, profitLoss: -2000 },
    { name: "Poker", wagered: 25000, winnings: 30000, profitLoss: 5000 },
    { name: "Baccarat", wagered: 12000, winnings: 10000, profitLoss: -2000 },
  ];

  const totalSummary = {
    totalDeposits: 82000,
    totalWinnings: 81500,
    totalWithdrawals: -25000,
    netProfitLoss: 34500,
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Profit-Loss Report
      </Heading>

      {/* Game-wise breakdown */}
      <Box mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Game-wise Breakdown
        </Heading>
        <Table variant="simple" borderWidth="1px" borderRadius="lg">
          <Thead>
            <Tr>
              <Th>Game</Th>
              <Th>Total Wagered</Th>
              <Th>Total Winnings</Th>
              <Th>Net Profit/Loss</Th>
            </Tr>
          </Thead>
          <Tbody>
            {gamesData.map((game, index) => (
              <Tr key={index}>
                <Td>{game.name}</Td>
                <Td>${game.wagered}</Td>
                <Td>${game.winnings}</Td>
                <Td>${game.profitLoss}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Money Details */}
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Money Details
        </Heading>
        <Box mb={4}>
          <Heading as="h3" size="sm" mb={2}>
            Profit
          </Heading>
          <Table variant="simple" borderWidth="1px" borderRadius="lg">
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Total Deposits</Td>
                <Td>${totalSummary.totalDeposits}</Td>
              </Tr>
              <Tr>
                <Td>Total Winnings</Td>
                <Td>${totalSummary.totalWinnings}</Td>
              </Tr>
              <Tr>
                <Td>Total Withdrawals</Td>
                <Td>${totalSummary.totalWithdrawals}</Td>
              </Tr>
              <Tr>
                <Td>Net Profit</Td>
                <Td>${totalSummary.netProfitLoss}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
