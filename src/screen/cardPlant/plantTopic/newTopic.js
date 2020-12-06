import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles';

export default function NewTopic({ navigation }) {
  return (
    <View style={styles.ButtonBackground}>
      <View style={styles.ButtonDiv}>
        <Feather name="edit" size={30} color="white" />
      </View>
    </View>
  );
}
