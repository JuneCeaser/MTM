import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ToDoScreen from './ToDoScreen';
import InProgressScreen from './InProgressScreen';
import DoneScreen from './DoneScreen';
const Tab = createMaterialTopTabNavigator();

export default function MyTopTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="To Do" component={ToDoScreen} />
      <Tab.Screen name="In Progress" component={InProgressScreen} />
       <Tab.Screen name="Done" component={DoneScreen} />
    </Tab.Navigator>
  );
}