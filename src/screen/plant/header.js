import React, { Component } from 'react';

import { View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import ImgButton from './imgButton';

function aleta() {
  Alert.alert(
    'In progress',
    '...',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  );
}

const Header = ({ onPress }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <Icon name="arrowleft" size={24} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Icon name="sharealt" size={24} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default Header;
