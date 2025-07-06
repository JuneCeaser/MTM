import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";

export default function Task({ navigation, title, description, date, status }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={styles.button}>
          <Text>{status}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.decription}>{description}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F559C",
    height: "auto",
    marginTop: 10,
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
    marginLeft: 120,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
});
