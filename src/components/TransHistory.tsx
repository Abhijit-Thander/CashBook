import { StyleSheet, Text, View } from "react-native";
import React from "react";
import History from "./History";
import AddButtton from "./AddButtton";

const TransHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <AddButtton />
      <History />
      {/* Placeholder for transaction history content */}
    </View>
  );
};

export default TransHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
});
