import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Header from './header';
import styles from './styles';
import AvatarUser from '../../assets/AvatarUser.png';
import { getTopic, updateTopic, createComment, likeTopic, dislikeTopic } from '../../services/backEnd';
import Comments from './comment/comment';

export default function TopicView({ navigation }) {
  const userLogado = '5fbdecd033a94200270ce251';
  const topicID = navigation.getParam('itemID', '5fbdf52b188a320045f53a6f'); // inserir o id da planta  ser exibido
  const [topic, setTopic] = useState({});
  const [isNewComment, setIsNewComment] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [topicisLiked, setTopicIsLiked] = useState(false);
  const [topicisNotLiked, setTopicIsNotLiked] = useState(false);
  const [commentisLiked, setcommentIsLiked] = useState(false);
  const [isDeletd, setIsDeletd] = useState(false);
  useEffect(() => {
    getTopic(topicID)
      .then((res) => setTopic(res))
      .then(() => {
        if (topic?.title == 'Topico Deletado') {
          setIsDeletd(true);
        }
      })
      .then(() =>{
        if (topic?.user?._id == userLogado) {
         setIsEditable(true);
        }
      });
  }, []);
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
      .then(() => setIsDeletd(true))
      .catch((error) => console.error(error));
  };
  const postComment = async () => {
    const commentBody = {
      text: commentText,
    };
    createComment(topic._id, userLogado, commentBody)
      .then((res) => setTopic(res))
      .then(() => setIsNewComment(true));
  };

  const like = async (type, id = null) => {
    const options = {
      topic: () => {
          likeTopic(topic?._id).then(res => {
          const { likes } = res;
          setTopic({ ...topic,likes})
          setTopicIsLiked(true);
          setTopicIsNotLiked(false);
        });
      },
      comment: () => {
        fetch(`http://${enderecoIpv4}:${porta}/comment/like/${id}`, {
          method: 'POST',
        })
          .then((res) => {
            if (res.ok) {
              const likes = topic?.comments[0].likes + 1;
              setTopic({ ...topic.comments, comments });
              setcommentIsLiked(!commentisLiked);
            }
          })
          .catch((err) => {
            console.log(err);
            alert('Não foi possível realizar a ação');
          });
      },
    };
    if (options[type]) options[type]();
  };

  const deslike = async (type, id = null) => {
    const options = {
      topic: () => {
          dislikeTopic(topic?._id).then(res => {
          const { likes } = res;
          setTopic({ ...topic,likes})
          setTopicIsLiked(false);
          setTopicIsNotLiked(true);
        });
      },
      comment: () => {
        fetch(`http://${enderecoIpv4}:${porta}/comment/dislike/${id}`, {
          method: 'POST',
        })
          .then((res) => {
            if (res.ok) {
              const dislikes = topic.commentsdislikes + 1;
              setTopic({ ...topic, comments, dislikes });
              setcommentIsLiked(!commentisLiked);
            }
          })
          .catch((err) => {
            console.log(err);
            alert('Não foi possível realizar a ação');
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
            source={{ uri: topic?.user?.profile_picture }}
            defaultSource={AvatarUser}
          />
          <View>
            <Text style={styles.nameUser}>{topic?.user?.username}</Text>
            <Text style={styles.dataTopic}>{topic?.createdAt}</Text>
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
              {!isDeletd && (
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
                name={'arrowup'}
                size={18}
                color={topicisLiked ?'red':'black'}
                onPress={() =>like('topic', topicID)}
              />
              <Text>{topic?.likes?.length}</Text>
              <AntDesign
                name={'arrowdown'}
                size={18}
                color={topicisNotLiked ?'red':'black'}
                onPress={() => deslike('topic', topicID)}
              />
            </View>
            {!!isEditable && (
              <View style={styles.commentIcon}>
                <Feather
                  name="edit"
                  size={18}
                  color="black"
                  onPress={() => !isDeletd && setIsEditing(!isEditing)}
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
            <Comments topic={topic} like={like} deslike={deslike} topicisLiked={topicisLiked}/>
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
