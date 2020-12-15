import React from 'react';
import { Alert, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { UserDelete } from '../../services';
import { highlight } from '../../theme/colorPalette';

export default function DeleteMyAccount({ navigation }) {
  function userDelete() {
    UserDelete().then((res) => {
      if (res.Error) {
        Alert.alert(res.Error);
      } else {
        navigation.push('Login');
      }
    });
  }

  function pressDelete() {
    Alert.alert(
      'Deletar minha conta',
      'Deseja deletar sua conta? Uma vez aceito não poderá ser desfeito, entre em contato com o time de desenvolvedores para mais dúvidas',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => userDelete(),
        },
      ]
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btnButtonLogoutDelete,
          { borderWidth: 1, borderColor: highlight.cinnabar() },
        ]}
        onPress={() => pressDelete()}
      >
        <Text style={styles.txtBtnDeleteLogout}>Deletar minha conta</Text>
      </TouchableOpacity>
    </View>
  );
}
