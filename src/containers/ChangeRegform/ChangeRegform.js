import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar as sBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';

export default function ChangeRegform() {
  return (
    <View style={styles.ChangeRegform}>

      <Text style={styles.header}>Cadastro</Text>

      <TextInput style={styles.textinput} placeholder='Seu nome:'
      underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder='Seu e-mail:'
      underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder='Sua senha:'
      securyTextEntry={true} underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder='Sua senha novamente:'
      securyTextEntry={true} underlineColorAndroid={'transparent'}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Confirmar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  ChangeRegform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#5a008c',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#5a008c',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6b008c',
    marginTop: 30,
  },
  btntext: {
    color: '#000000',
    fontWeight: 'bold',
  }
});
