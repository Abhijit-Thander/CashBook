import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AddButtton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => router.push("/screen/AddTransaction")}
    >
      <Feather name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddButtton;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    backgroundColor: "#3B8E88",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    zIndex: 1,
  },
});
