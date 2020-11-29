import React ,{ useState, useEffect }from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './style';
import { AntDesign, EvilIcons } from '@expo/vector-icons'

export default function Favorite({ navigation }){
    const[favorites,setFavorites] = useState({});
    useEffect(() => {
        
    }, []); 

    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerIcon}>
                    <AntDesign name="left" size={30} color="black" />
                </View>
                <View style={styles.headerIcon}>
                    <Text style={styles.headerTitleText}>Favoritos</Text>
                    <EvilIcons name="search" size={35} color="black" />
                </View>
            </View>
            <View style={styles.body}>
            
            </View>
        </View>
        
    )
}