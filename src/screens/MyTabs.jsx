import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AddScreen from "./AddScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs(navigation) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 30;
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-sharp";
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle-sharp" : "add-circle-sharp";
          } else if (route.name === "Profile") {
            iconName = "person-sharp";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3F559C",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Add"
        component={AddScreen}
      />
      <Tab.Screen
        options={{ headerShown: true }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
