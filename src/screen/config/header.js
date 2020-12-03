import React, { useState } from 'react';
import {
    View,
    Switch,
    Text,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Header({ navigation }){

    return(
        <View style={styles.containerHeader}>
            <View style={styles.containerHeaderIcon}>
                <AntDesign name="left" size={35} color="black" />
                <Text style={styles.headerTitle}>Configurações</Text>  
            </View>
          <AntDesign name="setting" size={35} color="black" />  
        </View>
    )
}
