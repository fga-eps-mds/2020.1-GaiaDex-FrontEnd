import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import styles from './style';
import { getPlant } from '../../../services/backEnd';

const userDefaultImg = require('../../../assets/userDefault.png');

export default function PlantCardInfo({ plantID }) {
  const [plant, setPlant] = useState({});
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    getPlant(plantID).then((res) => setPlant(res.plant));
  }, []);

  const User = ({ item }) => (
    <View style={styles.userDiv}>
      <ImageBackground
        source={
          plant?.user?.photo ? { uri: plant?.user?.photo } : userDefaultImg
        }
        style={styles.UserImg}
        imageStyle={{ borderRadius: 50 }}
      />
      <Text style={styles.userName}>{item?.user?.username}</Text>
    </View>
  );
  const renderUser = ({ item }) => <User item={item} />;

  return (
    <View style={styles.containerBody}>
      <View style={styles.bodyTopics}>
        <View style={styles.bodyDescription}>
          <Text style={styles.bodyPlantsTitle}>Descrição</Text>
          {!isClick ? (
            <>
              <View style={styles.descriptionContainer}>
                <Text numberOfLines={2} style={styles.descriptionContainerText}>
                  {plant?.usage}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsClick(!isClick)}
              >
                <AntDesign name="down" size={15} color="black" />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.descriptionContainerTextOpen}>
                <Text
                  numberOfLines={10}
                  style={styles.descriptionContainerText}
                >
                  {plant?.usage}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsClick(!isClick)}
              >
                <AntDesign name="up" size={18} color="black" />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.bodyInfo}>
          <Text style={styles.bodyPlantsTitle}>Informações básicas</Text>
          <View style={styles.basicContainer}>
            <View style={styles.basicContainerDiv}>
              <Text style={styles.basicTitle}>Caracteristicas</Text>
              <Text style={styles.basicContainerText}>
                Nome científico: {plant?.scientificName}
              </Text>
              <Text style={styles.basicContainerText}>
                Gênero: {plant?.genderName}
              </Text>
              <Text style={styles.basicContainerText}>
                Família: {plant?.familyName}
              </Text>
            </View>
            <View style={styles.basicContainerDiv}>
              <Text style={styles.basicTitle}>Informações</Text>
              <Text style={styles.basicContainerText}>
                GbifID: {plant?.gbifID}
              </Text>
              <Text style={styles.basicContainerText}>
                Extinção: {plant?.extinction?.toString()}
              </Text>
              <Text style={styles.basicContainerText}>
                Estado: {plant?.stateProvince}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bodyPlants}>
        <Text style={styles.bodyPlantsTitle}>Usuários relacionados:</Text>
        <FlatList
          data={plant?.topics}
          horizontal
          renderItem={renderUser}
          keyExtractor={(item) => item?._id}
        />
      </View>
    </View>
  );
}
