import React, { useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import userDefault from '../../../assets/userDefault.png';
import { updateComment, deleteComment } from '../../../services';
import styles from './styles';
import { gray } from '../../../theme/colorPalette';

export default function Comments({ topic, setTopic, user, like, dislike }) {
  function Comment({ description, username, userID, id, likes }) {
    const [isEditing, setIsEditing] = useState(false);
    const [topicEditing, setTopicEditing] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const putComment = async () => {
      const commentBody = {
        text: newDescription,
      };
      await updateComment(id, commentBody).then((res) => {
        const { comments } = res;
        setTopic({ ...topic, comments });
      });
    };
    const delComment = async () => {
      await deleteComment(id).then((res) => {
        const { comments } = res;
        setTopic({ ...topic, comments });
      });
    };

    const EditComment = (state) => {
      if (state) {
        putComment().then(() => {
          setIsEditing(false);
          setTopicEditing('');
        });
      } else {
        setIsEditing(true);
        setTopicEditing(id);
      }
    };

    return (
      <View style={styles.commentItemDiv}>
        <View style={styles.commentUser}>
          <Image
            style={styles.imgUserComment}
            source={{ uri: topic?.user?.photo }}
            defaultSource={userDefault}
          />
          <ScrollView>
            <Text style={styles.commentUsername}>{username}</Text>
            {topicEditing !== id ? (
              <Text style={styles.commentDescription} numberOfLines={3}>
                {description}
              </Text>
            ) : (
              <TextInput
                blurOnSubmit
                multiline
                style={styles.commentDescription}
                defaultValue={description}
                onChangeText={(text) => setNewDescription(text)}
              />
            )}
          </ScrollView>
        </View>

        <View style={styles.commentContainer}>
          <View style={styles.topicDivLikes}>
            <AntDesign
              name="arrowup"
              size={17}
              color={gray.shark()}
              onPress={() => like('comment', id)}
            />
            <Text>{likes}</Text>
            <AntDesign
              name="arrowdown"
              size={17}
              color={gray.shark()}
              onPress={() => dislike('comment', id)}
            />
          </View>
          {!!(user?._id === userID) && (
            <>
              <View style={styles.commentIcon}>
                <Feather
                  name="edit"
                  size={17}
                  color={isEditing ? 'green' : gray.shark()}
                  onPress={() => EditComment(isEditing)}
                />
              </View>

              <View style={styles.shareIcon}>
                <Feather
                  style={{ marginRight: 10 }}
                  name="trash-2"
                  size={18}
                  color={gray.shark()}
                  onPress={() => delComment()}
                />
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={topic?.comments}
      keyExtractor={(item) => item?._id}
      renderItem={({ item }) => (
        <Comment
          id={item?._id}
          username={item?.user?.username}
          userID={item?.user?._id}
          description={item?.text}
          likes={item?.likes?.length}
        />
      )}
    />
  );
}
