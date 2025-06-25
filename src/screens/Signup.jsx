import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Login from "./Login";
import { ScrollView } from "react-native-gesture-handler";

export default function Signin({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.maintextcontainer}>
        <Text style={styles.maintext}>Create an account</Text>
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.inputitem}>
          <Text style={styles.formtext}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="June Ceaser"
            onChange={setName}
          />
        </View>
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
        <Text style={styles.termstext}>
          By Continuing you agree to our{" "}
          <Text style={styles.loginnav2}>Terms of Service</Text>
        </Text>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginnavcontainer}>
          <Text style={styles.loginnav}>
            Already Have an account ?{" "}
            <Text
              style={styles.loginnav2}
              onPress={() => navigation.navigate("Login")}
            >
              Signin here
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  maintextcontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  },
  maintext: {
    fontSize: 35,
    fontWeight: "600",
    paddingTop: 60,
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
    fontSize: 17,
  },
  inputitem: {
    padding: 10,
  },
  termstext: {
    paddingLeft: 20,
    color: "#B3B3B3",
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
    padding: 20,
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
    fontSize: 15,
    fontWeight: "500",
  },
  loginnavcontainer: {
    paddingTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
