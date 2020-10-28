import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar as sBar} from 'react-native';
import Login from './../app/components/Login';

export default function App() {
  return (
    <View style={styles.container}>
        <Login/>
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