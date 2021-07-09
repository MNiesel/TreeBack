import React, { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text, Button } from "react-native";

const ButtonGroup = ({ buttons, onSelect }) => {
  let images = [
    require("../../assets/illustrations/creative.png"),
    require("../../assets/illustrations/rocket.png"),
    require("../../assets/illustrations/calm.png"),
    require("../../assets/illustrations/problem.png"),
    require("../../assets/illustrations/hero.png"),
    require("../../assets/illustrations/handshake.png"),
  ];

  const badge = ["creative","rocket","calm", "problem" , "hero" , "meeting"]

  const [isActive, setIsActive] = useState(-1);
  const onClickHandler = (index) => {
    setIsActive(index);
    onSelect(badge[index]);
  };

  return (
    <View>
      <View style={styles.buttonGroupContainer}>
        {buttons.map((button, index) => {
          return (
            <TouchableOpacity
              style={
                index === isActive
                  ? styles.buttonContainer
                  : {...styles.buttonContainer, ...styles.inactiveButtonContainer}
              }
              key={index}
              onPress={() => {
                onClickHandler(index);
              }}
            >
              <View
                style={
                  index === isActive
                    ? styles.imageContainer
                    : {...styles.imageContainer, ...styles.inactiveImageContainer}
                }
              >
                <Image style={styles.image} source={images[index]} />
              </View>
              <Text
                style={
                  index === isActive
                    ? styles.badgeText
                    : {...styles.badgeText , ...styles.inactiveBadgeText}
                }
              >
                {button}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const fiftyPercent = "50%";

const styles = StyleSheet.create({
  buttonGroupContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 12,
    borderWidth: 1,
    overflow: "hidden",
    marginTop: 20,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: fiftyPercent,
    height: 130,
    fontSize: 15,
    backgroundColor: "#2F5D62",
    borderBottomWidth: 1,
  },
  inactiveButtonContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
  },
  inactiveImageContainer: {
    borderColor: "black",
  },
  image: {
    height: 70,
    width: 70,
  },
  badgeText: {
    color: "white",
    marginTop: 5,
  },
  inactiveBadgeText: {
    color: "#323332",
  },
});

export default ButtonGroup;
