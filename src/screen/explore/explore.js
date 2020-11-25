import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import MenuBar from './menuBar';
import { EvilIcons } from '@expo/vector-icons';
import { getUser } from '../../services/backEnd';
import { FlatList } from 'react-native-gesture-handler';
 
export default function Explore({ navigation }){
     const [user, setUser] = useState({})
     const userID = '5fb6ae9a66149b0050db65a1';
     useEffect(() => {
        getUser(userID)
        .then(res => setUser(res))
      }, []);

      const Favorite = ({ item }) => (
        <View style={styles.FavoritePlant}>
            <View style={styles.plantInfo}>
                <Text style={styles.plantText}>{item?.scientificName}</Text>
            </View>
        </View>
      );
      const MyPlant = ({ item }) => (
        <View style={styles.myplantPlant}>
            <View style={styles.myplantInfo}>
                <Text style={styles.plantText}>{item?.scientificName}</Text>
            </View>
        </View>
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
                    horizontal
                    data={user?.favorites}
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