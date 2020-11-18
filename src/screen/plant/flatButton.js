import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;
export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.Styletext}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: (largura * 3) / 5,
    height: largura / 9,
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FCEFF9',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#04471C',
  },
  Styletext: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
  },
});
