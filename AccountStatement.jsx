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

// import React from "react";

export default function AccountStatement() {
  const users = [
    {
      id: 1,
      username: "user1",
      balance: 100,
      transactions: [
        {
          date: "2023-01-01 12:00 PM",
          description: "Initial Deposit",
          type: "Deposit",
          amount: 100,
          balance: 100,
        },
        {
          date: "2023-01-02 02:30 PM",
          description: "Game Winnings",
          type: "Win",
          amount: 50,
          balance: 150,
        },
        {
          date: "2023-01-03 03:45 PM",
          description: "Game Loss",
          type: "Loss",
          amount: 25,
          balance: 125,
        },
        {
          date: "2023-01-04 05:30 PM",
          description: "Withdrawal",
          type: "Withdrawal",
          amount: 20,
          balance: 105,
        },
      ],
    },
    {
      id: 2,
      username: "user2",
      balance: 50,
      transactions: [
        {
          date: "2023-01-01 01:00 PM",
          description: "Initial Deposit",
          type: "Deposit",
          amount: 50,
          balance: 50,
        },
        {
          date: "2023-01-02 04:15 PM",
          description: "Game Loss",
          type: "Loss",
          amount: 30,
          balance: 20,
        },
        {
          date: "2023-01-03 06:45 PM",
          description: "Withdrawal",
          type: "Withdrawal",
          amount: 10,
          balance: 10,
        },
      ],
    },
    {
      id: 3,
      username: "user3",
      balance: 200,
      transactions: [
        {
          date: "2023-01-01 02:30 PM",
          description: "Initial Deposit",
          type: "Deposit",
          amount: 200,
          balance: 200,
        },
        {
          date: "2023-01-02 05:45 PM",
          description: "Game Winnings",
          type: "Win",
          amount: 100,
          balance: 300,
        },
        {
          date: "2023-01-03 06:30 PM",
          description: "Game Loss",
          type: "Loss",
          amount: 50,
          balance: 250,
        },
        {
          date: "2023-01-04 08:00 PM",
          description: "Withdrawal",
          type: "Withdrawal",
          amount: 30,
          balance: 220,
        },
      ],
    },
    {
      id: 4,
      username: "user4",
      balance: 75,
      transactions: [
        {
          date: "2023-01-01 03:45 PM",
          description: "Initial Deposit",
          type: "Deposit",
          amount: 75,
          balance: 75,
        },
        {
          date: "2023-01-02 07:00 PM",
          description: "Game Winnings",
          type: "Win",
          amount: 25,
          balance: 100,
        },
        {
          date: "2023-01-03 09:15 PM",
          description: "Withdrawal",
          type: "Withdrawal",
          amount: 15,
          balance: 85,
        },
      ],
    },
    {
      id: 5,
      username: "user5",
      balance: 300,
      transactions: [
        {
          date: "2023-01-01 04:15 PM",
          description: "Initial Deposit",
          type: "Deposit",
          amount: 300,
          balance: 300,
        },
        {
          date: "2023-01-02 08:15 PM",
          description: "Game Loss",
          type: "Loss",
          amount: 75,
          balance: 225,
        },
        {
          date: "2023-01-03 09:00 PM",
          description: "Game Winnings",
          type: "Win",
          amount: 50,
          balance: 275,
        },
        {
          date: "2023-01-04 10:30 PM",
          description: "Withdrawal",
          type: "Withdrawal",
          amount: 40,
          balance: 235,
        },
      ],
    },
    // Add more users with transactions
  ];

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Account Statement
      </Heading>
      {users.map((user) => (
        <Box key={user.id} mb={8}>
          <Heading as="h2" size="md" mb={4}>
            {user.username}
          </Heading>
          <Table variant="simple">
            <TableCaption>Account Balance: ${user.balance}</TableCaption>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Balance</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user.transactions.map((transaction) => (
                <Tr key={transaction.date}>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.description}</Td>
                  <Td>{transaction.type}</Td>
                  <Td>${transaction.amount}</Td>
                  <Td>${transaction.balance}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ))}
    </Box>
  );
}
