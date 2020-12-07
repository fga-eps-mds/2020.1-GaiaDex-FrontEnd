import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Modal, Dimensions, Image } from 'react-native';
import styles from './style';
import MenuBar from '../../assets/components/menuBar';
import { Ionicons } from '@expo/vector-icons';
import { getUserLogado } from '../../services/backEnd';
import { FlatList } from 'react-native-gesture-handler';
 
export default function Collection({ navigation }){
     const [user, setUser] = useState({})
     const [edit, setEdit] = useState(false)
     const [plantToEdit, setPlantToEdit] = useState({})
     useEffect(() => {
        getUserLogado()
        .then(res => setUser(res))
      }, []);
      const numColumns = 3;
      const Favorite = ({ item }) => (
        <TouchableOpacity style={styles.FavoritePlant} onPress={() => navigation.push('PlantCard', { itemID: item?._id })}>
            <ImageBackground source={{ uri: item?.profilePicture }} style={styles.FavoritePlantImg} imageStyle={{ borderRadius: 30 }}>
                <View style={styles.plantInfo}>
                    <Text style={styles.plantText}>{item?.scientificName}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
      );
      const MyPlant = ({ item }) => (
        <TouchableOpacity style={styles.myplantPlant} onPress={() => navigation.push('PlantCard', { itemID: item?.plant?._id })}>
            <ImageBackground source={{ uri: item?.plant?.profilePicture }} style={styles.FavoritePlantImg} imageStyle={{ borderRadius: 20 }}>
                <TouchableOpacity style={styles.myplantInfo} onPress={() => {setPlantToEdit(item) ;setEdit(true)}}>
                    <Text style={styles.plantText}>{item?.nickname}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </TouchableOpacity>
      );
      const PlantEdit = ( ) => (
        <View style={{height: Dimensions.get('screen').height, justifyContent:"center", alignItems:"center"}}>
            <View style={styles.editView}>
                <View style={styles.editHeader}>
                    <Text>{plantToEdit?.plant?.scientificName}</Text>
                    <Ionicons name="md-close-circle-outline" size={24} color="black" onPress={() => setEdit(false)}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <ImageBackground
                        source={{uri:plantToEdit?.plant?.profilePicture}}
                        style={styles.editImage}
                    />
                    <View style={{justifyContent:"space-between", paddingLeft: 7}}>
                        <View>
                            <Text style={styles.editText}>
                                {plantToEdit?.nickname}
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={[styles.editText, {color: "#E0AC00"}]}>
                                    Favoritar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.editText}>
                                    Editar apelido
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.editText, {color: "#E4572E"}]}>
                                    Excluir da coleção
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      );
     return(
         <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={edit}
            >
                <PlantEdit/>
             </Modal>
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