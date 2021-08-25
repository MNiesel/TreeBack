import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import "intl";
import "intl/locale-data/jsonp/en";
import StatusBar from "../StatusBar/StatusBar";

const DUMMY_MEETINGS = [
  {
    id: "1",
    title: "PoC - Vorbereitung & Maßnahmen zur Vorbereitung",
    timestamp: "1626173727498",
    teilnehmer: ["Moritz Niesel", "Tim Struppi", "Annika Lipton"],
  },
  {
    id: "2",
    title: "Daily: SCRUM Project with autofill",
    timestamp: "1626173727498",
    teilnehmer: ["Sandra Hantel", "Torben Struck", "Annika Lipton"],
  },
  {
    id: "3",
    title: "Preperation for Something important",
    timestamp: "1626173727498",
    teilnehmer: ["Sandra Hantel", "Torben Struck", "Annika Lipton"],
  },
  {
    id: "4",
    title: "Material Durchsicht Präsentation",
    timestamp: "1626173727498",
    teilnehmer: ["Sandra Hantel", "Torben Struck", "Annika Lipton"],
  },
];

const buttons = [
    "great",
    "teamwork",
    "ideas",
    "process",
    "presentation",
    "teamMeeting"
]

function truncateWithEllipses(text, max) {
  return text.substr(0, max - 1) + (text.length > max ? "..." : "");
}

const Meetings = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [filteredMeetings, setFilteredMeetings] = useState(DUMMY_MEETINGS);

  const onSearchChangeHandler = (search) => {
    setSearch(search);
    if (search.length < 1) {
      setFilteredMeetings(DUMMY_MEETINGS);
    } else {
      setFilteredMeetings(
        DUMMY_MEETINGS.filter((meeting) =>
          meeting.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.meetingContainer} key={item.id} onPress={() => navigation.navigate("SelectUserFeedback" , {meeting: item, isMeeting: true , buttons: buttons})}>
        <View style={styles.meetingTitle}>
          <Text style={styles.meetingTitle}>
            {truncateWithEllipses(item.title, 28)}
          </Text>
          <Text style={styles.meetingTimestamp}>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(item.timestamp)}
          </Text>
        </View>
        <View style={styles.meetingPictures}>
          <View style={styles.meetingAttendants}>
            <Text style={styles.attendantText}>
              +{item.teilnehmer.length - 1}
            </Text>
          </View>
          <View style={styles.firstPicture}>
            <Text style={styles.attendantText}>AB</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar firstText="Meetings" secondText="Badge" thirdText="Freitext" active={1}/>
      <SearchBar
        platform={Platform.OS}
        placeholder="Suche einen Termin"
        value={search}
        onChangeText={onSearchChangeHandler}
        lightTheme={true}
        containerStyle={{ backgroundColor: "none" }}
      />
      <FlatList
        data={filteredMeetings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Meetings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
  },
  meetingContainer: {
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DEEEEB",
    marginTop: 15,
    paddingLeft: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 2
    },
  },

  meetingTitleContainer: {
    width: "70%",
  },
  meetingPictures: {
    width: "30%",
  },
  meetingTitle: {
    fontSize: 15,
  },
  firstPicture: {
    position: "absolute",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#2F5D62",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  meetingAttendants: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#2F5D62",
    left: 34,
  },
  attendantText: {
    color: "white",
  },
});
