import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");

  const loginFunction = async () => {
    try {
      const userData = await AsyncStorage.getItem("userdata");
      const user = JSON.parse(userData);

      setUserName(user.name);
      setUserEmail(user.email);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    loginFunction();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.nametext}>Full Name</Text>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.nametext}>E mail</Text>
        <Text style={styles.username}>{useremail}</Text>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttontext}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 2,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  nametext: {
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 60,
    paddingLeft: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: "400",
    paddingTop: 20,
    paddingLeft: 20,
    color: "#B3B3B3",
  },
  buttoncontainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    padding: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#A6565A",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 45,
  },
  buttontext: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 20,
  },
});
