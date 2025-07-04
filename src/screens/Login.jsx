import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MyTabs from "./MyTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = (email) => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return re.test(email);
  };

  const loginFunction = async () => {
    if (!email || !password) {
      Alert.alert("Error", "please fill all textInputs");
      return;
    }
    if (!validate(email)) {
      Alert.alert("Error", "please enter valid email");
      return;
    }

    try {
      const userData = await AsyncStorage.getItem("userdata");
      const user = JSON.parse(userData);

      if (user.email === email && user.password === password) {
        navigation.navigate(MyTabs);
      } else {
        Alert.alert("Error", "Invalid email or password");
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.maintextcontainer}>
        <Text style={styles.maintext}>Login</Text>
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="june@mainframe.lk"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={styles.signupbuttoncontainer}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button} onPress={loginFunction}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginnavcontainer}>
          <Text
            style={styles.loginnav2}
            onPress={() => navigation.navigate("Signup")}
          >
            Create an account
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  maintextcontainer: {
    flex: 2,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  },
  maintext: {
    fontSize: 35,
    fontWeight: "600",
    paddingTop: 120,
    paddingLeft: 10,
  },
  inputcontainer: {
    flex: 3,
    backgroundColor: "#ffffff",
  },
  signupbuttoncontainer: {
    flex: 3,
    backgroundColor: "#ffffff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: "#CACACA",
  },
  formtext: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
  },
  inputitem: {
    padding: 10,
  },
  termstext: {
    paddingLeft: 20,
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
  loginnav: {
    color: "#B3B3B3",
  },
  loginnav2: {
    color: "#3F559C",
    fontSize: 17,
    fontWeight: "800",
  },
  loginnavcontainer: {
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
