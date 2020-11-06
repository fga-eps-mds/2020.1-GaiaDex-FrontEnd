import React, {useEffect, useState} from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function TopicCreate(){
  
  const enderecoIpv4 = '192.168.0.40'; //inserir o endereço o ip do localhost
  const porta = '2000'; // inserir a porta em que o backend esta rodando
  const plantID = '5f8eb1cca552bd001ce62f9b'; //inserir o id da planta  ser exibido
  const [plant, setPlant] = useState({});
  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');   

  useEffect(()=>{
  const lerDados = async() => {
      const dadosHTTP = await fetch(`http://${enderecoIpv4}:${porta}/plant/${plantID}`);
      const dadosJson = await dadosHTTP.json();
      setPlant(dadosJson.plant); 
  }
  lerDados();
  },[]);
  const postTopic = async() => {
    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:title,
            description:description
            })
        };
        fetch(`http://${enderecoIpv4}:${porta}/topic/create/5f8eb1cca552bd001ce62f9b/5f91d5b8fed418001cb07b88`,requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id))
             
  }
    return(
        <View style={styles.masterView}>
            <View style={styles.header}>
                <AntDesign name="left" size={24} color="white" />
                <Text style={{color:"white",fontSize:18}}>Cenoura</Text>
                <TouchableOpacity style={styles.publicarDiv} onPress={() => postTopic()} >
                    <MaterialCommunityIcons name="send" size={24} color="white" style={{marginRight:20}} /> 
                    <Text style={styles.publicarText}>PUBLICAR</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.container}>
                
                <View style={styles.UserDiv}>
                    <Image
                        style={styles.imgUser}
                        source={{uri: plant.profile_picture}}
                        defaultSource={require('../../assents/AvatarUser.png')}
                    />
                    <Text style={styles.nameUser}>{plant.common_name}</Text>     
                </View>
                <View style={styles.tituloDiv}>
                    <TextInput 
                        style={styles.tituloTopic} 
                        placeholder={'Titulo do post...'}
                        onChangeText={(val) => setTitle(val)}
                        ></TextInput>
                </View>
                <View>
                    <TextInput 
                        blurOnSubmit
                        multiline
                        style={styles.topicComment} 
                        placeholder={'Conteudo do post...'}
                        onChangeText={(val) => setDescription(val)}
                        ></TextInput>
                </View>
                <View style={styles.scrollDiv}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <AntDesign name="link" size={35} color="black"/>
                        <AntDesign name="areachart" size={35} color="black" />
                        <AntDesign name="linechart" size={35} color="black" />
                        <AntDesign name="filter" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                        <AntDesign name="save" size={35} color="black" />
                        <AntDesign name="videocamera" size={35} color="black" />
                        <AntDesign name="picture" size={35} color="black" />
                        <AntDesign name="qrcode" size={35} color="black" />
                        <AntDesign name="tags" size={35} color="black" />
                        <AntDesign name="enviromento" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                        <AntDesign name="mail" size={35} color="black" />
                    </ScrollView>
                </View>
            </View>
            </View>    
    );
};
const styles = StyleSheet.create({
    header: {
        backgroundColor:'black',
        flexDirection: 'row',
        width:largura,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        flex:0.8,
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
    },
    UserDiv: {
        flexDirection: 'row',
        flex:1,
        marginBottom:30,   
    },
    imgUser : {
        width:largura/5,
        height:largura/5,
        borderRadius:50,
        
        
    },
    nameUser : {
        fontSize:18,
        fontWeight:'bold',
        paddingTop:10,
        paddingLeft:5
        
    },
    topicComment: {
      backgroundColor: '#D6DADF',
      borderRadius: 10,
      height: altura/2.1,
      textAlignVertical:'top',
      paddingLeft:20,
      paddingTop:10
    },
    tituloTopic: {
        backgroundColor: '#D6DADF',
        borderRadius: 10,
        height: altura/15,
        paddingLeft:20,
    },
    tituloDiv: {
        backgroundColor: 'skyblue',
        marginBottom:altura/20,
        borderRadius: 10
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        flex:8,
        width: largura/1.2,
        alignSelf:'center'
        
    },
    masterView: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        flex:1,
        width: largura,
        alignSelf:'center'
        
    },
    scrollView: {
        height:altura/16,
        marginLeft:10
    },
    scrollDiv: {
       backgroundColor:'#19BB53',
       borderRadius:10,
       marginTop:20,
       marginBottom:40,
       width:largura
    },
    icon2:{
        marginLeft:5,
    }    
});