import React from 'react'

import {View, Text, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const Item = ({ scientifcName, commonName, score }) => (
    <TouchableOpacity style={styles.lista}>
        <Text style = {styles.textList}>Nome cientifico: {scientifcName}</Text>
        <Text style = {styles.textList}>Nomes comum: {commonName}</Text>
        <Text style = {styles.textList}>Score: {score}</Text>
    </TouchableOpacity>
)

export default function({setOpen, capturedPhoto, plants}){
    console.log('Log do results ',plants);
    const renderItem = ({ item }) => (
        <Item 
            scientifcName = {item.species.scientificNameWithoutAuthor}
            commonName = {item.species.commonNames.join(', ')}
            score = {item.score}
        />
    );
    return(
        <View style={styles.result}>
            <TouchableOpacity  
                style={{margin: 10}}
                onPress={() => setOpen(false)}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <Image 
                style={styles.imagem}
                source={{uri: capturedPhoto}}
            />
            <Text style={styles.titulo}>Esses são o resultado para a sua foto:</Text>
            <FlatList
                data = {plants}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.species.scientificNameWithoutAuthor}
            />
        </View>
    );
}