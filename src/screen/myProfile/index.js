import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import { EvilIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import MenuBar from '../../assets/components/menuBar';
import { getUserLogado } from '../../services';
import styles from './styles';

const altura = Dimensions.get('screen').height;

const sort = (user) => {
  let i;
  let d1;
  let d2;
  let countT = user?.topics?.length;
  let countP = user?.myPlants?.length;
  const activity = new Array();
  for (i = 0; i < 6 && countT + countP > 0; i++) {
    if (countT > 0 && countP > 0) {
      d1 = new Date(user?.topics[countT - 1]?.createdAt);
      d2 = new Date(user?.myPlants[countP - 1]?.createdAt);
      if (d1 - d2 > 0) {
        activity.push(user?.topics[--countT]);
      } else {
        activity.push(user?.myPlants[--countP]);
      }
    } else if (countT > 0) {
      activity.push(user?.topics[--countT]);
    } else if (countP > 0) {
      activity.push(user?.myPlants[--countP]);
    }
  }
  return activity;
};

function Item({ title, nickname, tempo }) {
  const agora = new Date();
  const acao = new Date(tempo);
  if (nickname) {
    return (
      <View style={[styles.item, styles.plantItem]}>
        <Text>Adicionou {nickname} à sua coleçao</Text>
        <Text style={styles.time}>
          {Math.trunc((agora - acao) / 1000 / 60 / 60)}h atrás
        </Text>
      </View>
    );
  }
  return (
    <View style={[styles.item, styles.topicItem]}>
      <Text>
        Criou o tópico: {title.length > 10 ? `${title.slice(0, 10)}...` : title}
      </Text>
      <Text style={styles.time}>
        {Math.trunc((agora - acao) / 1000 / 60 / 60)}h atrás
      </Text>
    </View>
  );
}

export default function myProfile({ navigation }) {
  const [activityLog, setActivitLog] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserLogado()
      .then((res) => {
        setUser(res);
        return sort(res);
      })
      .then((res) => {
        setActivitLog(res);
      });
  }, []);
  const renderItem = ({ item }) => (
    <Item
      title={item?.title}
      nickname={item?.nickname}
      tempo={item?.createdAt}
    />
  );
  return (
    <>
      <View style={styles.framePerfil}>
        <View style={styles.perfilTextView}>
          <Text style={styles.perfilText}>Perfil</Text>
          <EvilIcons name="gear" size={altura / 16} color="white" />
        </View>
        <ImageBackground
          style={styles.vector}
          source={require('../../assets/Vector.png')}
        >
          <ImageBackground
            style={styles.photoView}
            imageStyle={styles.photo}
            source={
              user?.photo ? user.photo : require('../../assets/userDefault.png')
            }
          />
          <Text style={styles.name}>{`${user?.username}\n${user?.email}`}</Text>
        </ImageBackground>
      </View>
      <View style={styles.sumary}>
        <View
          style={[
            styles.sumaryComponents,
            { borderRightColor: 'black', borderRightWidth: 3 },
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name="twitch"
              size={30}
              color="#094820"
              style={{ marginRight: 13 }}
            />
            <Text style={{ color: '#E5E5E5' }}>{user?.topics?.length}</Text>
          </View>
          <Text style={{ marginTop: 10, color: '#E5E5E5' }}>Tópicos</Text>
        </View>
        <View
          style={[
            styles.sumaryComponents,
            { borderRightColor: 'black', borderRightWidth: 3 },
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name="star-o"
              size={30}
              color="#094820"
              style={{ marginRight: 13 }}
            />
            <Text style={{ color: '#E5E5E5' }}>{user?.favorites?.length}</Text>
          </View>
          <Text style={{ marginTop: 10, color: '#E5E5E5' }}>Favoritos</Text>
        </View>
        <View style={styles.sumaryComponents}>
          <View style={{ flexDirection: 'row' }}>
            <Entypo
              name="flower"
              size={30}
              color="#094820"
              style={{ marginRight: 13 }}
            />
            <Text style={{ color: '#E5E5E5' }}>{user?.myPlants?.length}</Text>
          </View>
          <Text style={{ marginTop: 10, color: '#E5E5E5' }}>Plantas</Text>
        </View>
      </View>
      <View style={styles.frameDown}>
        <Text style={styles.minhasAtividades}>Minhas Atividades</Text>
        <View style={styles.list}>
          <FlatList
            data={activityLog}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <MenuBar />
    </>
  );
}
