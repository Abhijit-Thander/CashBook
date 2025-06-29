import { FlatList } from "react-native";
import React from "react";
import { transactionData } from "../utils/TransactionData";
import TransactionItem from "./TransactionItem";

const History = () => {
  // const { transaction } = useTransaction();

  return (
    <FlatList
      data={transactionData.map(({ user, amount, ...rest }) => ({
        ...rest,
        user,
        amount: Number(amount),
      }))}
      renderItem={({ item }) => <TransactionItem item={item} />}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default History;
