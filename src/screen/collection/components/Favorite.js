import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import styles from './styles';

export default function Favorite({ navigation, user, setUser, desfavoritar }) {
  const Item = ({ item }) => (
    <View style={styles.plant}>
      <ImageBackground
        source={{ uri: item?.profilePicture }}
        style={styles.plantBackground}
        imageStyle={{ borderRadius: 20 }}
      />

      <View style={styles.plantDescription}>
        <Text numberOfLines={1} style={styles.plantDescriptionTitle}>
          {item?.scientificName}
        </Text>
        <Text numberOfLines={2} style={styles.plantDescriptionText}>
          {item?.usage}
        </Text>
        <View style={styles.plantButtonDiv}>
          <TouchableOpacity
            style={styles.plantButton}
            onPress={() => navigation.push('PlantCard', { itemID: item?._id })}
          >
            <Entypo name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => desfavoritar(item?._id)}
          >
            <AntDesign name="delete" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <FlatList
      data={user?.favorites}
      renderItem={renderItem}
      keyExtractor={(item) => item?._id}
    />
  );
}
