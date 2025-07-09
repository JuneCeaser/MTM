import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function SearchScreen({ route }) {
  const { searchID } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{searchID}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
