import "intl";
import "intl/locale-data/jsonp/en";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageEditor,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import FeedbackCard from "../FeedbackCard/FeedbackCard";
import MeetingFeedbackCard from "../FeedbackCard/MeetingFeedbackCard";

const Feed = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const loggedInUser = "Statischer Test User";

  async function fetchFeedbacks() {
    setIsFetching(true);
    const feedbackResponse = await fetch(
      "https://treeback-80147-default-rtdb.europe-west1.firebasedatabase.app/feedbacks.json"
    );
    const feedbackData = await feedbackResponse.json();

    const loadedFeedbacks = [];

    for (const key in feedbackData) {
      loadedFeedbacks.push({
        id: feedbackData[key].id,
        from: feedbackData[key].from,
        to: feedbackData[key].to,
        badge: feedbackData[key].badge,
        text: feedbackData[key].text,
        timestamp: feedbackData[key].timestamp,
        isMeeting: false,
      });
    }

    const meetingResponse = await fetch(
      "https://treeback-80147-default-rtdb.europe-west1.firebasedatabase.app/meetingFeedbacks.json"
    );
    const meetingData = await meetingResponse.json();

    for (const key in meetingData) {
      loadedFeedbacks.push({
        id: meetingData[key].id,
        from: meetingData[key].from,
        badge: meetingData[key].badge,
        text: meetingData[key].text,
        timestamp: meetingData[key].timestamp,
        isMeeting: true,
        meetingTitle: meetingData[key].meetingTitle,
      });
    }
    setFeedbacks(loadedFeedbacks);
    setIsFetching(false);
  }

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const renderItem = ({ item }) => {
    if(item.isMeeting){
      return (
        <MeetingFeedbackCard
          key={item.id}
          from={item.from}
          badge={item.badge}
          text={item.text}
          date={new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(item.timestamp)}
          meetingTitle={item.meetingTitle}
          index={item.id}
        />
      );}
      else{
        return (
          <FeedbackCard
            key={item.id}
            index={item.id}
            from={item.from}
            badge={item.badge}
            text={item.text}
            to={item.to}
            date={new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(item.timestamp)}
          />
        );
      }
    }
    
  return (
    <SafeAreaView style={style.container}>
    <StatusBar/>
      <FlatList
        data={feedbacks.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        })}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={() => {
          fetchFeedbacks();
        }}
        refreshing={isFetching}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
  },
});

export default Feed;
