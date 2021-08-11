import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const Header = (props) => {
    return(
        <View style={styles.headerContainer}>
        <View style={styles.headerLeft}></View>
            <View>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
headerContainer:{
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
},
headerLeft:{
padding: 6
},
titleText:{
    fontSize: 17,
}
})

export default Header;

