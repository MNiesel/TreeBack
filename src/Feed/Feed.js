import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import { StatusBar } from "expo-status-bar";

import FeedbackCard from '../FeedbackCard/FeedbackCard';

const DUMMY_DATA = [
        {
            id: 1,
            from: "Marius Hindenlang",
            badge: "creative",
            text: "Hallo Tom. Deine Ideen waren wirklich super gut. Vielen Dank für alles mein Lieber"
        },
        {
            id: 2,
            from: "Sandra Kuriha - Sana",
            badge: "hero",
            text: "Du hast wirklich was geleistet. Danke dir!"
        }
    ]
    

const Feed = () => {
    return(
        <SafeAreaView style={style.container}>
        {DUMMY_DATA.map(item => {
            return(
                <FeedbackCard key={item.id} index={item.id} from={item.from} badge={item.badge} text={item.text} />
            );
        })}
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 18,
        marginRight: 18
    }
})

export default Feed;