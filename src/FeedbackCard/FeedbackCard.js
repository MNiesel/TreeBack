import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CardFlip from "react-native-card-flip";
import badgeHelpers from "../Badge/badgeHelpers"


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
            <ImageBackground
              source={image}
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
