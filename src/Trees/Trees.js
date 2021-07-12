import React, {useState} from 'react';
import { Text, View , StyleSheet} from 'react-native';
import SuccessModal from "../Modal/SuccessModal"

const Trees = ({navigation}) => {
    const [modalIsVisible, setModalIsVisible] = useState(true);
   
    return(
        <View style={styles.container}>
       
        <Text>Hello from Trees</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 18,
        padding: 18,
    },
    modalView:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Trees;