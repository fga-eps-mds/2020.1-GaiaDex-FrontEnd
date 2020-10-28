import React, {useEffect, useState} from 'react';

import { View } from 'react-native';
import styles from './styles';
import Perfil from './perfil';
import Menu from './menu';

export default function PlantView(){
    const enderecoIpv4 = '192.168.15.5'; //inserir o endereço o ip do localhost
    const porta = '2000'; // inserir a porta em que o backend esta rodando
    const plantID = '5f99a845bfcec6002792d1ef'; //inserir o id da planta  ser exibido
    const [plant, setPlant] = useState({})

    useEffect(()=>{
    const lerDados = async() => {
        const dadosHTTP = await fetch(`http://${enderecoIpv4}:${porta}/plant/${plantID}`);
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