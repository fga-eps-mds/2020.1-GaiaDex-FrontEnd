import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Header from './header';
import styles from './styles';
import userDefault from '../../assets/userDefault.png';
import {
  getTopic,
  updateTopic,
  createComment,
  likeTopic,
  dislikeTopic,
  likeComment,
  dislikeComment,
  getUserLogged,
} from '../../services/backEnd';
import Comments from './comment/Comments';

function Data({ time }) {
  const now = new Date();
  const action = new Date(time);
  const tmp = Math.trunc((now - action) / 1000 / 60);
  if (tmp / 60 > 24) {
    return <Text style={styles.dataTopic}>{tmp / 24} dias atrás</Text>;
  }
  if (tmp / 3600 > 24) {
    return <Text style={styles.dataTopic}>{tmp / 24} horas atrás</Text>;
  }
  return <Text style={styles.dataTopic}>{tmp} minutos atrás</Text>;
}

export default function TopicView({ navigation }) {
  const topicID = navigation.getParam('itemID', '5fcc409c8e5b3100955db202');
  const [user, setUser] = useState({});
  const [topic, setTopic] = useState({});
  const [isNewComment, setIsNewComment] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [topicIsDeleted, setTopicIsLiked] = useState(false);
  const [topicIsNotLiked, setTopicIsNotLiked] = useState(false);
  const [topicDate, setTopicDate] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    getUserLogged().then((res) => setUser(res));

    getTopic(topicID)
      .then((res) => {
        postData(res.createdAt);
        return setTopic(res);
      })
      .then(() => {
        if (topic?.title === 'Topico Deletado') {
          setIsDeleted(true);
        }
      })
      .then(() => {
        if (topic?.user?._id === user?._id) {
          setIsEditable(true);
        }
      });
  }, []);
  const postData = async (data) => {
    const dataTop = new Date(data);
    setTopicDate(dataTop);
  };

  const putTopic = async () => {
    const topicBody = {
      title: topic.title,
      description: topic.description,
    };
    updateTopic(topic?._id, topicBody).then(() => setIsEditing(false));
  };
  const deleteTopic = async () => {
    const topicBody = {
      title: 'Topico Deletado',
      description: 'Topico Deletado',
    };
    updateTopic(topic?._id, topicBody)
      .then((data) => setTopic(data))
      .then(() => setIsDeleted(true))
      .catch((error) => console.error(error));
  };
  const postComment = async () => {
    const commentBody = {
      text: commentText,
    };
    createComment(topic._id, commentBody)
      .then((res) => setTopic(res))
      .then(() => setIsNewComment(true));
  };

  const like = async (type, id = null) => {
    const options = {
      topic: () => {
        likeTopic(topic?._id).then((res) => {
          const { likes } = res;
          setTopic({ ...topic, likes });
          setTopicIsLiked(true);
          setTopicIsNotLiked(false);
        });
      },
      comment: () => {
        likeComment(id).then((res) => {
          const { comments } = res;
          setTopic({ ...topic, comments });
        });
      },
    };
    if (options[type]) options[type]();
  };

  const deslike = async (type, id = null) => {
    const options = {
      topic: () => {
        dislikeTopic(topic?._id).then((res) => {
          const { likes } = res;
          setTopic({ ...topic, likes });
          setTopicIsLiked(false);
          setTopicIsNotLiked(true);
        });
      },
      comment: () => {
        dislikeComment(id).then((res) => {
          const { comments } = res;
          setTopic({ ...topic, comments });
        });
      },
    };
    if (options[type]) options[type]();
  };

  return (
    <KeyboardAvoidingView style={styles.containerMaster}>
      <Header
        title={topic?.plant?.scientificName}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.UserDiv}>
          <Image
            style={styles.imgUser}
            source={{ uri: topic?.user?.photo }}
            defaultSource={userDefault}
          />
          <View>
            <Text style={styles.nameUser}>{topic?.user?.username}</Text>
            <Data tempo={topicDate} />
          </View>
        </View>
        <View style={styles.topicDiv}>
          {isEditing ? (
            <>
              <View style={{ marginTop: 10 }}>
                <TextInput
                  style={styles.topicDivTitle}
                  defaultValue={topic?.title}
                  onChangeText={(title) => setTopic({ ...topic, title })}
                />
              </View>
              <TextInput
                blurOnSubmit
                multiline
                style={styles.topicDescriptionInput}
                defaultValue={topic?.description}
                onChangeText={(description) =>
                  setTopic({ ...topic, description })
                }
              />
              {!isDeleted && (
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => putTopic()}
                >
                  <Text style={styles.saveButtonText}>salvar</Text>
                </TouchableOpacity>
              )}
            </>
          ) : (
            <>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.topicDivTitle}>{topic?.title}</Text>
              </View>
              <ScrollView style={styles.scrollViewDescription}>
                <Text style={styles.topicDivDescription}>
                  {topic?.description}
                </Text>
                {!!topic?.profile_picture && (
                  <Image
                    style={styles.imgDescription}
                    source={{ uri: topic?.profile_picture }}
                  />
                )}
              </ScrollView>
              {!!isEditable && (
                <Feather
                  style={styles.deleteButton}
                  onPress={() => deleteTopic()}
                  name="trash-2"
                  size={24}
                  color="black"
                />
              )}
            </>
          )}
          <View style={styles.topicContainer}>
            <View style={styles.topicDivLikes}>
              <AntDesign
                name="arrowup"
                size={18}
                color={topicIsDeleted ? 'red' : 'black'}
                onPress={() => like('topic', topicID)}
              />
              <Text>{topic?.likes?.length}</Text>
              <AntDesign
                name="arrowdown"
                size={18}
                color={topicIsNotLiked ? 'red' : 'black'}
                onPress={() => deslike('topic', topicID)}
              />
            </View>
            {!!isEditable && (
              <View style={styles.commentIcon}>
                <Feather
                  name="edit"
                  size={18}
                  color="black"
                  onPress={() => !isDeleted && setIsEditing(!isEditing)}
                />
              </View>
            )}
            <View style={styles.shareIcon}>
              <Feather name="corner-up-right" size={15} color="black" />
              <Text style={{ fontSize: 10 }}>Compartilhar</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.commentsBarDiv}
        onPress={() => setIsNewComment(!isNewComment)}
      >
        <View style={styles.commentsBar}>
          <Text style={styles.commentsBarText}>Novo Comentário</Text>
          <Entypo
            style={styles.commentsBarIcon}
            name={isNewComment ? 'triangle-right' : 'triangle-down'}
            size={15}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.commentsListDiv}>
        <View style={styles.commentsList}>
          {isNewComment ? (
            <Comments
              topic={topic}
              setTopic={setTopic}
              user={user}
              like={like}
              deslike={deslike}
              topicIsDeleted={topicIsDeleted}
            />
          ) : (
            <View style={styles.commentContent}>
              <TextInput
                blurOnSubmit
                multiline
                style={styles.commentDescriptionInput}
                placeholder="Escreva um comentário ..."
                onChangeText={(val) => setCommentText(val)}
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => postComment()}
              >
                <Text style={styles.saveButtonText}>salvar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
