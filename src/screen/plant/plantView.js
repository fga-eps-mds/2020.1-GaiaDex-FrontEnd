import React, { useEffect, useState } from 'react';
// import {IPV4, PORT} from 'react-native-dotenv'

import { View } from 'react-native';
import styles from './styles';
import Perfil from './perfil';
import Menu from './menu';
import { getPlant } from '../../services';

export default function PlantView({ navigation }) {
  const plantID = navigation.getParam('itemID', '5fb41d944f63bf0027bd526d'); // Recebe ID da planta a ser exibida ou apresenta valor default
  const [plant, setPlant] = useState({});

  useEffect(() => {
    getPlant(plantID).then((res) => setPlant(res.plant));
  }, []);
  return (
    <View style={styles.container}>
      <Perfil
        foto={plant?.profile_picture}
        nomeComum={plant?.common_name}
        nomeScientifico={plant?.scientificName}
        contador={plant?.collection_count}
      />
      <Menu usage={plant?.usage} />
    </View>
  );
}
