import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddTransactionForm({
  onSubmit,
}: {
  onSubmit: (data: any) => void;
}) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense" | "">("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    if (!name || !amount || !type || !date) {
      Alert.alert("Please fill all fields");
      return;
    }

    const transaction = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      type,
      date: date.toISOString(),
    };

    onSubmit(transaction);

    // Reset form
    setName("");
    setAmount("");
    setType("");
    setDate(new Date());
  };

  const handleDateChange = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Enter name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        placeholder="Enter amount"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Type</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "income" && styles.typeSelectedIncome,
          ]}
          onPress={() => setType("income")}
        >
          <Text style={styles.typeText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "expense" && styles.typeSelectedExpense,
          ]}
          onPress={() => setType("expense")}
        >
          <Text style={styles.typeText}>Expense</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Date</Text>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>{date.toLocaleDateString("en-GB")}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Save Transaction" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  typeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginRight: 10,
  },
  typeSelectedIncome: {
    backgroundColor: "#d4f4dd",
    borderColor: "#00c851",
  },
  typeSelectedExpense: {
    backgroundColor: "#f8d7da",
    borderColor: "#ff4444",
  },
  typeText: {
    fontWeight: "600",
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
  },
});
