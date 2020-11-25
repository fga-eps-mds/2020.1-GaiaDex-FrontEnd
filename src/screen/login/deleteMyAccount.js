import React, {useEffect, useState } from 'react';
import { Alert, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { UserDelete } from '../../services/backEnd';

export default function DeleteMyAccount({navigation}) {
  function userdelete() {
    UserDelete()
    .then(res => {
      if(res.Error){
        Alert.alert(res.Error)
      }
      else{
        navigation.push('Signup')
      }
    })
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
          onPress: () => userdelete(),
        },
      ]
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => pressDelete()}>
        <Text style={styles.txtBtnOthersLogin}>Deletar minha conta</Text>
      </TouchableOpacity>
    </View>
  );
}