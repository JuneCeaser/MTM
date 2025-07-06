import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import React, { Component, useEffect, useState } from "react";
import Task from "../components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";

export default function DoneScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasksList2");
      const savedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];

      setTasks(savedTasks);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadTasks);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
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
  },
});
