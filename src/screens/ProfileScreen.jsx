import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.nametext}>Full Name</Text>
        <Text style={styles.username}>June Ceaser De Soysa</Text>
        <Text style={styles.nametext}>E mail</Text>
        <Text style={styles.username}>june@mainframe.lk</Text>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button}>
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
