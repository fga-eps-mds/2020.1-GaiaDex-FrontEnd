import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import MenuBar from '../../assets/components/menuBar';
import MyPlants from './components/MyPlants';
import Favorite from './components/Favorite';
import { getUserLogged, desfavoritePlant, updateMyPlant } from '../../services';
import { gray } from '../../theme/colorPalette';

export default function Collection({ navigation }) {
  const [user, setUser] = useState({});
  const [text, setText] = useState('');
  const [editingText, setEditingText] = useState(false);
  const [plantToUpdate, setPlantToUpdate] = useState({});
  const [plantTab, setPlantTab] = useState(true);
  useEffect(() => {
    getUserLogged().then((res) => setUser(res));
  }, []);
  const desfavoritar = (plantID) => {
    desfavoritePlant(plantID).then((favorites) =>
      setUser({ ...user, favorites })
    );
  };
  const editarNickname = () => {
    updateMyPlant(plantToUpdate._id, text).then((res) => setUser(res));
  };
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
              onChangeText={(val) => setText(val)}
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
          color={gray.shark()}
          onPress={() => navigation.push('Scanner')}
        />
      </View>
      <View style={styles.popularContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setPlantTab(true)}>
            <Text style={plantTab ? styles.tabTextActive : styles.tabText}>
              Minhas Plantas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPlantTab(false)}>
            <Text style={plantTab ? styles.tabText : styles.tabTextActive}>
              Favoritas
            </Text>
          </TouchableOpacity>
        </View>

        {plantTab ? (
          <>
            <MyPlants
              user={user}
              setUser={setUser}
              navigation={navigation}
              setPlantTab={setPlantTab}
              setPlantToUpdate={setPlantToUpdate}
              setEditingText={setEditingText}
            />
          </>
        ) : (
          <>
            <Favorite
              user={user}
              setUser={setUser}
              navigation={navigation}
              desfavoritar={desfavoritar}
            />
          </>
        )}
      </View>

      <MenuBar navigation={navigation} />
    </View>
  );
}
