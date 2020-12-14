import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import MenuBar from '../../assets/components/menuBar';
import { getUserLogged, getPlants } from '../../services';
import { gray } from '../../theme/colorPalette';

export default function Explore({ navigation }) {
  const [user, setUser] = useState({});
  const [plants, setPlants] = useState({});
  useEffect(() => {
    getPlants().then((dado) => setPlants(dado));
    getUserLogged().then((res) => setUser(res));
  }, []);

  const Popular = ({ item }) => (
    <TouchableOpacity
      style={styles.FavoritePlant}
      onPress={() => navigation.push('PlantCard', { itemID: item?._id })}
    >
      <ImageBackground
        source={{ uri: item?.profilePicture }}
        style={styles.FavoritePlantImg}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.plantInfo}>
          <Text style={styles.plantText}>{item?.scientificName}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  const MyPlant = ({ item }) => (
    <TouchableOpacity
      style={styles.myplantPlant}
      onPress={() => navigation.push('PlantCard', { itemID: item?.plant?._id })}
    >
      <ImageBackground
        source={{ uri: item?.plant?.profilePicture }}
        style={styles.FavoritePlantImg}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.myplantInfo}>
          <Text style={styles.plantText}>{item?.nickname}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.exploreContainer}>
        <Text style={styles.exploreText}>Explorar</Text>
        <EvilIcons name="search" size={45} color={gray.shark()} />
      </View>
      <View style={styles.popularContainer}>
        <View style={styles.popularTabs}>
          <Text style={styles.popularTab}>Populares</Text>
        </View>
        <View style={styles.popularContent}>
          <FlatList
            horizontal
            data={plants}
            keyExtractor={(item) => item?._id}
            renderItem={({ item }) => <Popular item={item} />}
          />
        </View>
      </View>
      <View style={styles.myPlantsContainer}>
        <TouchableOpacity onPress={() => navigation.push('Collection')}>
          <Text style={styles.popularTab}>Minhas Plantas</Text>
        </TouchableOpacity>
        <FlatList
          horizontal
          data={user?.myPlants}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => <MyPlant item={item} />}
        />
      </View>
      <MenuBar navigation={navigation} />
    </View>
  );
}
