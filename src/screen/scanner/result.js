import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { registerPlant, addMyPlant } from '../../services';

export default function ({ setOpen, capturedPhoto, plants, navigation }) {

  const register = async (plant, nickName) => {
    try {
      //registra a planta no banco
      registerPlant(plant)
      .then(res => addMyPlant(res._id, nickName))
      .then(() => setOpen(false))
      .then(() => navigation.push('MyProfile'));    
    } catch (err) {
      console.log(err);
    }
  };
  
  const Item = ({ item }) => (
    <TouchableOpacity
      style={styles.lista}
      onPress={() => {
        AddPlant(item);
      }}
    >
      <Text style={styles.textList}>
        Nome cientifico: {item.species.scientificNameWithoutAuthor}
      </Text>
      <Text style={styles.textList}>
        Nomes comum: {item.species.commonNames.join(', ')}
      </Text>
      <Text style={styles.textList}>Score: {item.score}</Text>
    </TouchableOpacity>
  );

  const AddPlant = (plant) =>{
      Alert.prompt(
        "Adicione um nome",
        "Escolha um apelido para sua plantinha",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: Apelido => register(plant, Apelido)
          }
        ],
      );
  }

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <View style={styles.result}>
      <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Image style={styles.imagem} source={{ uri: capturedPhoto }} />
      <Text style={styles.titulo}>
        Esses são os resultados para a sua foto:
      </Text>
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={(item) => item.species.scientificNameWithoutAuthor}
      />
    </View>
  );
}
