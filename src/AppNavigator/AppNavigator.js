import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import {View} from "react-native";

import Feed from "../Feed/Feed";
import Meetings from "../Meetings/Meetings";
import Colleagues from "../Colleagues/Colleagues";
import Trees from "../Trees/Trees";
import SelectUserFeedback from "../SelectUserFeedback/SelectUserFeedback";
import FreeTextScreen from "../FreeTextScreen/FreeTextScreen";
import Header from "../Header/Header"
import UserImage from "../UserImage/UserImage";


const Stack = createStackNavigator();

const FeedStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} options={{title: "Feed", headerTitleAlign: "center", headerRight: () => <UserImage/>}}/>
    </Stack.Navigator>
  )
}

const ColleaguesStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Kollegen" component={Colleagues} options={{headerTitle: "Kollegen", headerTitleAlign: "center", headerRight: () => <UserImage/>}}/>
      <Stack.Screen name="SelectUserFeedback" component={SelectUserFeedback} options={{headerTitle: "Wähle Badge", headerTitleAlign: "center", headerBackTitle: null, headerRight: () => <UserImage/>}}/>
      <Stack.Screen name="FreeTextScreen" component={FreeTextScreen} options={{title: "Gebe einen Freitext ein" , headerBackTitle: null, headerRight: () => <UserImage/>, headerTitleAlign: "center"}}/>
    </Stack.Navigator>
  )
}

const MeetingsStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Termine" component={Meetings} options={{title: "Termine", headerTitleAlign: "center", headerBackTitle: null, headerRight: () => <UserImage/>}}/>
      <Stack.Screen name="SelectUserFeedback" component={SelectUserFeedback} options={{title: "Wähle Feedback", headerTitleAlign: "center", headerBackTitle: null, headerRight: () => <UserImage/>}}/>
      <Stack.Screen name="FreeTextScreen" component={FreeTextScreen} options={{title: "Gebe einen Freitext ein", headerTitleAlign: "center", headerBackTitle: null, headerRight: () => <UserImage/>}}/>
    </Stack.Navigator>
  )
}
const TreesStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Trees" component={Trees} options={{title: "Trees", headerTitleAlign: "center", headerBackTitle: null, headerRight: () => <UserImage/>}}/>
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
              iconName = focused? "home" : "home-outline";
              iconColor = focused ? "#2F5D62" : "#323332";
            } else if (route.name === "Kollegen") {
              iconName = focused? "md-people" : "md-people-outline";
              iconColor = focused ? "#2F5D62" : "#323332";
            } else if (route.name === "Termine") {
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
              iconColor = focused ? "#2F5D62" : "#323332";
            } else if (route.name === "Trees") {
              iconName = focused ? "leaf" : "leaf-outline";
              iconColor = focused ? "#2F5D62" : "#323332";
            }
            return <Ionicons name={iconName} color={iconColor} size={25} />;
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
