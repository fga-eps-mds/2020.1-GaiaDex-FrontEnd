import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import styles from './style';
import MenuBar from '../../assets/components/menuBar';
import {
  getUserLogado,
  favoritePlant,
  desfavoritePlant,
  editMyPlant,
  deleteMyPlant,
} from '../../services/backEnd';

export default function Collection({ navigation }) {
  const [user, setUser] = useState({});
  const [text, setText] = useState('');
  const [editingText, setEditingText] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState({});
  useEffect(() => {
    getUserLogado().then((res) => setUser(res));
  }, []);
  const favoritar = (plantID) => {
    favoritePlant(plantID).then((res) => setUser(res));
  };
  const desfavoritar = (plantID) => {
    desfavoritePlant(plantID).then((res) => setUser(res));
  };
  const editarNickname = () => {
    editMyPlant(plantToEdit._id, text).then((res) => setUser(res));
  };
  const deletar = (plantID) => {
    deleteMyPlant(plantID).then((res) => setUser(res));
  };
  const numColumns = 3;
  const Favorite = ({ item }) => (
    <TouchableOpacity
      style={styles.FavoritePlant}
      onPress={() => navigation.push('PlantCard', { itemID: item?._id })}
    >
      <ImageBackground
        source={{ uri: item?.profilePicture }}
        style={styles.FavoritePlantImg}
        imageStyle={{ borderRadius: 30 }}
      >
        <View style={styles.plantInfo}>
          <Text style={styles.plantText}>{item?.scientificName}</Text>
        </View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <AntDesign
            name="star"
            size={24}
            color="#E0AC00"
            onPress={() => desfavoritar(item?._id)}
          />
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
    <View style={styles.container}>
      <Modal visible={editingText} transparent animationType="fade">
        <View style={styles.editView}>
          <View>
            <Text style={styles.editTitle}>
              Digite o novo nome para sua planta:
            </Text>
            <TextInput
              autoFocus
              onChangeText={(text) => setText(text)}
              style={styles.editTextInput}
            />
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <TouchableOpacity
              onPress={() => {
                editarNickname();
                setEditingText(false);
              }}
            >
              <Text style={styles.editButton}>FEITO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEditingText(false)}>
              <Text style={styles.editButton}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.exploreContainer}>
        <Text style={styles.exploreText}>Coleção</Text>
        <Ionicons
          name="ios-add-circle-outline"
          size={45}
          color="black"
          onPress={() => navigation.push('Scanner')}
        />
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
            renderItem={({ item }) => <Favorite item={item} />}
          />
        </View>
      </View>
      <View style={styles.myPlantsContainer}>
        <Text style={styles.myPlantsText}>Minhas Plantas</Text>
        <FlatList
          data={user?.myPlants}
          numColumns={numColumns}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => <MyPlant item={item} />}
        />
      </View>
      <MenuBar navigation={navigation} />
    </View>
  );
}
