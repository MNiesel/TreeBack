import React from 'react';
import { StyleSheet , Platform} from 'react-native';

export default StyleSheet.create({
    droidSafeArea: {
        flex:1,
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});