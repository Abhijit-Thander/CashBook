import React from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import AddTransactionForm from "../../components/TransactionForm";
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
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <AddTransactionForm onSubmit={handleAddTransaction} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    aspectRatio: 3 / 2,
    width: "100%",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#358781",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    position: "relative",
  },
  formContainer: {
    // flex: 1,
    padding: 16,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    position: "absolute",
    top: "80%",
    left: 0,
    right: 0,
  },
});
