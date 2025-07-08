import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TaskDone({
  navigation,
  id,
  title,
  description,
  date,
  status,
}) {
  const deleteTask = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasksList2");
      let tasks = jsonValue != null ? JSON.parse(jsonValue) : [];

      tasks = tasks.filter((task) => task.id !== id);
      await AsyncStorage.setItem("tasksList2", JSON.stringify(tasks));
      Alert.alert("Succesfull", "task deleted");
    } catch (e) {
      // error reading value
    }
  };

  const showAlert = () =>
    Alert.alert("Update or Delete task", "", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: deleteTask,
        style: "Delete",
      },
      {
        text: "Update",
        onPress: () => navigation.navigate("UpdateTaskScreen", { taskId: id }),
        style: "Update",
      },
    ]);

  return (
    <TouchableOpacity style={styles.container} onPress={showAlert}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{status}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.decription}>{description}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#799456",
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
    flexShrink: 1,
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
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#fff",
    marginLeft: 120,
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
});
