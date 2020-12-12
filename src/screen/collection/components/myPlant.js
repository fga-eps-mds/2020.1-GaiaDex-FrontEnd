import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../style';
import MenuBar from '../../../assets/components/menuBar';
import { favoritePlant, deleteMyPlant } from '../../../services/backEnd';

export default function MyPlants({ navigation, user, setUser }) {
  const [text, setText] = useState('');
  const [editingText, setEditingText] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState({});
  const favoritar = (plantID) => {
    favoritePlant(plantID).then((res) => setUser(res));
  };
  const deletar = (plantID) => {
    deleteMyPlant(plantID).then((res) => setUser(res));
  };
  const numColumns = 2;
  const MyPlant = ({ item }) => (
    <TouchableOpacity
      style={styles.myplantPlant}
      onPress={() => navigation.push('PlantCard', { itemID: item?.plant?._id })}
    >
      <ImageBackground
        source={{ uri: item?.plant?.profilePicture }}
        style={styles.FavoritePlantImg}
        imageStyle={{ borderRadius: 20 }}
      >
        <View
          style={styles.myplantInfo}
          onPress={() => {
            setPlantToEdit(item);
            setEdit(true);
          }}
        >
          <Text style={styles.plantText}>{item?.nickname}</Text>
          <AntDesign
            name="edit"
            size={24}
            color="#F2E0F5"
            onPress={() => {
              setEditingText(true);
              setPlantToEdit(item);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-around',
            marginTop: -7,
          }}
        >
          <AntDesign
            name="staro"
            size={24}
            color="#E0AC00"
            onPress={() => favoritar(item?.plant?._id)}
          />
          <FontAwesome
            name="trash"
            size={24}
            color="#E4572E"
            onPress={() => deletar(item?._id)}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <View style={styles.myPlantsContainer}>
      <FlatList
        data={user?.myPlants}
        numColumns={numColumns}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => <MyPlant item={item} />}
      />
    </View>
  );
}
