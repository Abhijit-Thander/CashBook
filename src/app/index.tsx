import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../components/HomeScreen";
import TransactionProvider from "../provider/TransactionProvider";

const index = () => {
  return (
    <TransactionProvider>
      <HomeScreen />
    </TransactionProvider>
  );
};

export default index;

const styles = StyleSheet.create({});
