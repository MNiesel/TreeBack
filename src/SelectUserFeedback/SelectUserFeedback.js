import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const SelectUserFeedback = ({ navigation, route }) => {

    const [selectedBadge , setSelectedBadge] = useState("");

    const onBadgeSelect= (badge) => {
        setSelectedBadge(badge);
    };

  const { name } = route.params;
  const buttonsForUser = [
    "Kreativer Kopf!",
    "Durchstarter!",
    "Ruhepol!",
    "Problemlöser",
    "Held",
    "Lass uns treffen!",
  ];
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.userContainer}>
        <Feather name="circle" size={50} color="#323332" />
        <Text style={styles.userNameText}>{name}</Text>
      </View>
      <View>
        <ButtonGroup
          buttons={buttonsForUser}
          onSelect={onBadgeSelect}
        />
      </View>
      <View>
      <View>
          <TouchableOpacity title="Freitext eingeben" style={styles.activeButton}>
              <Text style={styles.activeButtonText}>Freitext eingeben</Text>
          </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const fullWidth = "100%";
const fiftyPercent = "50%";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: fullWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  userNameText: {
    fontSize: 15,
    marginLeft: 5,
  },
  badgeButtonContainer: {
    height: 130,
    width: fiftyPercent,
  },
  activeButton: {
    marginTop: 30,
    height: 50,
    backgroundColor:  "#2F5D62",
    borderRadius: 12,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
},
activeButtonText: {
    color: "white",
    fontSize: 20,
}
});

export default SelectUserFeedback;