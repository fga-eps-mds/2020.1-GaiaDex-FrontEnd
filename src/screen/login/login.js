import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar as sBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style';
import { UserLogin } from '../../services/backEnd'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const login = () => {
    const user = {
      'email': email,
      'password': senha,
    }
    UserLogin(user)
    .then(res => {
      if(res.Error){
        Alert.alert('Usuário ou Senha invalidos')
      }
      else{
        navigation.push('Scanner')
      }
    })
  }

  return (
    <View style={styles.containerLogin}>
      <View style={styles.circle3} />
      <View style={styles.circle2} />
      <View style={styles.circle1} />

      <Text style={styles.headerLogin}>Seja bem-vindo</Text>

      <TextInput
        style={styles.textinputLogin}
        placeholder="Seu e-mail:"
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setEmail(valor)}
      />

      <TextInput
        style={styles.textinputLogin}
        placeholder="Sua senha:"
        secureTextEntry
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setSenha(valor)}
      />

      <View style={styles.direction}>
        <Text style={styles.midTxt}>Login</Text>
        <TouchableOpacity style={styles.midBtn} onPress={() => login()}>
          <AntDesign name="arrowright" size={35} color="white" style={styles.arrow}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnFbGoogleLogin}>
        <View style={styles.viewbtnFbGoogle}>
          <Entypo name="facebook" size={24} color="#F2E0F5" style={styles.iconBtnFbGoogle}/>
          <Text style={styles.txtBtnFbGoogleLogin}>
            Fazer login com o Facebook
          </Text>
        </View >
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFbGoogleLogin}>
        <View style={styles.viewbtnFbGoogle}>
          <AntDesign name="google" size={24} color="#F2E0F5" style={styles.iconBtnFbGoogle}/>
          <Text style={styles.txtBtnFbGoogleLogin}>
            Fazer login com o Google
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.direction}>
        <TouchableOpacity onPress={() => navigation.push('Signup')}>
          <Text style={styles.txtBtnOthersLogin}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('Update')}>
          <Text style={styles.txtBtnOthersLogin}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}