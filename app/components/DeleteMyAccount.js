import React from 'react';
import { Alert, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './componentStyles';

function pressDelete() {
  Alert.alert(
    'Deletar minha conta',
    'Deseja deletar sua conta? Uma vez aceito não poderá ser desfeito, entre em contato com o time de desenvolvedores para mais dúvidas',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelou'),
        style: 'cancel',
      },
      {
        text: 'Deletar',
        onPress: () => console.log('Deletou'),
      },
    ]
  );
}

export default function DeleteMyAccount() {
  return (
    <View>
      <TouchableOpacity onPress={pressDelete()}>
        <Text style={styles.txtBtnOthersLogin}>Deletar minha conta</Text>
      </TouchableOpacity>
    </View>
  );
}
