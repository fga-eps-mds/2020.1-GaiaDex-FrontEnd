import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import stylesEdit from '../collection/styles';
import { registerPlant, addMyPlant } from '../../services';

export default function Result({ setOpen, capturedPhoto, plants, navigation }) {
  const [editingText, setEditingText] = useState(false);
  const [text, setText] = useState('');
  const [plantToEdit, SetPlantToEdit] = useState({});
  const register = async (plant, nickName) => {
    try {
      // registra a planta no banco
      registerPlant(plant)
        .then((res) => addMyPlant(res._id, nickName))
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
        SetPlantToEdit(item);
        setEditingText(true);
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

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.result}>
      <Modal visible={editingText} transparent animationType="fade">
        <View style={stylesEdit.editView}>
          <View>
            <Text style={stylesEdit.editTitle}>
              Digite o novo nome para sua planta:
            </Text>
            <TextInput
              autoFocus
              onChangeText={(val) => setText(val)}
              style={stylesEdit.editTextInput}
            />
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <TouchableOpacity
              onPress={() => {
                register(plantToEdit, text);
                setEditingText(false);
              }}
            >
              <Text style={stylesEdit.editButton}>FEITO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEditingText(false)}>
              <Text style={stylesEdit.editButton}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
