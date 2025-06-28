import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import TransHistory from "./TransHistory";

const HomeScreen = () => {
  return (
    <>
      <View style={{ height: "40%", backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={styles.totalBalanceContainer}>
            <Text style={styles.totalBalanceText}>Total Balance</Text>
            <Text style={styles.totalBalanceAmount}>₹ 2,548.00</Text>

            <View style={styles.totalIncomeContainer}>
              <View style={styles.incomeExpenseBlock}>
                <View style={styles.iconRow}>
                  <Feather name="arrow-down" size={20} color="#00ff37" />
                  <Text style={styles.pricetitle}>Income</Text>
                </View>
                <Text style={styles.priceAmount}>₹ 5,000.00</Text>
              </View>

              <View style={styles.incomeExpenseBlock}>
                <View style={styles.iconRow}>
                  <Feather name="arrow-up" size={20} color="#ff0000" />
                  <Text style={styles.pricetitle}>Expense</Text>
                </View>
                <Text style={styles.priceAmount}>₹ 2,452.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TransHistory />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "75%",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "center",
    backgroundColor: "#3b8e88",
    position: "relative",
  },
  totalBalanceContainer: {
    backgroundColor: "#2F7E79",
    padding: 16,
    marginTop: 40,
    borderRadius: 14,
    marginVertical: 16,
    elevation: 10,
    shadowColor: "#ffffffd0",
    width: "90%",
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -50 }], // Center the container vertically
  },
  totalBalanceText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  totalBalanceAmount: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
  },
  totalIncomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  incomeExpenseBlock: {
    // This makes each block more consistent and reusable
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  pricetitle: {
    fontSize: 16,
    color: "#ffffffb4",
    marginLeft: 4,
  },
  priceAmount: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    marginTop: 4,
  },
});
