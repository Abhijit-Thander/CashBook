import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { transaction } from "../utils/TransactionData";
import TransactionItem from "./TransactionItem";

const History = () => {
  return (
    <FlatList
      data={transaction.map(({ user, amount, ...rest }) => ({
        ...rest,
        name: user,
        amount: Number(amount),
      }))}
      renderItem={({ item }) => <TransactionItem item={item} />}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default History;
