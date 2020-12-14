import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import MenuBar from '../../assets/components/menuBar';
import { getUserLogged } from '../../services/backEnd';
import TopTopic from './components/TopTopic';
import NewTopic from './components/NewTopic';
import { gray } from '../../theme/colorPalette';

export default function Forum({ navigation }) {
  const [user, setUser] = useState({});
  const [topicTab, setTopicTab] = useState(false);
  useEffect(() => {
    getUserLogged().then((res) => setUser(res));
  }, []);
  const Favorite = ({ item }) => (
    <TouchableOpacity
      style={styles.FavoritePlant}
      onPress={() => navigation.push('TopicView', { itemID: item?._id })}
    >
      <ImageBackground
        source={{ uri: item?.plant?.profilePicture }}
        style={styles.FavoriteTopicImg}
        imageStyle={{ borderRadius: 100 }}
      />
      <Text style={styles.FavoriteTopicText}>
        {`${item?.title.slice(0, 10)}...`}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.forumContainer}>
        <Text style={styles.forumText}>Fórum</Text>
        <EvilIcons name="search" size={45} color={gray.shark()} />
      </View>
      <View style={styles.myforumsContainer}>
        <View style={styles.myforumsTabs}>
          <Text style={styles.myforumsTab}>Meus Fórums</Text>
          <Ionicons
            name="ios-add-circle-outline"
            size={30}
            color={gray.shark()}
            onPress={() => navigation.push('Explore')}
          />
        </View>
        <View style={styles.myforumsContent}>
          <FlatList
            horizontal
            data={user?.topics}
            keyExtractor={(item) => item?._id}
            renderItem={({ item }) => <Favorite item={item} />}
          />
        </View>
      </View>
      <View style={styles.topPostContainer}>
        {!topicTab ? (
          <>
            <TouchableOpacity
              style={styles.topPostTabs}
              onPress={() => setTopicTab(true)}
            >
              <Text style={styles.topPostTextactive}>Top posts</Text>
              <Text style={styles.topPostText}>Novos</Text>
            </TouchableOpacity>
            <TopTopic navigation={navigation} topTopic={user?.topics} />
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.topPostTabs}
              onPress={() => setTopicTab(false)}
            >
              <Text style={styles.topPostText}>Top posts</Text>
              <Text style={styles.topPostTextactive}>Novos</Text>
            </TouchableOpacity>
            <NewTopic navigation={navigation} topTopic={user?.topics} />
          </>
        )}
      </View>
      <MenuBar navigation={navigation} />
    </View>
  );
}
