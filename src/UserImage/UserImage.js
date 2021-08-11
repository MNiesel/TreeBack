import React from "react";
import { View, StyleSheet, Image } from "react-native";
import badgeHelpers from '../Badge/badgeHelpers';

const UserImage = () => {
    const userImage = require("../../assets/testUser.jpg");

  return <Image style={styles.userImage} source={userImage} />;
};

const styles = StyleSheet.create({
  userImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 20,
  },
});

export default UserImage;
