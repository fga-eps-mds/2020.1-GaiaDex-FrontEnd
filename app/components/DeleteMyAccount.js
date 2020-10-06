import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar as sBar,  
    TouchableOpacity
} from 'react-native';

export default function DeleteMyAccount() {
  return (
    <View style={styles.DeleteMyAccount}>

      <Text style={styles.header}>Deseja deletar sua conta?</Text>

      <Text style={styles.text}>
        *Uma vez feito isso essa ação não poderá ser desfeita.
      </Text>

      <Text style={styles.text}>
        *Entre em contato com o time de desenvolvimento para qualquer dúvida.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Estou ciente do que faço</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  DeleteMyAccount: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#5a008c',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#000000',
    paddingBottom: 10,
    marginBottom: 40,
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
