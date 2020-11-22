import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text,
  View,
  StatusBar as sBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default function Login() {
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
      />

      <TextInput
        style={styles.textinputLogin}
        placeholder="Sua senha:"
        secureTextEntry
        underlineColorAndroid="transparent"
      />

      <View style={styles.direction}>
        <Text style={styles.midTxt}>Login</Text>

        <TouchableOpacity style={styles.midBtn} />
      </View>

      <TouchableOpacity style={styles.btnFbGoogleLogin}>
        <Text style={styles.txtBtnFbGoogleLogin}>
          Fazer login com o Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFbGoogleLogin}>
        <Text style={styles.txtBtnFbGoogleLogin}>Fazer login com o Google</Text>
      </TouchableOpacity>

      <View style={styles.direction}>
        <TouchableOpacity>
          <Text style={styles.txtBtnOthersLogin}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.txtBtnOthersLogin}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
