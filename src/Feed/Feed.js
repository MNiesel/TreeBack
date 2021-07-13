import 'intl';
import 'intl/locale-data/jsonp/en';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet , FlatList} from 'react-native';
import { StatusBar } from "expo-status-bar";

import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feed = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    async function fetchFeedbacks() {
        const response = await fetch("https://treeback-80147-default-rtdb.europe-west1.firebasedatabase.app/feedbacks.json")
       const data = await response.json();

       const loadedFeedbacks = [];
       console.log(data);

      for(const key in data){
          loadedFeedbacks.push({
              id: data[key].id,
              from: data[key].from,
              to: data[key].to,
              badge: data[key].badge,
              text: data[key].text,
              timestamp: data[key].timestamp
          });
      };
      setFeedbacks(loadedFeedbacks);
    }

    useEffect(() =>{
        fetchFeedbacks()
    },[])

    const renderItem = ({item}) => {
        return(
        <FeedbackCard key={item.id} index={item.id} from={item.from} badge={item.badge} text={item.text} date={new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(item.timestamp)}/>
        )
    };
    return(
        <SafeAreaView style={style.container}>
        <FlatList
            data={feedbacks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
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