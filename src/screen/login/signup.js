import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar as sBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { UserSignup } from '../../services/backEnd';
import styles from './style';

export default function Signup({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const signup = () => {
    const user = {
      'username': username,
      'email': email,
      'password': senha,
    }
    UserSignup(user)
    .then(res => {
      if(res.Error){
        Alert.alert(res.Error)
      }
      else{
        navigation.push('Login')
      }
    })
  }

  return (
    <View style={styles.containerRegform}>
      <View style={styles.circle4} />
      <View style={styles.circle5} />

      <Text style={styles.headerRegform}>Criar Conta</Text>

      <TextInput
        style={styles.textinputRegform}
        placeholder="Nome:"
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setUsername(valor)}
      />

      <TextInput
        style={styles.textinputRegform}
        placeholder="Seu e-mail:"
        securyTextEntry
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setEmail(valor)}
      />

      <TextInput
        style={styles.textinputRegform}
        placeholder="Senha:"
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setSenha(valor)}
      />

      <View style={styles.direction}>
        <Text style={styles.midTxt}>Cadastro</Text>

        <TouchableOpacity style={styles.midBtn} onPress={() => signup()}/>
      </View>

      <TouchableOpacity style={styles.btnFbGoogleRegform}>
        <Text style={styles.txtBtnFbGoogleRegform}>
          Fazer login com o Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFbGoogleRegform}>
        <Text style={styles.txtBtnFbGoogleRegform}>
          Fazer login com o Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={styles.txtBtnOthersRegform}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}