import React from 'react';
import { Alert, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

function pressLogout() {
  Alert.alert(
    'Logout',
    'Deseja desconectar sua conta?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelou'),
        style: 'cancel',
      },
      {
        text: 'Sair',
        onPress: () => console.log('Saiu'),
      },
    ],
    { cancelable: false }
  );
}

export default function Logout() {
  return (
    <View>
      <TouchableOpacity onPress={() => pressLogout()}>
        <Text style={styles.txtBtnOthersLogin}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
