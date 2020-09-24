import React, { Component } from 'react';

import {View} from 'react-native';
import styles from './styles';
import ImgButton from './imgButton';
import FlatButton from './flatButton';

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

export default function Menu(){
    return(
        <View style={styles.background}>
            <View style={styles.TabContainer}>
                <ImgButton text="Descrição" source={require("../../assents/descricao.png")} onPress={aleta} icon = 'filetext1'/>
                <ImgButton text="Galeria" source={require("../../assents/galeria.png")} onPress={aleta} icon = 'picture'/>
                <ImgButton text="Guia de Cultivo" source={require("../../assents/guiadecultivo.png")} onPress={aleta} icon = 'book'/>
                <ImgButton text="Usos" source={require("../../assents/usos.png")} onPress={aleta} icon = 'bulb1'/>
            </View>
            <View style={styles.buttonForum}>
                <FlatButton text='FÓRUM' onPress={aleta}/>
            </View>
        </View>
    );
};