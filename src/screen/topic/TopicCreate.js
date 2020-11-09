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
import { getPlant, createTopic } from '../../services/backEnd';

export default function TopicCreate() {
  // variaveis vindas do router
  const enderecoIpv4 = '192.168.0.40'; // inserir o endereço o ip do localhost
  const porta = '3000'; // inserir a porta em que o backend esta rodando
  const plantID = '5fac37ad7843f3001cf63d5f'; // inserir o id da planta  ser exibido
  const userID = '5fac4a7ed3986500906e1b42';

  // consts post
  const [plant, setPlant] = useState({});
  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getPlant(plantID).then((res) => setPlant(res.plant));
  }, []);
  const postTopic = async () => {
    const body = {
      title,
      description,
    };
    createTopic(plantID, userID, body).then((res) => console.log(res));
  };
  return (
    <KeyboardAvoidingView style={styles.TopicCreatemasterView}>
      <View style={styles.TopicCreateheader}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={{ color: 'white', fontSize: 18 }}>
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
            {plant?.user?.username ? plant?.user?.username : 'username'}
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
