import React from 'react';
import { Alert, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function Logout({ navigation }) {
  function pressLogout() {
    Alert.alert(
      'Logout',
      'Deseja desconectar sua conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => navigation.push('Login'),
        },
      ],
      { cancelable: false }
    );
  }
  // Use: '<Logout navigation={navigation}/>' to call the button
  return (
    <View>
      <TouchableOpacity
        style={styles.btnButtonLogoutDelete}
        onPress={() => pressLogout()}
      >
        <Text style={styles.txtBtnDeleteLogout}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
