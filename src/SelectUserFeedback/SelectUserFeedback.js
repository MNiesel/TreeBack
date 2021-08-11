import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "intl";
import "intl/locale-data/jsonp/en";
import StatusBar from "../StatusBar/StatusBar";

const SelectUserFeedback = ({ navigation, route }) => {
  const [selectedBadge, setSelectedBadge] = useState("");

  const onBadgeSelect = (badge) => {
    setSelectedBadge(badge);
  };

  const { name } = route.params;
  const { buttons } = route.params;
  const { meeting } = route.params;
  const { isMeeting } = route.params;
  const {userImage} = route.params;

  return (
    <SafeAreaView style={styles.screenContainer}>
     <StatusBar firstText={isMeeting ? "Meetings" : "Empfänger"} secondText="Badge" thirdText="Freitext" active={2}/>
      {isMeeting ? (
        <View style={styles.meetingContainer}>
          <View>
            <Text style={styles.titleText}>{meeting.title}</Text>
          </View>
          <View style={styles.meetingAttendants}>
            <Ionicons name="ios-person-outline" size={25} color="#323332" />
            <Text style={styles.attendantsText}>{meeting.teilnehmer.length} Teilnehmer</Text>
          </View>
          <View style={styles.timestamp}>
          <Ionicons name="ios-calendar-outline" size={25} color="#323332" />
            <Text style={styles.timestampText}>{new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(meeting.timestamp)}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.userContainer}>
        <Image style={styles.userImage} source={userImage} />
          <Text style={styles.userNameText}>{name}</Text>
        </View>
      )}

      <View>
        <ButtonGroup buttons={buttons} onSelect={onBadgeSelect} />
      </View>
      <View>
        <View>
          <TouchableOpacity
            title="Freitext eingeben"
            style={
              selectedBadge === ""
                ? { ...styles.button, ...styles.inactiveButton }
                : styles.button
            }
            disabled={selectedBadge === "" ? true : false}
            onPress={() => {
              navigation.navigate("FreeTextScreen", {
                meeting: meeting,
                name: name,
                badge: selectedBadge,
                isMeeting: isMeeting,
                userImage: userImage
              });
            }}
          >
            <Text style={styles.buttonText}>Freitext eingeben</Text>
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
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#2F5D62",
    borderRadius: 12,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  inactiveButton: {
    backgroundColor: "#DBDBDB",
  },
  meetingContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 20
  },
  meetingAttendants: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  titleText:{
    fontSize: 17
  },
  attendantsText:{
    marginLeft: 10
  },
  timestampText:{
    marginLeft: 10,
  },
  timestamp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  userImage:{
    height: 50,
    width: 50,
    borderRadius: 50
  }
});

export default SelectUserFeedback;
