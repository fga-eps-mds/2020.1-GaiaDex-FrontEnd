import React, {useEffect, useState} from 'react';
// import {IPV4, PORT} from 'react-native-dotenv'

import { View } from 'react-native';
import styles from './styles';
import Perfil from './perfil';
import Menu from './menu';

export default function PlantView({ navigation }){
    const plantID = navigation.getParam('itemID', '5f99a845bfcec6002792d1ef'); // Recebe ID da planta a ser exibida ou apresenta valor default
    const [plant, setPlant] = useState({})

    useEffect(()=>{
    const lerDados = async() => {
        const dadosHTTP = await fetch(`http://${process.env.IPV4}:${process.env.PORT}/plant/${plantID}`);
        const dadosJson = await dadosHTTP.json();
        setPlant(dadosJson.plant); 
    }
    lerDados();    
    },[]);
    return(
        <View style = {styles.container}>
            <Perfil foto = {plant.profile_picture} 
                    nomeComum = {plant.common_name} 
                    nomeScientifico = {plant.scientificName} 
                    contador = {plant.collection_count}>
            </Perfil>
            <Menu usage = {plant.usage}/>
        </View>
    );
};