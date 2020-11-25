import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import AvatarUser from '../../../assets/AvatarUser.png';
import { getTopic } from '../../../services/backEnd';
import styles from './style';

export default function Comments({ topic ,topicisLiked, like, deslike }){
    function Comment({ description, username, id, likes }) {
        return (
          <View style={styles.commentItemDiv}>
            <View style={styles.commentUser}>
              <Image
                style={styles.imgUserComment}
                source={{ uri: topic?.user?.profile_picture }}
                defaultSource={AvatarUser}
              />
              <ScrollView>
                <Text style={styles.commentUsername}>{username}</Text>
                <Text style={styles.commentDescription}>{description}</Text>
                <Text style={styles.commentData}>2 horas atrás</Text>
              </ScrollView>
            </View>
            <View style={styles.commentContainer}>
              <View style={styles.topicDivLikes}>
                <AntDesign
                  name='arrowup'
                  size={17}
                  color={topicisLiked ?'red':'black'}
                  onPress={() =>
                    !commentisLiked
                      ? like('comment', id)
                      : deslike('comment', id)
                  }
                />
                <Text>{likes}</Text>
                <AntDesign
                  name='arrowdown'
                  size={17}
                  color={topicisLiked ?'red':'black'}
                  onPress={() =>
                    !commentisLiked
                      ? like('comment', id)
                      : deslike('comment', id)
                  }
                />
              </View>
              <View style={styles.commentIcon}>
                <Feather
                  name="edit"
                  size={17}
                  color="black"
                  onPress={() => !isDeletd && setIsEditing(!isEditing)}
                />
              </View>
              <View style={styles.shareIcon}>
                <Feather name="corner-up-right" size={17} color="black" />
                <Text style={{ fontSize: 10 }}>Compartilhar</Text>
              </View>
            </View>
          </View>
        );
      }
    return(
        <FlatList
              data={topic?.comments}
              keyExtractor={(item) => item?._id}
              renderItem={({ item }) => (
                <Comment
                  id={item?._id}
                  username={item?.user?.username}
                  description={item?.text}
                  likes={item?.likes?.length}
                />
              )}
            />
    )
}