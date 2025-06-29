import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MyTabs from "./MyTabs";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            onChange={setEmail}
          />
        </View>

        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            onChange={setPassword}
          />
        </View>
      </View>
      <View style={styles.signupbuttoncontainer}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(MyTabs)}
          >
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
