import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
export default function Header({ navigation }){
    return(
        <View style={styles.containerHeader}>
           <AntDesign name="left" size={24} color="white" onPress={() => navigation.goBack()}/>
           <View style={styles.headerIcons}>
                <EvilIcons name="search" size={26} color="white" />
                <AntDesign name="sharealt" size={24} color="white" style={{paddingHorizontal:10}} />
                <Entypo name="dots-three-vertical" size={24} color="white" />
           </View>
        </View>
    )
}