import React from 'react'

import {View, TouchableOpacity, Image, FlatList} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function({setOpen, capturedPhoto, plants}){
    // console.log(plants);
    const Item = ({item}) =>{
        <TouchableOpacity>
            <Text>Nome cientifico: {item.species.scientificNameWithoutAuthor}</Text>
            <Text>Genero: {item.species.genus.scientificNameWithoutAuthor}</Text>
        </TouchableOpacity>
    }
    const renderItems = ({item}) =>{
        return(
            <Item
                item = {item}
            ></Item>
        )
    }
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
            <FlatList 
                data={plants}
                keyExtractor = {item => item.species.scientificNameWithoutAuthor}
                renderItem = {renderItems}
            />
        </View>
    );
}