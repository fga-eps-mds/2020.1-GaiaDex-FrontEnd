import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { color, greaterThan } from 'react-native-reanimated';
import PlantView from './screen/plant/plantView'


export default function App() {
  return (
    <View>
      <PlantView />
    </ View>
  );
}