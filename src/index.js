import React from 'react';
<<<<<<< HEAD
import Routes from './Routes';

export default function App() {
  return <Routes />;
}
=======
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { color, greaterThan } from 'react-native-reanimated';
import PlantView from './screen/plant/plantView'
import Scanner from './screen/scanner'
import TopicView from './screen/topic/TopicView'
import TopicCreate from './screen/topic/TopicCreate'


export default function App() {
  return (
    <TopicView />
  );
}
>>>>>>> 18c6322 (adding topic view)
