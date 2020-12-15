import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { gray } from '../../theme/colorPalette';

export default function Header({ title, onPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerNav} onPress={onPress}>
        <AntDesign name="left" size={24} color={gray.iron()} />
        <Text style={{ color: gray.iron(), fontSize: 18 }}>{title}</Text>
      </TouchableOpacity>
      <View style={{ flex: 0.2 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: gray.shark(),
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingTop: 15,
  },
  headerNav: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  publicarDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  publicarText: {
    marginRight: 5,
    color: gray.iron(),
    fontSize: 15,
    fontWeight: '100',
  },
});
