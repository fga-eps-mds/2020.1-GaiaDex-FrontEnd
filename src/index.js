import { apisAreAvailable } from 'expo';
import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, Alert, StatusBar as sBar } from 'react-native';
import { color, greaterThan } from 'react-native-reanimated';
import PlantView from './screen/plant/plantView'
import Regform from './../app/components/Regform';
import ChangeRegform from './../app/components/ChangeRegform';
import DeleteMyAccount from './../app/components/DeleteMyAccount'
import Login from './../app/components/Login';


export default function App() {
  return (
    <View>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}