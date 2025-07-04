import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import MyTabs from "./src/screens/MyTabs";
import HomeScreen from "./src/screens/HomeScreen";
import UpdateTaskScreen from "./src/screens/UpdateTaskScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyTabs"
          component={MyTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UpdateTaskScreen"
          component={UpdateTaskScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
