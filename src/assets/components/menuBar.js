import React from 'react';
<<<<<<< HEAD
import { View } from 'react-native';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import styles from './style';

export default function MenuBar({ navigation }) {
  return (
    <View style={styles.mbContainer}>
      <View style={styles.mbContent}>
        <View style={styles.mbIcons}>
          <Feather
            style={styles.mbIcons}
            name="home"
            size={32}
            color="white"
            onPress={() => navigation.push('Explore')}
          />
        </View>
        <View style={styles.mbIcons}>
          <Entypo name="flower" size={30} color="white" />
        </View>
        <View style={styles.mbCameraDiv}>
          <View style={styles.mbCameraIcon}>
            <Feather
              name="camera"
              size={35}
              color="white"
              onPress={() => navigation.push('Scanner')}
            />
          </View>
        </View>
        <View style={styles.mbIcons}>
          <Ionicons
            name="logo-twitch"
            size={32}
            color="white"
            onPress={() => navigation.push('Forum')}
          />
        </View>
        <View style={styles.mbIcons}>
          <AntDesign
            name="user"
            size={32}
            color="white"
            onPress={() => navigation.push('MyProfile')}
          />
        </View>
      </View>
    </View>
  );
}
=======
import { View, Text } from 'react-native';
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import styles from './style';
 export default function MenuBar({ navigation }){
     return(
         <View style={styles.mbContainer}>
             <View style={styles.mbContent}>
                <View style={styles.mbIcons}>
                    <Feather style={styles.mbIcons} name="home" size={32} color="white" onPress={() =>navigation.push('Explore')}/>
                </View>
                <View style={styles.mbIcons}>
                    <Entypo name="flower" size={30} color="white" />
                </View>
                <View style={styles.mbCameraDiv}>
                    <View style={styles.mbCameraIcon}>
                        <Feather name="camera" size={35} color="white" onPress={() =>navigation.push('Scanner')}/>
                    </View>
                </View>
                <View style={styles.mbIcons}>
                    <Ionicons name="logo-twitch" size={32} color="white" onPress={() =>navigation.push('Forum')} />
                </View>
                <View style={styles.mbIcons}>
                    <AntDesign name="user" size={32} color="white" />
                </View>
             </View>
         </View>
     )
 };
>>>>>>> 89d2974 (Adding collection view and some changes to it)
