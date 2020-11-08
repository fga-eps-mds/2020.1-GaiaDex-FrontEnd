import { apisAreAvailable } from 'expo';
import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, Alert, StatusBar as sBar } from 'react-native';
import { color, greaterThan } from 'react-native-reanimated';
import PlantView from './screen/plant/plantView'
import Regform from './containers/Regform';
import ChangeRegform from './containers/ChangeRegform/ChangeRegform';
import DeleteMyAccount from './containers/DeleteMyAccount'
import Login from './containers/Login';


export default function App() {
  return (
    <View>
      <Regform/>
      <StatusBar style="auto" />
    </View>
  );
}