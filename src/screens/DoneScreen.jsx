import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Task from "../components/Task";

export default function DoneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
