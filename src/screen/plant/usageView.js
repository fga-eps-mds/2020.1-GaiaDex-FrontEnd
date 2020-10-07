import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import FlatButton from './flatButton';

export default function usageView({usage}) {
    return(
        <View>
            <ScrollView style={styles.usage}> 
                <Text>{usage}</Text>
            </ScrollView>
        </View>
    )
};
