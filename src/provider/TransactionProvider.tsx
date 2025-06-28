import { StyleSheet, Text, View } from "react-native";
import React, { Children, createContext, PropsWithChildren } from "react";

const TransactionProvider = ({ children }: PropsWithChildren) => {
  const TransContext = createContext({});
  return <TransContext.Provider value={{}}>{children}</TransContext.Provider>;
};

export default TransactionProvider;

const styles = StyleSheet.create({});
