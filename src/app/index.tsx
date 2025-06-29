import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../app/screen/HomeScreen";
import TransactionProvider from "../provider/TransactionProvider";
import Onboarding from "./screen/OnBoarding";

const index = () => {
  return (
    <TransactionProvider>
      {true ? <Onboarding /> : <HomeScreen />}
    </TransactionProvider>
  );
};

export default index;

const styles = StyleSheet.create({});
