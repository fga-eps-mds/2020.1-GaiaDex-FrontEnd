import React, { Component } from 'react';

import { View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import ImgButton from './imgButton';

function aleta(){
    Alert.alert(
        "In progress",
        "...",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
  
}

const Header = () =>(
    <View style = {styles.header}>
            <ImgButton text = '' onPress ={aleta} icon = 'arrowleft'/>
            <Icon name="sharealt" size={24} style = { styles.icon }/>
    </View>
);

export default Header;