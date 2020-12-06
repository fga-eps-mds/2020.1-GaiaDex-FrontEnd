import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { ENDPOINTS } from '../../settings';

const register = async (plant) => {
  try {
    registerPlant(plant);
    // .then();
    // redirecionar para pagina minha planta com id do response.id
  } catch (err) {
    console.log(err);
  }
};

const Item = ({ item }) => (
  <TouchableOpacity
    style={styles.lista}
    onPress={() => {
      register(item);
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

export default function ({ setOpen, capturedPhoto, plants }) {
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
