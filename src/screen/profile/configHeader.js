import React from 'react';
import {
    View,
    Text, 
} from 'react-native'

import { AntDesign, Fontisto } from '@expo/vector-icons'

import styles from './style';
export default function ProfileHeaderConfig({ navigation }) {
    const saveConfig = () => {
        //save chnges at userConfig
        navigation.goBack() 
    }
    return(
        <View style={styles.pHeaderContainer}>
            <View style={styles.pHeaderDiv}>
                <AntDesign name="left" size={26} color="white" onPress={ () => navigatio.goBack()}/>
            </View>
            <View style={styles.pHeaderDiv}>
                <Text style={styles.pHeaderTitle}>Configutações</Text>  
            </View>
            <View style={styles.pHeaderDiv}>
                <Fontisto style={styles.pHeaderSaveIcon} name="save" size={24} color="white" onPress={ () => saveConfig()} />
            </View>
        </View>
    )
}