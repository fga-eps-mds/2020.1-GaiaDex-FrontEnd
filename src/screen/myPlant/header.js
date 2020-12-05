import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
export default function Header({ navigation }){
    return(
        <View style={styles.containerHeader}>
           <AntDesign name="left" size={34} color="white" onPress={() => navigation.goBack()} style={{marginLeft:'3%'}}/>
           <View style={styles.headerIcons}>
                <Entypo name="dots-three-vertical" size={34} color="white"  style={{marginRight:'3%'}}/>
           </View>
        </View>
    )
}