import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { gray } from '../../theme/colorPalette';

export default function Header({ navigation }) {
  return (
    <View style={styles.containerHeader}>
      <AntDesign
        name="left"
        size={24}
        color={gray.iron()}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.headerIcons} />
    </View>
  );
}
