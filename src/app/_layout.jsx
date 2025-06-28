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
          headerRight: HeaderRight,
        }}
      />
    </Stack>
  );
}

// Extracted for readability
const HeaderRight = () => (
  <FontAwesome5
    name="bell"
    size={24}
    color="black"
    style={{ marginRight: 16 }}
  />
);
