import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Platform,
  Image
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const DUMMY_COLLEAGUES = [
  {
    key: 1,
    name: "Herbert Muller",
    userImage: require("../../assets/herbert.jpg"),
  },
  {
    key: 2,
    name: "Jannis Schulz",
    userImage: require("../../assets/jannis.jpg"),
  },
  { key: 3, name: "John Holmes", userImage: require("../../assets/john.jpg") },
  {
    key: 4,
    name: "Amanda Wattson",
    userImage: require("../../assets/user.jpg"),
  },
];

const buttons = ["creative", "rocket", "calm", "problem", "hero", "handshake"];

const Colleagues = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const searchChangeHandler = (search) => {
    setSearch(search);
    setFilteredList(
      DUMMY_COLLEAGUES.filter((colleague) =>
        colleague.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar
        placeholder="Suche einen Kollegen"
        onChangeText={searchChangeHandler}
        value={search}
        platform={Platform.OS}
        containerStyle={{ backgroundColor: "none" }}
      />
      {search.length > 0
        ? filteredList.map((user) => {
            return (
              <TouchableOpacity
                style={styles.userContainer}
                key={user.key}
                onPress={() =>
                  navigation.navigate("SelectUserFeedback", {
                    name: user.name,
                    isMeeting: false,
                    buttons: buttons,
                    userImage: user.userImage
                  })
                }
              >
                <Image style={styles.userImage} source={user.userImage} />
                <Text>{user.name}</Text>
              </TouchableOpacity>
            );
          })
        : DUMMY_COLLEAGUES.map((user) => {
            return (
              <TouchableOpacity
                key={user.key}
                style={styles.userContainer}
                onPress={() =>
                  navigation.navigate("SelectUserFeedback", {
                    name: user.name,
                    buttons: buttons,
                    isMeeting: false,
                    userImage: user.userImage
                  })
                }
              >
                <Image style={styles.userImage} source={user.userImage} />
                <Text style={styles.userName}>{user.name}</Text>
              </TouchableOpacity>
            );
          })}
    </SafeAreaView>
  );
};

const fullWidth = "100%";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginRight: 18,
    marginLeft: 18,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    width: fullWidth,
    marginTop: 20,
  },
  userName: {
    fontSize: 15,
    marginLeft: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Colleagues;
