import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { UserSignup } from '../../services/backEnd';
import styles from './style';
import { purple, gray } from '../../theme/colorPalette';

export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = () => {
    const user = {
      username,
      email,
      password,
    };
    UserSignup(user).then((res) => {
      if (res.Error) {
        Alert.alert(res.Error);
      } else {
        navigation.push('Login');
      }
    });
  };

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
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setEmail(valor)}
      />

      <TextInput
        style={styles.textinputRegform}
        placeholder="Sua senha:"
        secureTextEntry
        underlineColorAndroid="transparent"
        onChangeText={(valor) => setPassword(valor)}
      />

      <View style={styles.direction}>
        <Text style={styles.midTxt}>Cadastro</Text>
        <TouchableOpacity style={styles.midBtn} onPress={() => signup()}>
          <AntDesign
            name="arrowright"
            size={35}
            color={gray.iron()}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnFbGoogleRegform}>
        <View style={styles.viewbtnFbGoogle}>
          <Entypo
            name="facebook"
            size={24}
            color={purple.grapeDark()}
            style={styles.iconBtnFbGoogle}
          />
          <Text style={styles.txtBtnFbGoogleRegform}>
            Fazer login com o Facebook
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFbGoogleRegform}>
        <View style={styles.viewbtnFbGoogle}>
          <AntDesign
            name="google"
            size={24}
            color={purple.grapeDark()}
            style={styles.iconBtnFbGoogle}
          />
          <Text style={styles.txtBtnFbGoogleRegform}>
            Fazer login com o Google
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={styles.txtBtnOthersRegform}>Login</Text>
      </TouchableOpacity>

      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </View>
  );
}
