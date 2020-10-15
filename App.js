import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar as sBar} from 'react-native';
import Regform from './app/components/Regform';
import Login from './app/components/Login';
import ChangeRegform from './app/components/ChangeRegform';
import DeleteMyAccount from './app/components/DeleteMyAccount'

export default function App() {
  return (
    <View style={styles.container}>
      <DeleteMyAccount/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d5f00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: Platform.OS === "android" ? sBar.currentHeight : 0,
  },
});