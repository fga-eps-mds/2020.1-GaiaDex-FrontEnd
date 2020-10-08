import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; //md-close

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;
export default function ExitButton({ onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>  
                <Icon name="md-close" size={24} style = { styles.icon }/> 
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    icon: {
        width:largura/8,
        height:altura/10,
        margin:20,
        marginTop:0,
        marginBottom:-50,
        
    },

})