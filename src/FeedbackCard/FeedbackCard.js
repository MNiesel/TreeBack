import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CardFlip from "react-native-card-flip";

import { useEffect } from "react";

const FeedbackCard = (props) => {
  let images = [
    require("../../assets/illustrations/calm.png"),
    require("../../assets/illustrations/creative.png"),
    require("../../assets/illustrations/great.png"),
    require("../../assets/illustrations/handshake.png"),
    require("../../assets/illustrations/hero.png"),
    require("../../assets/illustrations/ideas.png"),
    require("../../assets/illustrations/marketing.png"),
    require("../../assets/illustrations/presentation.png"),
    require("../../assets/illustrations/problem.png"),
    require("../../assets/illustrations/process.png"),
    require("../../assets/illustrations/rocket.png"),
    require("../../assets/illustrations/teamMeeting.png"),
    require("../../assets/illustrations/teamwork.png"),
  ];
  let imageNumber;
  let badgeText;

  switch (props.badge) {
    case "calm":
      imageNumber = 0;
      badgeText = "Ruhepol";
      break;
    case "creative":
      imageNumber = 1;
      badgeText = "Kreativer Kopf";
      break;
    case "great":
      imageNumber = 2;
      badgeText = "Großartig";
      break;
    case "handshake":
      imageNumber = 3;
      badgeText = "Lass uns treffen!";
      break;
    case "hero":
      imageNumber = 4;
      badgeText = "Held";
      break;
    case "ideas":
      imageNumber = 5;
      badgeText = "Gute Ideen!";
      break;
    case "marketing":
      imageNumber = 6;
      break;
    case "presentation":
      imageNumber = 7;
      badgeText = "Gute Präsentation!";
      break;
    case "problem":
      imageNumber = 8;
      badgeText = "Problemlöser";
      break;
    case "process":
      imageNumber = 9;
      badgeText = "Guter Fortschritt!";
      break;
    case "rocket":
      imageNumber = 10;
      badgeText = "Durchstarter!";
      break;
    case "teamMeeting":
      imageNumber = 11;
      badgeText = "Lass uns treffen!";
      break;
    case "teamwork":
      imageNumber = 12;
      badgeText = "Gute Teamarbeit!";
      break;
  }

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
            <ImageBackground
              source={images[imageNumber]}
              style={styles.backgroundImage}
            >
              <Text style={styles.badgeText}>{badgeText}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => this["card" + props.index].flip()}
          >
            <Text style={styles.commentText}>{props.text}</Text>
          </TouchableOpacity>
        </CardFlip>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>{props.from}</Text>
        <Text style={styles.timeText}>~2min</Text>
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
    textAlign: "center",
    top: fiftyPercent,
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
});

export default FeedbackCard;
