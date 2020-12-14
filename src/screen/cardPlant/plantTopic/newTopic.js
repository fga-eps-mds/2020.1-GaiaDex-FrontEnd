import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles';
import { gray } from '../../../theme/colorPalette';

export default function NewTopic({ onPress }) {
  return (
    <View style={styles.ButtonBackground}>
      <TouchableOpacity style={styles.ButtonDiv} onPress={onPress}>
        <Feather name="edit" size={30} color={gray.iron()} />
      </TouchableOpacity>
    </View>
  );
}
