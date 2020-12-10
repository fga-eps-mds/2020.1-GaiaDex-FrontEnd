import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Header({ navigation }) {
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity
        style={styles.containerHeaderIcon}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={35} color="black" />
        <Text style={styles.headerTitle}>Configurações</Text>
      </TouchableOpacity>
      <AntDesign name="setting" size={35} color="black" />
    </View>
  );
}
