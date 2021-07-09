import React, { useState } from 'react';
import { Text, View , StyleSheet, SafeAreaView, TouchableOpacity, Button , Platform} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Feather } from "@expo/vector-icons";



const DUMMY_COLLEAGUES = [
    {key: 1, name: "Herbert Muller" },
    {key: 2, name: "Siegfried Schulz" },
    {key: 3, name: "John Holmes"},
    {key: 4, name: "Amanda Wattson"},

]

const Colleagues = ({navigation}) => {

    const [search, setSearch] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const searchChangeHandler = (search) => {
        setSearch(search);
        setFilteredList(DUMMY_COLLEAGUES.filter(colleague => colleague.name.toLowerCase().includes(search.toLowerCase())))
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
        <SearchBar platform="default" placeholder="Suche einen Kollegen" onChangeText={searchChangeHandler}  value={search} platform={Platform.OS} containerStyle={{backgroundColor:"none"}}/>
        {search.length > 0 ? filteredList.map(user => {
            return(
                <TouchableOpacity style={styles.userContainer} key={user.key} onPress={() => navigation.navigate("SelectUserFeedback" , {name: user.name})}>
                <Feather name="circle" size={50} color={"#323332"}/>
                    <Text>{user.name}</Text>
                </TouchableOpacity>
            )
        }): DUMMY_COLLEAGUES.map(user => { 
            return(
                <TouchableOpacity key={user.key} style={styles.userContainer} onPress={() => navigation.navigate("SelectUserFeedback", {name: user.name})}>
                <Feather name="circle" size={50} color={"#323332"}/>
                    <Text style={styles.userName}>{user.name}</Text>
                </TouchableOpacity>
            )
        })}
        </SafeAreaView>
    )
};

const fullWidth = "100%";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginRight: 18,
        marginLeft: 18 
    },
    userContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        width: fullWidth,
        marginTop: 20
    },
    userName: {
        fontSize: 15,
        marginLeft: 5
    }
});

export default Colleagues;