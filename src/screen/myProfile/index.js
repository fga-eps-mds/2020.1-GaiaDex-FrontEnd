import React from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native'
import { EvilIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import MenuBar from './../../assets/components/menuBar'
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
                    <Text style={styles.name}>João Carlos, 26</Text>
                    <Text style={styles.name}>joao_carlos@gmail.com</Text>
                </ImageBackground>
            </View>
            <View style={styles.frameDown}>
                <Text style={styles.minhasAtividades}>Minhas Atividades</Text>
            </View>
            <View style={styles.sumary}>
                <View style={[styles.sumaryComponents,{borderRightColor: "black",borderRightWidth: 3,}]}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="twitch" size={30} color="#094820" style={{marginRight: 13}}/>
                        <Text style={{color: "#E5E5E5"}}>13</Text>
                    </View>
                    <Text style={{marginTop:10, color: "#E5E5E5"}}>Tópicos</Text>
                </View>
                <View style={[styles.sumaryComponents,{borderRightColor: "black",borderRightWidth: 3,}]}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="star-o" size={30} color="#094820" style={{marginRight: 13}}/>
                        <Text style={{color: "#E5E5E5"}}>19</Text>
                    </View>
                    <Text style={{marginTop:10, color: "#E5E5E5"}}>Favoritos</Text>
                </View>
                <View style={styles.sumaryComponents}>
                    <View style={{flexDirection:"row"}}>
                        <Entypo name="flower" size={30} color="#094820" style={{marginRight: 13}}/>
                        <Text style={{color: "#E5E5E5"}}>67</Text>
                    </View>
                    <Text style={{marginTop:10, color: "#E5E5E5"}}>Plantas</Text>
                </View>
            </View>
            <MenuBar/>
        </>
    )
}

export default myProfile;