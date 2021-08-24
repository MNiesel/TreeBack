import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Linking,
  Button
} from "react-native";


const Trees = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Dein Baum:</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/tree4.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonOuter}>
          <View style={styles.buttonInner}>
            <Text style={styles.buttonText}>6 / 10</Text>
          </View>
        </View>
      </View>
      <Text style={styles.treeHeaderText}>Insgesamt gepflanzte Bäume</Text>
      <View style={styles.treeViewContainer}>
        <View style={styles.treeView}>
          <Text style={styles.treeText}>30 Bäume</Text>
        </View>
      </View>
      <Text style={styles.treeHeaderText}>Von dir gepflanzte Bäume</Text>
      <View style={styles.treeViewContainer}>
        <View style={styles.treeView}>
          <Text style={styles.treeText}>5 Bäume</Text>
        </View>
      </View>
      <Text style={styles.treeHeaderText}>Mehr Infos unter: <Text style={{color: "blue"}} onPress={() => {Linking.openURL("https://edenprojects.org/")}}>https://edenprojects.org/</Text></Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 18,
    padding: 18,
  },
  treeViewContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  treeView: {
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    width: "90%",
    backgroundColor: "#598B7F",
    borderRadius: 12
  },
  treeText: {
    fontSize: 24,
    color: "white"
  },
  buttonText: {
    position: "absolute",
    left: 150,
    color: "white",
  },
  buttonContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  buttonOuter: {
    backgroundColor: "rgba(47, 93, 98, 0.4)",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: 12,
    height: 30,
  },
  buttonInner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(47, 93, 98, 1)",
    height: 30,
    width: "70%",
    borderRadius: 12,
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 100,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  treeHeaderText: {
    fontSize: 15
  },
});

export default Trees;
