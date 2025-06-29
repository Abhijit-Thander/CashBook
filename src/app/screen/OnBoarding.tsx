// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { Link, Stack, useRouter } from "expo-router";

// export default function Onboarding() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Stack.Screen options={{ headerShown: false }} />
//       <View style={styles.imageBox}>
//         <Image source={require("../../assets/Man.png")} style={styles.image} />
//       </View>
//       <Text style={styles.title}>Spend Smarter </Text>
//       <Text style={styles.title}>Save More </Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => router.replace("./HomeScreen")}
//       >
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   imageBox: {
//     width: "90%",
//     height: "70%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#438883",
//   },
//   subtitle: {
//     fontSize: 16,
//     marginVertical: 20,
//   },
//   button: {
//     backgroundColor: "#529994",
//     paddingHorizontal: 32,
//     paddingVertical: 12,
//     borderRadius: 50,
//     marginVertical: 20,
//     width: "80%",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "500",
//   },
//   image: {
//     width: "90%",
//     height: "100%",

//     resizeMode: "contain",
//   },
// });

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { Stack, useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <View style={styles.imageBox}>
          <Image
            source={require("../../../assets/Man.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Spend Smarter</Text>
        <Text style={styles.title}>Save More</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/screen/HomeScreen")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  imageBox: {
    width: "100%",
    height: height * 0.6, // 60% of screen height
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: width * 0.08, // ~8% of screen width
    fontWeight: "bold",
    color: "#438883",
    textAlign: "center",
  },
  subtitle: {
    fontSize: width * 0.045,
    marginVertical: 12,
    color: "#666",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#529994",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "500",
  },
});
