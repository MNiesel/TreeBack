import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import CardFlip from "react-native-card-flip";
import badgeHelpers from "../Badge/badgeHelpers";

const FeedbackCard = (props) => {
  const image = badgeHelpers.getBadgeImage(props.badge);
  const badgeText = badgeHelpers.getBadgeText(props.badge);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.badgeContainer}>
        <CardFlip
          style={styles.cardContainerTest}
          ref={(card) => (this["card" + props.index] = card)}
        >
          <TouchableOpacity
            style={styles.badgeContainer}
            onPress={() => this["card" + props.index].flip()}
          >
            <ImageBackground source={image} style={styles.backgroundImage}>
              <View style={styles.badgeTextBackground}>
                <Text style={styles.badgeText}>{badgeText}</Text>
              </View>
              <View style={styles.pointContainer}>
                <View style={styles.activePoint}></View>
                <View style={styles.inactivePoint}></View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => this["card" + props.index].flip()}
          >
            <Text style={styles.commentText}>{props.text}</Text>
            <View style={styles.pointContainer}>
              <View style={styles.inactivePoint}></View>
              <View style={styles.activePoint}></View>
            </View>
          </TouchableOpacity>
        </CardFlip>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userImageContainer}>
          <Image
            source={require("../../assets/testUser.jpg")}
            style={styles.userImage}
          />
          <Text style={styles.userText}>{props.from}</Text>
        </View>
        <Text style={styles.timeText}>{props.date}</Text>
      </View>
    </View>
  );
};

const containerWidth = "100%";
const fiftyPercent = "50%";
const nintyPercent = "90%";

const styles = StyleSheet.create({
  cardContainer: {
    height: 265,
    width: containerWidth,
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 20,
  },
  cardContainerTest: {
    height: 265,
    width: containerWidth,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  badgeContainer: {
    width: containerWidth,
    height: 215,
    backgroundColor: "#598B7F",
    textAlign: "center",
    borderRadius: 12,
    position: "relative",
  },
  badgeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  userContainer: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  userText: {
    color: "#323332",
    fontSize: 15,
  },
  timeText: {
    color: "#323332",
    fontSize: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: containerWidth,
    height: 215,
    backgroundColor: "#598B7F",
    textAlign: "center",
    borderRadius: 12,
  },
  commentText: {
    color: "white",
    fontSize: 15,
    padding: 20,
  },
  pointContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 170,
  },
  activePoint: {
    height: 15,
    width: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  inactivePoint: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  badgeTextBackground: {
    backgroundColor: "rgba(47, 93, 98, 0.5)",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 12,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 5
  },
  userImageContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default FeedbackCard;
