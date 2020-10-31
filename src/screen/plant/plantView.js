import React, {useEffect, useState} from 'react';
// import {IPV4, PORT} from 'react-native-dotenv'

import { View } from 'react-native';
import styles from './styles';
import Perfil from './perfil';
import Menu from './menu';

export default function PlantView(){
    // const IPV4 = '192.168.15.5'; //endereco do backend
    // const PORT = '2000'; //porta do backend
    const plantID = '5f99a845bfcec6002792d1ef'; //inserir o id da planta  ser exibido
    const [plant, setPlant] = useState({})

    useEffect(()=>{
    const lerDados = async() => {
        const dadosHTTP = await fetch(`http://${process.env.IPV4}:${process.env.PORT}/plant/${plantID}`);
        const dadosJson = await dadosHTTP.json();
        setPlant(dadosJson.plant); 
        console.log(dadosJson);
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