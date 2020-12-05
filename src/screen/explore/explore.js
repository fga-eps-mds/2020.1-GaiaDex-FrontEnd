import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';
import MenuBar from '../../assets/components/menuBar';
import { EvilIcons } from '@expo/vector-icons';
import { getUserLogado, getPlants } from '../../services/backEnd';
import { FlatList } from 'react-native-gesture-handler';
 
export default function Explore({ navigation }){
     const [user, setUser] = useState({})
     const [plants, setPlants] = useState({})
     useEffect(() => {
        getPlants()
        .then(dado => setPlants(dado))
        getUserLogado()
        .then(res => setUser(res))
      }, []);

      const Popular = ({ item }) => (
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
                <Text style={styles.exploreText}>Explorar</Text>
                <EvilIcons name="search" size={45} color="black" />
             </View>
             <View style={styles.popularContainer}>
                <View style={styles.popularTabs}>
                    <Text style={styles.popularTab}>Populares</Text>
                </View>
                <View style={styles.popularContent}>
                <FlatList
                    horizontal
                    data={plants.plants}
                    keyExtractor={(item) => item?._id}
                    renderItem={({ item }) => (
                        <Popular
                            item={item}
                        />
                        
                    )}
                    />
                </View>
             </View>
             <View style={styles.myPlantsContainer}>
                <Text style={styles.myPlantsText}>Minhas Plantas</Text>
                <FlatList
                    horizontal
                    data={user?.myPlants}
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