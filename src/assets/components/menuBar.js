import React from 'react';
import { View } from 'react-native';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import styles from './style';
import { gray } from '../../theme/colorPalette';

export default function MenuBar({ navigation }) {
  return (
    <View style={styles.mbContainer}>
      <View style={styles.mbContent}>
        <View style={styles.mbIcons}>
          <Feather
            style={styles.mbIcons}
            name="home"
            size={32}
            color={gray.iron()}
            onPress={() => navigation.push('Explore')}
          />
        </View>
        <View style={styles.mbIcons}>
          <Entypo
            name="flower"
            size={30}
            color={gray.iron()}
            onPress={() => navigation.push('Collection')}
          />
        </View>
        <View style={styles.mbCameraDiv}>
          <View style={styles.mbCameraIcon}>
            <Feather
              name="camera"
              size={35}
              color={gray.iron()}
              onPress={() => navigation.push('Scanner')}
            />
          </View>
        </View>
        <View style={styles.mbIcons}>
          <Ionicons
            name="logo-twitch"
            size={32}
            color={gray.iron()}
            onPress={() => navigation.push('Forum')}
          />
        </View>
        <View style={styles.mbIcons}>
          <AntDesign
            name="user"
            size={32}
            color={gray.iron()}
            onPress={() => navigation.push('MyProfile')}
          />
        </View>
      </View>
    </View>
  );
}
