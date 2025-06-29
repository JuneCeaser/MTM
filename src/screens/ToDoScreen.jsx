import { Text, View, Button } from "react-native";
import React, { Component } from "react";
import UpdateTaskScreen from "./UpdateTaskScreen";

export default function ToDoScreen({ navigation }) {
  return (
    <View>
      <Text>ToDoScreen</Text>
      <Button
        onPress={() => navigation.navigate("UpdateTaskScreen")}
        title="update task"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
