import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from "@expo/vector-icons";

import Feed from "../Feed/Feed";
import Meetings from "../Meetings/Meetings";
import Colleagues from "../Colleagues/Colleagues";
import Trees from "../Trees/Trees";
import SelectUserFeedback from "../SelectUserFeedback/SelectUserFeedback";
import FreeTextScreen from "../FreeTextScreen/FreeTextScreen";


const Stack = createStackNavigator();

const FeedStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} options={{title: "Feed"}}/>
    </Stack.Navigator>
  )
}

const ColleaguesStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Kollegen" component={Colleagues} options={{title: "Kollegen"}}/>
      <Stack.Screen name="SelectUserFeedback" component={SelectUserFeedback} options={{title: "Wähle Feedback"}}/>
      <Stack.Screen name="FreeTextScreen" component={FreeTextScreen} options={{title: "Gebe einen Freitext ein"}}/>
    </Stack.Navigator>
  )
}

const MeetingsStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Termine" component={Meetings} options={{title: "Termine"}}/>
      <Stack.Screen name="SelectUserFeedback" component={SelectUserFeedback} options={{title: "Wähle Feedback"}}/>
      <Stack.Screen name="FreeTextScreen" component={FreeTextScreen} options={{title: "Gebe einen Freitext ein"}}/>
    </Stack.Navigator>
  )
}
const TreesStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Trees" component={Trees} options={{title: "Trees"}}/>
    </Stack.Navigator>
  )
}




const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            if (route.name === "Feed") {
              iconName = "home";
              iconColor = focused ? "#2F5D62" : "#323332";
            } else if (route.name === "Kollegen") {
              iconName = "plus-circle";
              iconColor = focused ? "#2F5D62" : "#323332";
            } else if (route.name === "Termine") {
              iconName = "calendar";
              iconColor = focused ? "#2F5D62" : "#323332";
            } else if (route.name === "Trees") {
              iconName = "award";
              iconColor = focused ? "#2F5D62" : "#323332";
            }
            return <Feather name={iconName} color={iconColor} size={25} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#2F5D62",
          inactiveTintColor: "#323332",
        }}
      >
        <Tab.Screen name="Feed" component={FeedStack} />
        <Tab.Screen name="Kollegen" component={ColleaguesStack} />
        <Tab.Screen name="Termine" component={MeetingsStack} />
        <Tab.Screen name="Trees" component={TreesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
