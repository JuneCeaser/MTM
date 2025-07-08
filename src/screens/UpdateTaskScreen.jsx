import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UpdateTaskScreen({ navigation, route }) {
  const { taskId } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("ToDo");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const updateTask = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasksList2");
      let tasks = jsonValue != null ? JSON.parse(jsonValue) : [];

      tasks = tasks.map((task) =>
        task.id === taskId
          ? { ...task, title, description, date, status }
          : task
      );

      await AsyncStorage.setItem("tasksList2", JSON.stringify(tasks));
      Alert.alert("Task updated successfully");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Error", "Failed to update task");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Update task</Text>
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Enter Title"
          />
        </View>
        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Description</Text>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Enter Description"
          />
        </View>
        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Due Date</Text>
          <TouchableOpacity style={styles.input} onPressIn={showDatepicker}>
            <Text>{date.toDateString()}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
        </View>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
        >
          <Picker.Item label="ToDo" value="ToDo" />
          <Picker.Item label="Inprogress" value="Inprogress" />
          <Picker.Item label="Done" value="Done" />
        </Picker>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button} onPress={updateTask}>
            <Text style={styles.buttontext}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.emptyspace}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  titlecontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    paddingTop: 60,
    paddingLeft: 30,
    fontSize: 35,
    fontWeight: "600",
  },
  inputcontainer: {
    flex: 3,
    backgroundColor: "#ffffff",
  },
  emptyspace: {
    flex: 2,
    backgroundColor: "#ffffff",
  },
  formtext: {
    color: "black",
    fontWeight: "500",
    fontSize: 17,
  },
  inputitem: {
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: "#CACACA",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3F559C",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: "50",
  },
  buttoncontainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    padding: 10,
  },
  buttontext: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 20,
  },
});
