import React from "react";
import { Stack } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome👋",
        }}
      />

      <Stack.Screen
        name="screen/AddTransaction"
        options={{
          title: "Add Transaction",
          headerTransparent: true,
          headerTitleStyle: { color: "#fff", fontWeight: "bold", fontSize: 18 },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}

// Extracted for readability
