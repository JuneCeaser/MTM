import { Text, View, StyleSheet, TextInput } from "react-native";
import React, { Component, useState } from "react";
import MyTopTabs from "./MyTopTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  const [search, setSeatch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={setSeatch}
        />
        <Ionicons
          name="search-outline"
          size={24}
          color="black"
          style={styles.icon}
          onPress={() =>
            navigation.navigate("SearchScreen", { searchID: search })
          }
        />
      </View>
      <MyTopTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: "#CACACA",
  },
  searchcontainer: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 20,
  },
});
