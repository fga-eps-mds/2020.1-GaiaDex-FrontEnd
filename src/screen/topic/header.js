import React from 'react';
<<<<<<< HEAD
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

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
});

=======
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function Header({isButton}){
    return(
        <View style={styles.header}>
            <View style={{flex:1}}>
                <AntDesign name="left" size={24} color="white" />
            </View>
            <View style={{flex:1}}>
                <Text style={{color:"white",fontSize:18,alignSelf:'center'}}>Cenoura</Text>
            </View>
             <View style={{flex:1}}> 
            </View>    
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        backgroundColor:'black',
        flex:1.5,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'space-between',
        paddingTop:15
   
    },
    publicarDiv:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        alignSelf:'center',
    },
    publicarText:{
        marginRight:5,
        color:'white',
        fontSize:15,
        fontWeight: '100',
    },
    backButton:{
    }
});
>>>>>>> 18c6322 (adding topic view)
