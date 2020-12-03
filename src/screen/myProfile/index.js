import React from 'react';
import {View, Text, Image, Dimensions, ImageBackground} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import styles from './styles'

const altura = Dimensions.get('screen').height;

function myProfile(){
    return(
        <>
            <View style={styles.framePerfil}>
                <View style={styles.perfilTextView}>
                    <Text style={styles.perfilText}>Perfil</Text>
                    <EvilIcons name="gear" size={altura/16} color="white"/>
                </View>
                <ImageBackground
                    style={styles.vector}
                    source={require('./../../assets/Vector.png')}
                >
                    <View style={styles.photoView}>

                    </View>
                </ImageBackground>
            </View>
            <View style={styles.frameDown}>
                
            </View>
            <View style={styles.sumary}>

            </View>
        </>
    )
}

export default myProfile;