import React ,{ useState, useEffect }from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons'

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
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>Favoritos</Text>
                    <EvilIcons name="search" size={50} color="black" />
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.plant}>
                    <View style={styles.plantBackground}>
                   
                    </View>

                    <View style={styles.plantDescription}>
                        <Text style={styles.plantDescriptionTitle}>
                            Samambaia
                        </Text>
                        <Text style={styles.plantDescriptionText}>
                            Uma planta cheia de Ritmo
                        </Text>

                        <View style={styles.plantButton}>
                        <Entypo name="chevron-right" size={24} color="white" />
                        </View>
                    </View>

                    


                </View>
            </View>
        </View>
        
    )
}