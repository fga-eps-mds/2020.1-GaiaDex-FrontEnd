import React from 'react';
import {View, Alert, Text} from 'react-native';
import styles from './styles';

export default function Alternative({text}) {
    return(
        <View style = {styles.background}>
            <Text>{text}</Text>
        </View>
    )
};