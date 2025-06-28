import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface TransactionItemProps {
  item: {
    type: string;
    profile: string;
    name: string;
    date: string;
    amount: number;
  };
}

export default function TransactionItem({ item }: TransactionItemProps) {
  const isIncome = item.type === "income";

  const formatDate = (dateStr?: string) => {
    const date = dateStr ? new Date(dateStr) : new Date();
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isSameDay = (d1: Date, d2: Date) =>
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();

    if (isSameDay(date, today)) return "Today";
    if (isSameDay(date, yesterday)) return "Yesterday";

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftBox}>
        <Image source={{ uri: item.profile }} style={styles.profileImage} />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
      </View>

      <View style={styles.amountContainer}>
        <Text
          style={[styles.amount, isIncome ? styles.income : styles.expense]}
        >
          {isIncome ? "+" : "-"}₹ {item.amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    height: 60,
    // marginBottom: 10,
    backgroundColor: "#fff",
  },
  leftBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "600",
    fontSize: 14,
  },
  date: {
    color: "gray",
    fontSize: 12,
  },
  amountContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  amount: {
    fontWeight: "600",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});
