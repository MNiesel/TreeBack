import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import AppNavigator from "./src/AppNavigator/AppNavigator.js";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
