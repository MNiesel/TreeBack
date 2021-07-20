import React, {useState} from 'react';
import { Text, View , StyleSheet, SafeAreaView, Image} from 'react-native';

const Trees = ({navigation}) => {
  
    const [modalIsVisible, setModalIsVisible] = useState(true);
   
    return(
        <SafeAreaView style={styles.container}>
        <Text>
          Tree site under construction
        </Text>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 18,
        padding: 18,
    },
    image:{
      height: 40,
      width: 40,
      borderRadius: 50
    }
})

export default Trees;