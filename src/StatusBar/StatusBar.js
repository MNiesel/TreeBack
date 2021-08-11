import React from "react";
import {View , StyleSheet, Text} from 'react-native';

const StatusBar = (props) => {
    const activeCircle = {
            height: 25,
            width: 25,
            borderRadius: 50,
            backgroundColor: "#2F5D62",
            marginBottom: 5
    }
    const inactiveCircle = {
        height: 25,
        width: 25,
        borderRadius: 50,
        borderColor: "#2F5D62",
        marginBottom: 5,
        borderWidth: 1
}

    const secondCircleIsActive = props.active > 1 ? activeCircle : inactiveCircle;
    let thirdCircleIsActive = props.active > 2 ? activeCircle: inactiveCircle;

  return (<View style={styles.barContainer}>
    <View style={styles.barPart}>
        <View style={styles.circle}>
        </View>
        <Text style={styles.circleText}>{props.firstText}</Text>
    </View>
    <View style={styles.barPart}>
        <View style={[secondCircleIsActive]}>
        </View>
        <Text style={styles.circleText}>{props.secondText}</Text>
    </View>
    <View style={styles.barPart}>
        <View style={[thirdCircleIsActive]}>
        </View>
        <Text style={styles.circleText}>{props.thirdText}</Text>
    </View>
  </View>);
};

const styles = StyleSheet.create({
barContainer: {
    marginTop: 5,
    height: 45,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
},
barPart:{
    alignItems: "center"
},
circle:{
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: "#2F5D62",
    marginBottom: 5
},
inactiveCircle:{
    height: 25,
    width: 25,
    borderRadius: 50,
    borderColor: "#2F5D62",
    marginBottom: 5,
    borderWidth: 1
},
circleText:{
    fontSize: 10
}
}) 

export default StatusBar;
