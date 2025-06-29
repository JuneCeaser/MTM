import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import MyTopTabs from "./MyTopTabs";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyTopTabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
