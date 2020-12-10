import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Header() {
  return (
    <View style={styles.header}>
      <AntDesign name="left" size={30} color="white" />
      <TouchableOpacity style={styles.publicarDiv} onPress={() => postTopic()}>
        <MaterialIcons
          name="share"
          size={30}
          color="white"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: largura,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    flex: 1,
    marginBottom: 10,
  },
  publicarDiv: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-start',
    flex: 0.2,
  },
  publicarText: {
    marginTop: 2.5,
    marginRight: 20,
    color: 'white',
    fontSize: 15,
    fontWeight: '100',
  },
  backButton: {
    padding: 10,
  },
});
