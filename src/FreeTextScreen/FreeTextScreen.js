import React, { useState } from "react";
import { CommonActions } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import badgeHelpers from "../Badge/badgeHelpers";
import SuccessModal from "../Modal/SuccessModal";
import uuid from 'react-native-uuid';

const FreeTextScreen = ({ route, navigation }) => {

  const submitHandler = () => {
    var feedbackUUID = uuid.v4();
    fetch("https://treeback-80147-default-rtdb.europe-west1.firebasedatabase.app/feedbacks.json",{
    method:"POST",
    body: JSON.stringify({
      badge: badge,
      from: "Statischer Test User",
      to: name,
      text: userInput,
      id: feedbackUUID,
      timestamp: Date.now()
    })
    })
  }

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const { name } = route.params;
  const { badge } = route.params;

  const image = badgeHelpers.getBadgeImage(badge);
  const badgeText = badgeHelpers.getBadgeText(badge);

  const [userInput, setUserInput] = useState("");

  const onSendHandler = () => {
    submitHandler();
    setModalIsVisible(true);
  };
  const onClose = () => {
    setModalIsVisible(false);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Feed" }],
      })
    );
  };

 

  return (
    <View style={styles.container}>
      <SuccessModal
        isVisible={modalIsVisible}
        to={name}
        onCloseHandler={onClose}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <Feather name="circle" size={50} color="#323332" />
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
            <Text>{badgeText}</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setUserInput}
              value={userInput}
              placeholder="Füge deinem Feedback eine Nachricht hinzu..."
              multiline={true}
              maxLength={160}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={
              userInput === ""
                ? { ...styles.button, ...styles.inactiveButton }
                : styles.button
            }
            disabled={userInput === "" ? true : false}
            onPress={onSendHandler}
          >
            <Text style={styles.buttonText}>Feedback senden</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const fullWidth = "100%";

const styles = StyleSheet.create({
  container: {
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
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  image: {
    height: 150,
    width: 150,
    borderColor: "#D9E2E3",
    borderRadius: 100,
    borderWidth: 2,
    alignItems: "center",
  },
  input: {
    marginTop: 30,
    borderRadius: 12,
    borderColor: "#323332",
    borderWidth: 1,
    height: 200,
    textAlignVertical: "top",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  inactiveButton: {
    backgroundColor: "#DBDBDB",
  },
  button: {
    marginTop: 30,
    height: 50,
    backgroundColor: "#2F5D62",
    borderRadius: 12,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FreeTextScreen;
