import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function Header(){
    return(
            <View style={styles.header}>
                <AntDesign name="left" size={24} color="white" />
                <Text style={{color:"white",fontSize:18}}>Cenoura</Text>
                <TouchableOpacity style={styles.publicarDiv} onPress={() => postTopic()} >
                    <MaterialCommunityIcons name="send" size={24} color="white" style={{marginRight:20}} /> 
                    <Text style={styles.publicarText}>PUBLICAR</Text>
                </TouchableOpacity> 
            </View>
    )
};
const styles = StyleSheet.create({
    header: {
        backgroundColor:'black',
        flexDirection: 'row',
        width:largura,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        flex:1,
        marginBottom:10,   
    },
    publicarDiv:{
        flexDirection:"row-reverse",
        alignSelf:'center',
        flex:1
    },
    publicarText:{
        marginTop:2.5,
        marginRight:20,
        color:'white',
        fontSize:15,
        fontWeight: '100',
    },
    backButton:{
        padding:10
    }
});