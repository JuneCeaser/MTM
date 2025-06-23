import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import AddScreen from './AddScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs(navigation) {
  return (
   <Tab.Navigator>
      <Tab.Screen  options={{ headerShown: false }} name="Home" component={HomeScreen} />
       <Tab.Screen  options={{ headerShown: false }} name="Add" component={AddScreen} />
      <Tab.Screen  options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
