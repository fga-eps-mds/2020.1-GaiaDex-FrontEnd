import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';
import MenuBar from '../../assets/components/menuBar';
import { Ionicons } from '@expo/vector-icons';
import { getUserLogado } from '../../services/backEnd';
import { FlatList } from 'react-native-gesture-handler';
 
export default function Collection({ navigation }){
     const [user, setUser] = useState({})
     const [allPlants, setAllPlants] = useState({})
     useEffect(() => {
        getUserLogado()
        .then(res => setUser(res))
      }, []);
      const numColumns = 3;
      const Favorite = ({ item }) => (
        <TouchableOpacity style={styles.FavoritePlant} onPress={() => navigation.push('Plant', { itemID: item?._id })}>
            <ImageBackground source={{ uri: item?.profilePicture }} style={styles.FavoritePlantImg} imageStyle={{ borderRadius: 30 }}>
                <View style={styles.plantInfo}>
                    <Text style={styles.plantText}>{item?.scientificName}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
      );
      const MyPlant = ({ item }) => (
        <TouchableOpacity style={styles.myplantPlant} onPress={() => navigation.push('Plant', { itemID: item?.plant?._id })}>
            <ImageBackground source={{ uri: item?.plant?.profilePicture }} style={styles.FavoritePlantImg} imageStyle={{ borderRadius: 20 }}>
                <View style={styles.myplantInfo}>
                    <Text style={styles.plantText}>{item?.nickname}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
      );
     return(
         <View style={styles.container}>
             <View style={styles.exploreContainer}>
                <Text style={styles.exploreText}>Coleção</Text>
                <Ionicons name="ios-add-circle-outline" size={45} color="black" onPress={() => navigation.push('Scanner')} />
             </View>
             <View style={styles.popularContainer}>
                <View style={styles.popularTabs}>
                    <Text style={styles.popularTab}>Favoritas</Text>
                </View>
                <View style={styles.popularContent}>
                <FlatList
                    horizontal
                    data={user?.favorites}
                    keyExtractor={(item) => item?._id}
                    renderItem={({ item }) => (
                        <Favorite
                            item={item}
                        />
                        
                    )}
                    />
                </View>
             </View>
             <View style={styles.myPlantsContainer}>
                <Text style={styles.myPlantsText}>Minhas Plantas</Text>
                <FlatList
                    
                    data={user?.myPlants}
                    numColumns={numColumns}
                    keyExtractor={(item) => item?._id}
                    renderItem={({ item }) => (
                        <MyPlant
                            item={item}
                        />
                        
                    )}
                    />
             </View>
             <MenuBar navigation={ navigation }/>
         </View>
     )
 };