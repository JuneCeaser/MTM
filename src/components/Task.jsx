import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Task Title</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Status</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.decription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing asdsdfszdf
        sdfdsdfsdfsfds sdfsdfsdf
      </Text>
      <Text style={styles.date}>2025/6/30</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F559C",
    height: "auto",
    marginTop: "10",
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "900",
    paddingLeft: 15,
    paddingTop: 10,
    color: "#fff",
  },
  decription: {
    fontSize: 15,
    fontWeight: "300",
    fontWeight: "500",
    paddingLeft: 15,
    paddingTop: 10,
    color: "#fff",
  },
  date: {
    fontSize: 15,
    fontWeight: "300",
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    color: "#fff",
  },
  titlecontainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#fff",
    marginLeft: 190,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
});
