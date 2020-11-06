<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import Header from './header';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function MyPlant() {
  const enderecoIpv4 = '192.168.0.40'; // inserir o endereço o ip do localhost
  const porta = '2000'; // inserir a porta em que o backend esta rodando
  const plantID = '5f8eb1cca552bd001ce62f9b'; // inserir o id da planta  ser exibido
  const [plant, setPlant] = useState({});

  useEffect(() => {
    const lerDados = async () => {
      const dadosHTTP = await fetch(
        `http://${enderecoIpv4}:${porta}/plant/${plantID}`
      );
      const dadosJson = await dadosHTTP.json();
      setPlant(dadosJson.plant);
      console.log(dadosJson);
    };
    lerDados();
  }, []);
=======
import React, { useEffect, useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import { Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Header from './header'
const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;


export default function MyPlant(){
  
  const enderecoIpv4 = '192.168.0.40'; //inserir o endereço o ip do localhost
  const porta = '2000'; // inserir a porta em que o backend esta rodando
  const plantID = '5f8eb1cca552bd001ce62f9b'; //inserir o id da planta  ser exibido
  const [plant, setPlant] = useState({});

  useEffect(()=>{
  const lerDados = async() => {
      const dadosHTTP = await fetch(`http://${enderecoIpv4}:${porta}/plant/${plantID}`);
      const dadosJson = await dadosHTTP.json();
      setPlant(dadosJson.plant); 
      console.log(dadosJson);
  }
  lerDados();
  },[]);
>>>>>>> 18c6322 (adding topic view)
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      description: 'Planta foi criada',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasdasdasd63',
      description: 'Planta foi regada',
    },
    {
<<<<<<< HEAD
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasd32asdasd63',
      description: 'Planta foi regada',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasdasdas32d63',
      description: 'Planta foi regada',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasdasdasd6323',
      description: 'Planta foi regada',
=======
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasd32asdasd63',
        description: 'Planta foi regada',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasdasdas32d63',
        description: 'Planta foi regada',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fasdasdasd6323',
        description: 'Planta foi regada',
>>>>>>> 18c6322 (adding topic view)
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      description: 'Planta foi regada',
    },
  ];
<<<<<<< HEAD
  const Item = ({ description }) => {
    return (
      <View style={styles.historyItem}>
        <Fontisto name="blood-drop" size={20} color="#009EF8" />
        <Text style={styles.historyDescription}>
          {description}
          {'\n'}- 3 dia atrás
        </Text>
      </View>
    );
  };
  const renderItem = ({ item }) => <Item description={item.description} />;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.plantImg}
        source={{ uri: plant.profile_picture }}
      >
        <Header />
      </ImageBackground>
      <View style={styles.plantInfDiv}>
        <View style={styles.plantDetails}>
          <View style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Detalhes</Text>
            <Text style={styles.plantNickname}>{plant.common_name}</Text>
            <Text style={styles.plantName}>({plant.scientificName})</Text>
          </View>
          <View style={styles.plantIcons} />
        </View>
      </View>
      <View style={styles.plantCdDiv}>
        <View style={styles.plantDetails}>
          <View style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Cuidados:</Text>
          </View>
          <View style={styles.cdIcons}>
            <Image
              style={styles.cdIcon}
              source={require('../../assets/regar.png')}
            />
            <Image
              style={styles.cdIcon}
              source={require('../../assets/fertilizar.png')}
            />
            <Image
              style={styles.cdIcon}
              source={require('../../assets/colher.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.plantHistDiv}>
        <View style={styles.plantDetails}>
          <View style={styles.historyText}>
            <Text style={styles.detailsTitle}>Histórico da Planta:</Text>
          </View>
          <FlatList
            style={{ marginTop: 10 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  plantImg: {
    flexDirection: 'row',
    flex: 3,
  },
  plantInfDiv: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    width: largura / 1.15,
    alignSelf: 'center',
  },
  headerTranspRight: {
    alignContent: 'flex-end',
    width: largura / 2,
    backgroundColor: 'black',
  },
  headerTranspLeft: {
    alignSelf: 'flex-end',
    width: largura / 2,
  },
  plantCdDiv: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    width: largura / 1.15,
    alignSelf: 'center',
  },
  plantHistDiv: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    width: largura / 1.15,
    alignSelf: 'center',
  },
  plantNickname: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 25,
    paddingLeft: 10,
  },
  plantName: {
    fontSize: 12,
    fontWeight: '300',
    paddingTop: 5,
    paddingLeft: 10,
  },
  plantDetails: {
    backgroundColor: '#D6DADF',
    flex: 1,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 10,
    paddingLeft: 10,
  },
  detailsText: {
    flex: 1,
  },
  historyTextDiv: {
    height: altura / 10,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: altura / 10,
    width: largura / 1.2,
    paddingLeft: largura / 10,
  },
  historyIcon: {
    height: largura / 30,
    width: largura / 30,
    marginHorizontal: 5,
  },
  historyText: {
    fontSize: 18,
    textAlign: 'left',
  },
  historyDescription: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: 4,
    paddingTop: 12,
  },
  plantIcon: {
    height: largura / 10,
    width: largura / 10,
    margin: 10,
  },
  plantIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },
  cdIcons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cdIcon: {
    height: largura / 7,
    width: largura / 7,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#D6DADF',
    flex: 1,
    width: largura,
  },
});
=======
  const Item = ({description}) => {
    return(
        <View style={styles.historyItem}>
            <Fontisto name="blood-drop" size={20} color="#009EF8" />
            <Text style={styles.historyDescription}>{description}{"\n"}- 3 dia atrás</Text>  
        </View>
    )
    }
    const renderItem = ({ item }) => (
        <Item description={item.description} />
    );    
    return(
        
            <View style={styles.container}>
                <ImageBackground 
                        style={styles.plantImg}
                        source={{uri: plant.profile_picture}}>

                   <Header/>

                </ImageBackground>
                <View style={styles.plantInfDiv}>
                    <View style={styles.plantDetails}>
                        <View style={styles.detailsText}>
                            <Text style={styles.detailsTitle}>Detalhes</Text>
                            <Text style={styles.plantNickname}>{plant.common_name}</Text>
                            <Text style={styles.plantName}>({plant.scientificName})</Text>
                        </View>    
                        <View style={styles.plantIcons}>
                            
                        </View>
                    </View>
                </View>
                <View style={styles.plantCdDiv}>
                    <View style={styles.plantDetails}>
                        <View style={styles.detailsText}>
                            <Text style={styles.detailsTitle}>Cuidados:</Text>  
                        </View>    
                        <View style={styles.cdIcons}>
                            <Image
                                style={styles.cdIcon}
                                source={require('../../assents/regar.png')}/>
                            <Image
                                style={styles.cdIcon}
                                source={require('../../assents/fertilizar.png')}/>
                            <Image
                                style={styles.cdIcon}
                                source={require('../../assents/colher.png')}/>
                            
                        </View>
                    </View>
                </View>
                <View style={styles.plantHistDiv}>
                    <View style={styles.plantDetails}>
                        <View style={styles.historyText}>
                            <Text style={styles.detailsTitle}>Histórico da Planta:</Text>  
                        </View>
                        <FlatList
                            style={{marginTop:10}}
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        
                    </View>
                </View>
               
            </View>
    );
};
const styles = StyleSheet.create({
    plantImg: {
        flexDirection: 'row',
        flex:3,
        
    },
    plantInfDiv:{
        flexDirection: 'column',
        flex:2,
        justifyContent: 'center',
        width: largura/1.15,
        alignSelf:'center',
        
        
    },
    headerTranspRight:{
        alignContent:'flex-end',
        width:largura/2,
        backgroundColor:'black'
    },
    headerTranspLeft:{
        alignSelf:'flex-end',
        width:largura/2

    },
    plantCdDiv:{
        flexDirection: 'column',
        flex:2,
        justifyContent: 'center',
        width: largura/1.15,
        alignSelf:'center'
        
    },
    plantHistDiv:{
        flexDirection: 'column',
        flex:2,
        justifyContent: 'center',
        width: largura/1.15,
        alignSelf:'center'
        
    },
    plantNickname : {
        fontSize:20,
        fontWeight:'500',
        paddingTop:25,
        paddingLeft:10
        
    },
    plantName : {
        fontSize:12,
        fontWeight:'300',
        paddingTop:5,
        paddingLeft:10
        
    },
    plantDetails:{
        backgroundColor:'#D6DADF',
        flex:1,

    },
    detailsTitle : {
        fontSize:24,
        fontWeight:'600',
        paddingTop:10,
        paddingLeft:10
        
    },
    detailsText : {
        flex:1
    
        
    },
    historyTextDiv:{
        height:altura/10,
        backgroundColor:'white',
        marginVertical:10,
        borderRadius:10,
        justifyContent:'center'
    },
    historyItem:{
        flexDirection: 'row',
        alignItems:'center',
        height:altura/10,
        width:largura/1.2,
        paddingLeft:largura/10
    },
    historyIcon:{
        height:largura/30,
        width:largura/30,
        marginHorizontal:5,
        
        
    },
    historyText:{
        fontSize:18,
        textAlign:'left',
    },
    historyDescription:{
        fontSize:13,
        fontWeight:'500',
        textAlign:'left',
        paddingLeft:4,
        paddingTop:12
    },
    plantIcon:{

        height:largura/10,
        width:largura/10,
        margin:10
        
    },
    plantIcons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'center',
        paddingTop:10
        
    },
    cdIcons:{
        flex:2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'center'
        
    },
    cdIcon:{

        height:largura/7,
        width:largura/7,
        marginHorizontal:20
        
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#D6DADF',
        flex:1,
        width: largura,

        
    },
    
     
});
>>>>>>> 18c6322 (adding topic view)
