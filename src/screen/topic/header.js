import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { gray } from '../../theme/colorPalette';

export default function Header({ title, onPress }) {
  return (
    <View style={styles.header}>
      <View style={{ flex: 0.1 }}>
        <AntDesign
          name="left"
          size={24}
          color={gray.iron()}
          onPress={onPress}
        />
      </View>
      <View style={{ flex: 0.9 }}>
        <Text style={{ color: gray.iron(), fontSize: 18 }}>{title}</Text>
      </View>
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
