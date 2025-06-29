import { StyleSheet } from "react-native";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Transaction } from "../types";
import { transactionData } from "../utils/TransactionData";

type TransactionContext = { transaction: Transaction[] };

const TransContext = createContext<TransactionContext>({ transaction: [] });
const TransactionProvider = ({ children }: PropsWithChildren) => {
  // const [allTransaction, setAllTransaction] = useState(0);
  const [transaction, setTransaction] =
    useState<Transaction[]>(transactionData);

  return (
    <TransContext.Provider value={{ transaction }}>
      {children}
    </TransContext.Provider>
  );
};

export default TransactionProvider;

const styles = StyleSheet.create({});

export const useTransaction = () => useContext(TransContext);
