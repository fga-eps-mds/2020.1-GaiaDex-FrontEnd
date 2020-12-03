import React ,{ useState, useEffect }from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons'
import { getFavorites, getUserLogado, delFavorite } from '../../services/backEnd'
import MenuBar from '../../assets/components/menuBar'

export default function Favorite({ navigation }){

    const [favorites, setFavorites] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserLogado()
        .then(res => setUser(res))
        getFavorites(user?._id)
        .then( data => {
            setFavorites(data.favorites);
        })
    }, []); 

    const deleteFavorite = (favoriteId) => {
        delFavorite(favoriteId)
        .then(res => setFavorites(res.favorites))
    }

    const Item = ({ item }) => (

        <View style={styles.plant}>
            
            <ImageBackground source={{uri : item?.profilePicture}} style={styles.plantBackground} imageStyle={{ borderRadius: 30 }}>
            </ImageBackground>
            

            <View style={styles.plantDescription}>
                <Text numberOfLines={1} style={styles.plantDescriptionTitle}>
                    { item?.scientificName }
                </Text>
                <Text numberOfLines={2} style={styles.plantDescriptionText}>
                    { item?.usage }
                </Text>
                <View style={styles.plantButtonDiv}>
                    <TouchableOpacity style={styles.plantButton} onPress={() => navigation.push('Plant',{ itemID: item?._id } )}>
                        <Entypo name="chevron-right" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteFavorite(item?._id)}>
                        <AntDesign name="delete" size={20} color="white" />
                    </TouchableOpacity>
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
            <MenuBar/>
        </View>
        
    )
}