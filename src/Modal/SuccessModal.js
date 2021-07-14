import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Modal, Text, Image } from "react-native";

const SuccessModal = (props, navigation) => {
  return (
      
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={() => {
        
      }}
    >
      <View style={styles.container}>
      <View style={styles.modalView}>
        <Image style={styles.image} source={require("../../assets/illustrations/marketing.png")}/>
        <Text style={styles.titleText}>Erfolgreich gesendet!</Text>
        <Text style={styles.userText}>Du hast erfolgreich dein Feedback {props.isMeeting ? "zu" : "an"} {props.to} gesendet!</Text>
        <TouchableOpacity
        title="Zurück zum Feed"
        style={styles.button}
        onPress={() => props.onCloseHandler()}
        >
            <Text style={styles.buttonText}>Zurück zum Feed</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const hundretPercent = "100%";

export default SuccessModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    height: 150,
    width: 150,
    borderColor: "#D9E2E3",
    borderRadius: 100,
    borderWidth: 2,
    alignItems: "center",
  },
  titleText:{
      fontWeight: "bold",
      marginTop: 10
  },
  userText:{
      marginTop: 20,
    textAlignVertical: "center"
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
    width: 250
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
