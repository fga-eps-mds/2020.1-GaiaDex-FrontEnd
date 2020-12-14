import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles';
import { favoritePlant, deleteMyPlant } from '../../../services/backEnd';
import { purple, highlight } from '../../../theme/colorPalette';

export default function MyPlants({
  navigation,
  user,
  setUser,
  setPlantToEdit,
  setEditingText,
  setPlantTab,
}) {
  const favoritar = (plantID) => {
    favoritePlant(plantID)
      .then((res) => setUser(res))
      .then(() => setPlantTab(false));
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
            setEditingText(true);
          }}
        >
          <Text style={styles.plantText}>{item?.nickname}</Text>
          <AntDesign
            name="edit"
            size={24}
            color={purple.frenchLilacLighter()}
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
            marginTop: 0,
          }}
        >
          <AntDesign
            name="star"
            size={28}
            color={highlight.lightningYellow()}
            onPress={() => favoritar(item?.plant?._id)}
          />
          <FontAwesome
            name="trash"
            size={28}
            color={highlight.cinnabar()}
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
