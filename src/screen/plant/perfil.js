import React, { Component } from 'react';

import { View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Header from './header';

export default function Perfil({foto, nomeComum, nomeScientifico, contador}){
    return(
        <ImageBackground source={{uri: foto}} style={styles.imagem}>
            <Header/>
            <Text style={styles.plantCommonname}>
                {nomeComum}
            </Text>
            <Text style={styles.plantText}>
                {nomeScientifico}
            </Text>
            <View style={styles.plantLikesBanner}>
                <Icon name="hearto" size={24} style = { styles.icon2}/>
                <Text style={styles.plantLikes}>
                    {contador}x
                </Text>
            </View>
        </ImageBackground> 
    )
};