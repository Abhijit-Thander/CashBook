import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import AddTransactionForm from "../components/TransactionForm";
import { useRouter } from "expo-router";

export default function AddTransaction() {
  const router = useRouter();

  const handleAddTransaction = (transaction: any) => {
    console.log("New transaction:", transaction);
    Alert.alert("Transaction saved!", JSON.stringify(transaction, null, 2));
    router.back();
  };

  return (
    <View style={styles.container}>
      <AddTransactionForm onSubmit={handleAddTransaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
