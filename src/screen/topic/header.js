import React from 'react';
<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Header({ title, onPress }) {
  return (
    <View style={styles.header}>
      <View style={{ flex: 0.1 }}>
        <AntDesign name="left" size={24} color="white" onPress={onPress} />
      </View>
      <View style={{ flex: 0.9 }}>
        <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center' }}>
          {title}
        </Text>
      </View>
  
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingTop: 15,
  },
  publicarDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  publicarText: {
    marginRight: 5,
    color: 'white',
    fontSize: 15,
    fontWeight: '100',
  },
  backButton: {},
});
=======
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
>>>>>>> 470bf07 (adding topic view)
