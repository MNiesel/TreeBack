import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { Image } from 'react-native';
import badgeHelpers from "../Badge/badgeHelpers"

const FreeTextScreen = ({route}) =>{
const {name} = route.params;
const {badge} = route.params;

const image = badgeHelpers.getBadgeImage(badge);
const badgeText = badgeHelpers.getBadgeText(badge);


    return(
        <View style={styles.container}>
        <View style={styles.userContainer}>
            <Feather name="circle" size={50} color="#323332" />
            <Text style={styles.userNameText}>{name}</Text>
        </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image}/>
                <Text>{badgeText}</Text>
            </View>
        </View>
    );
};
const fullWidth = "100%";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 18,
        marginRight: 18
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
      imageContainer:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30
      },
      image: {
        height: 150,
        width: 150,
        borderColor: "#D9E2E3",
        borderRadius: 100,
        borderWidth: 2,
        alignItems: "center",
      },


})

export default FreeTextScreen;