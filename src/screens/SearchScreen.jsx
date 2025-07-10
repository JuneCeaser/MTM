import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import Task from "../components/Task";
import React, { Component, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SearchScreen({ route, navigation }) {
  const { searchID } = route.params;
  const [tasks, setTasks] = useState([]);
  const loadTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasksList2");
      let tasks = jsonValue != null ? JSON.parse(jsonValue) : [];

      tasks = tasks.filter((task) => task.title === searchID);

      setTasks(tasks);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    loadTasks();
  }, [searchID]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seach Results</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            navigation={navigation}
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.dueDate}
            status={item.status}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
  },
  text: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "500",
  },
});
