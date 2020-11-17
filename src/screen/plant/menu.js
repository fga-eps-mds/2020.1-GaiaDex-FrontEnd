import React, { useState } from 'react';

import { View, Modal, Alert, Text } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import ImgButton from './imgButton';
import FlatButton from './flatButton';
import Description from './descriptionView';
import Gallery from './galleryView';
import GrowGuide from './growGuideView';
import Usage from './usageView';

export default function Menu({ usage }) {
  function MenuView({ navigation }) {
    return (
      <View style={styles.backgroundMenu}>
        <View style={styles.TabContainer}>
          <ImgButton
            text="Descrição"
            source={require('../../assets/descricao.png')}
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({ name: 'Descrição' })
              );
            }}
            icon="filetext1"
          />
          <ImgButton
            text="Galeria"
            source={require('../../assets/galeria.png')}
            onPress={() => {
              navigation.dispatch(CommonActions.navigate({ name: 'Galeria' }));
            }}
            icon="picture"
          />
          <ImgButton
            text="Guia de Cultivo"
            source={require('../../assets/guiadecultivo.png')}
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({ name: 'Guia de cultivo' })
              );
            }}
            icon="book"
          />
          <ImgButton
            text="Usos"
            source={require('../../assets/usos.png')}
            onPress={() => {
              navigation.dispatch(CommonActions.navigate({ name: 'Usos' }));
            }}
            icon="bulb1"
          />
        </View>
        <View style={styles.buttonForum}>
          <FlatButton text="FÓRUM" />
        </View>
      </View>
    );
  }

  function DescriptionView({ navigation }) {
    return (
      <View style={styles.background}>
        <Description />
      </View>
    );
  }

  function GalleryView({ navigation }) {
    return (
      <View style={styles.background}>
        <Gallery />
      </View>
    );
  }

  function GrowGuideView({ navigation }) {
    return (
      <View style={styles.background}>
        <GrowGuide />
      </View>
    );
  }

  function UsageView({ navigation }) {
    return (
      <View style={styles.background}>
        <Usage usage={usage} />
      </View>
    );
  }

  const Stack = createStackNavigator();

  return (
    <View style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#FCEFF9', height: 40 },
          }}
        >
          <Stack.Screen name="Menu" component={MenuView} />
          <Stack.Screen name="Descrição" component={DescriptionView} />
          <Stack.Screen name="Galeria" component={GalleryView} />
          <Stack.Screen name="Guia de cultivo" component={GrowGuideView} />
          <Stack.Screen name="Usos" component={UsageView} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
