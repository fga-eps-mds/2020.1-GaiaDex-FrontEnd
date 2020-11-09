import React, {useEffect, useState} from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import styles from './styles';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function TopicCreate(){
  
    //variaveis vindas do router
  const enderecoIpv4 = '192.168.0.40'; //inserir o endereço o ip do localhost
  const porta = '3000'; // inserir a porta em que o backend esta rodando
  const plantID = '5fa1972a48e67b002a635954'; //inserir o id da planta  ser exibido
  const userID = '5fa9ca3478c0dd001c049390';

  //consts post
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
      console.log(title)
      console.log(description)
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
        fetch(`http://${enderecoIpv4}:${porta}/topic/create/${plantID}/${userID}`,requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id))
             
  }
    return(
        <View style={styles.TopicCreatemasterView}>
            <View style={styles.TopicCreateheader}>
                <AntDesign name="left" size={24} color="white" />
                <Text style={{color:"white",fontSize:18}}>{plant?.common_name}</Text>
                <TouchableOpacity style={styles.TopicCreatepublicarDiv} onPress={() => postTopic()} >
                    <MaterialCommunityIcons name="send" size={24} color="white" style={{marginRight:20}} /> 
                    <Text style={styles.TopicCreatepublicarText}>PUBLICAR</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.TopicCreatecontainer}>
                
                <View style={styles.TopicCreateUserDiv}>
                    <Image
                        style={styles.TopicCreateimgUser}
                        source={{uri: plant?.common_name}}
                        defaultSource={require('../../assets/AvatarUser.png')}
                    />
                    <Text style={styles.TopicCreatenameUser}>Username</Text>     
                </View>
                <View style={styles.TopicCreatetituloDiv}>
                    <TextInput 
                        style={styles.TopicCreatetituloTopic} 
                        placeholder={'Titulo do post...'}
                        onChangeText={(val) => setTitle(val)}
                        ></TextInput>
                </View>
                <View>
                    <TextInput 
                        blurOnSubmit
                        multiline
                        style={styles.TopicCreatetopicComment} 
                        placeholder={'Conteudo do post...'}
                        onChangeText={(val) => setDescription(val)}
                        ></TextInput>
                </View>
                <View style={styles.TopicCreatescrollDiv}>
                    <ScrollView style={styles.TopicCreatescrollView} horizontal={true}>
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
