import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import estilo from './styles';


const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;


export default function ImgButton({ text, onPress ,source, icon}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                
                <ImageBackground source={source} style={styles.imagem}>
                    <Icon name={`${icon}`} size={24} style = {estilo.icon}/>
                    <Text style={styles.txt}>{text}</Text>
                </ImageBackground>
               
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imagem:{
        margin:1,
        width:(largura-100)/2,
        height: (largura-130)/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin:1,
        width: (largura-100)/2,
        height: (largura-130)/2,
        backgroundColor: 'rgba(0,0,0,0)',
        
        

    },
    Styletext:{
        textAlign:'center',
        color:'#000000',
        fontSize:14,

    },
    txt:{
        
        textAlign:'center',
        fontSize:16,
        color:'white',
        
    }


});