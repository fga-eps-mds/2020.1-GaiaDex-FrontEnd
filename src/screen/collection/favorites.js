import React ,{ useState, useEffect }from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons'
import { getFavorites } from '../../services/backEnd'

export default function Favorite({ navigation }){

    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        const userId = navigation.getParam('itemId', '5fc58de337df80002852134f');;
        getFavorites(userId)
        .then( data => {
            console.log(data);
            setFavorites(data.favorites);
        })
    }, []); 

    const Item = ({ item }) => (

        <View style={styles.plant}>
            <View style={styles.plantBackground}>
            
            </View>

            <View style={styles.plantDescription}>
                <Text style={styles.plantDescriptionTitle}>
                    { item?.scientificName }
                </Text>
                <Text style={styles.plantDescriptionText}>
                    { item?.usage }
                </Text>

                <View style={styles.plantButton}>
                <Entypo name="chevron-right" size={24} color="white" />
                </View>
            </View>
        </View>
    );
    const renderItem = ({ item }) => <Item item={item} />;
    
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
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item?._id}
            />
            </View>
        </View>
        
    )
}