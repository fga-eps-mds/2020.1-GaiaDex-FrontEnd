import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import styles from './styles';
import { getPlant, createTopic, getUserLogado } from '../../services/backEnd';

export default function TopicCreate({ navigation }) {
  const plantID = '5fc843b413d9b0001c1ad57b'; // inserir o id da planta  ser exibido

  // consts post
  const [user, setUser] = useState({});
  const [plant, setPlant] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getUserLogado().then(res => setUser(res))
    getPlant(plantID).then((res) => setPlant(res.plant));
  }, []);
  const postTopic = async () => {
    console.log(title,description)
    const body = {
      title,
      description,
    };
    createTopic(plantID, body).then((res) => navigation.push('TopicView', { itemID: res?.topic?._id}));
  };
  return (
    <KeyboardAvoidingView style={styles.TopicCreatemasterView}>
      <View style={styles.TopicCreateheader}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={{ color: 'white', fontSize: 15 }}>
          {plant?.scientificName}
        </Text>
        <TouchableOpacity
          style={styles.TopicCreatepublicarDiv}
          onPress={() => postTopic()}
        >
          <MaterialCommunityIcons
            name="send"
            size={24}
            color="white"
            style={{ marginRight: 20 }}
          />
          <Text style={styles.TopicCreatepublicarText}>PUBLICAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TopicCreatecontainer}>
        <View style={styles.TopicCreateUserDiv}>
          <Image
            style={styles.TopicCreateimgUser}
            source={{ uri: plant?.common_name }}
            defaultSource={require('../../assets/AvatarUser.png')}
          />
          <Text style={styles.TopicCreatenameUser}>
            {user?.username ? user?.username : 'username'}
          </Text>
        </View>
        <View style={styles.TopicCreatetituloDiv}>
          <TextInput
            style={styles.TopicCreatetituloTopic}
            placeholder="Titulo do post..."
            onChangeText={(val) => setTitle(val)}
          />
        </View>
        <View>
          <TextInput
            blurOnSubmit
            multiline
            style={styles.TopicCreatetopicComment}
            placeholder="Conteudo do post..."
            onChangeText={(val) => setDescription(val)}
          />
        </View>
        <View style={styles.TopicCreatescrollDiv}>
          <ScrollView style={styles.TopicCreatescrollView} horizontal>
            <AntDesign name="link" size={35} color="black" />
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
    </KeyboardAvoidingView>
  );
}
