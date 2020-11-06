import React ,{useState, useEffect}from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { AntDesign, FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Header from './header'
const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function TopicView(){

    const enderecoIpv4 = '192.168.0.40'; //inserir o endereço o ip do localhost
    const porta = '3000'; // inserir a porta em que o backend esta rodando
    const topicID = '5fa473db6ad7aa001cb7654a'; //inserir o id da planta  ser exibido
    const [topic, setTopic] = useState({})
    const [plant, setPlant] = useState({});
    const [comment, setComment] = useState({});
    const [postId, setPostId] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');   
    const [isNewComment, setIsNewComment] = useState(false);
    const [newComment, setNewComment] = useState({});
    

    
    // useEffect(()=>{
        
    //     lerDados();    
    //     },[]);
    
    // const lerDados = async() => {
    //     const dadosHTTP = await fetch(`http://192.168.0.40:3000/topic/find/5fa473db6ad7aa001cb7654a`)
    //     const dadosJson = await dadosHTTP.json();
    //     setTopic(dadosJson.topic); 
    //     console.log(dadosJson.topic);
    // }    


    // const postTopic = async() => {
    //   const requestOptions = {
    //       method:'POST',
    //       headers: {
    //           'Content-Type':'application/json'
    //       },
    //       body:JSON.stringify({
    //           title:title,
    //           description:description
    //           })
    //       };
    //       fetch(`http://${enderecoIpv4}:${porta}/topic/create/5f8eb1cca552bd001ce62f9b/5f91d5b8fed418001cb07b88`,requestOptions)
    //           .then(response => response.json())
    //           .then(data => setPostId(data.id))
                 
    // }
    // const likeTopic = async() => {
    //     const requestOptions = {
    //         method:'POST',
    //         };
    //         fetch(`http://${enderecoIpv4}:${porta}/topic/like/${topicID}`,requestOptions)
    //             .then(response => response.json())
    //             .then(data => setTopic(data))

    //   }
    //   const deslikeTopic = async() => {
    //     const requestOptions = {
    //         method:'POST',
    //         };
    //         fetch(`http://${enderecoIpv4}:${porta}/topic/dislike/${topicID}`,requestOptions)
    //             .then(response => response.json())
    //             .then(data => setTopic(data))   
    //   }
      


      function Topics({title}){
        return(
            <View style={styles.commentItemDiv}>
                <Image
                    style={styles.imgUserComment}
                    defaultSource={require('../../assents/AvatarUser.png')}
                    />
                <ScrollView>
                    <Text style={styles.commentUsername}>{title}</Text>
                    <Text style={styles.commentDescription}>Lorem ipsum vehicula augue venenatis magna sodales tincidunt porttitor, ligula lorem etiam felis curae purus hac, lacinia tristique proin a class vehicula gravida. egestas mi suscipit aptent posuere placerat elit ut orci ad donec, vitae fusce sed himenaeos elementum sodales molestie habitasse turpis, aenean feugiat imperdiet posuere eros pharetra aliquet platea dapibus.  </Text>
                    <Text style={styles.commentData}>2 horas atrás</Text>
                </ScrollView>
            </View>
        )
    }    
      return(
          <View style={styles.containerMaster}>
                <Header/>
                <View style={styles.container}>
                    <View style={styles.UserDiv}>
                        <Image
                            style={styles.imgUser}
                            // source={{uri: topic.profile_picture}}
                            defaultSource={require('../../assents/AvatarUser.png')}
                        />
                        <View>
                            {/* <Text style={styles.nameUser}>{topic.topic.user.username}</Text> */}
                            {/* <Text style={styles.dataTopic}>{topic.topic.createdAt}</Text>      */}
                        </View>
                    </View>
                    <View style={styles.topicDiv}>
                        <View style={{marginTop:10}}>
                            {/* <Text style={styles.topicDivTitle}>{topic.topic.title}</Text> */}
                            </View>
                        <ScrollView style={styles.scrollViewDescription}>
                            {/* <Text style={styles.topicDivDescription}>{topic.topic.description}</Text> */}
                            <Image
                            style={styles.imgDescription}
                            // source={{uri: plant.plant.profile_picture}}
                            defaultSource={require('../../assents/AvatarUser.png')}
                        />
                        </ScrollView>
                        <View style={styles.topicContainer} >
                            <View style={styles.topicDivLikes}>
                                <AntDesign name="arrowup" size={18} color="black" onPress={() => likeTopic() }/>
                                    {/* <Text>{topic.likes - topic.dislikes}</Text> */}
                                <AntDesign name="arrowdown" size={18} color="black" onPress={() => deslikeTopic() }/>
                            </View>
                            <View style={styles.commentIcon}>
                                <FontAwesome name="comment-o" size={15} color="black"/>
                            </View>
                            <View style={styles.shareIcon}>
                                <Feather name="corner-up-right" size={15} color="black" />
                                <Text style={{fontSize:10}}>Compartilhar</Text>
                            </View>    

                        </View>  
                    </View>
                </View>    
                    <View style={styles.commentsBarDiv}>
                        <View style={styles.commentsBar}>
                            <Text style={styles.commentsBarText}>Novo Comentário</Text>
                            <Entypo style={styles.commentsBarIcon} name="triangle-right" size={15} color="black" />
                        </View>
                    </View>
                    <View style={styles.commentsListDiv}>
                        <View style={styles.commentsList}>
                            <FlatList
                            data={[1,2,3,5,6,7,8,9]}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <Topics title={'Username'} description={'Comentario'}/> }
                            />
                        </View>
                    </View>
                
        </View>        
      );
  };
const styles = StyleSheet.create({
    UserDiv: {
        flexDirection: 'row',
        flex:0.6,
        marginTop:altura/50
        
    },
    imgUser : {
        width:largura/5,
        height:largura/5,
        borderRadius:50,
    },
    nameUser : {
        fontSize:18,
        fontWeight:'400',
        paddingTop:5,
        paddingLeft:10
        
    },
    dataTopic : {
        fontSize:12,
        fontWeight: '200',
        paddingLeft:10,
        paddingTop:0
    },
    topicDiv:{
        flexDirection: 'column',
        alignContent:'space-between',
        flex:1.4,        
        
    },
    topicDivTitle:{
        fontSize:18,
        fontWeight:'600'
    },
    scrollViewDescription:{
        maxHeight:altura/4.4,
    },
    imgDescription:{
        alignSelf:"center",
        width:largura/1.2,
        height:largura/1.2,
        margin:10
    },
    topicDivDescription:{
        fontSize:12,
        fontWeight:'400',
        paddingTop:20
    },
    topicContainer:{
        flexDirection: 'row',
        flex:5,
        backgroundColor:'#D6DADF',
        maxHeight:altura/25,
        borderRadius:8,
        alignItems:'center',
        justifyContent: 'space-between',
        
    },
    topicDivLikes:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:10
        
    },
    shareIcon : {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-end',
        paddingHorizontal:10,
        
    },
    commentsBarDiv:{
        flex:1,
        marginTop:20,
        backgroundColor:'white'
    },
    commentsListDiv:{
        flex:5,
        backgroundColor:'#D8A3E0',
        justifyContent: 'center',
        flexWrap:'nowrap',
    },
    commentsBar:{
        flex:1,
        backgroundColor:'#D8A3E0',
        alignContent:'flex-start',
        flexDirection:"row",
    },
    commentsBarText:{
        fontSize:16,
        fontWeight:'500',
        alignSelf:'flex-start',
        paddingLeft:largura/10,
        paddingTop:12        
    },
    commentsBarIcon:{
        alignSelf:'center',
        justifyContent:'center',
        paddingLeft:5 
    },
    commentsList:{
        flex:1,
        backgroundColor:'#D6DADF'
    },
    commentItemDiv:{
        backgroundColor:'white',
        flexDirection:'row',
        alignSelf:'center',
        width:largura/1.1,
        height:altura/8,
        marginVertical:5,
        borderRadius:5,
        paddingTop:10,
        paddingLeft:10
    },
    imgUserComment:{
        marginLeft:10,
        width:largura/8,
        height:largura/8,
        borderRadius:50,
    },
    commentUsername:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        paddingLeft:10
    },
    commentData:{
        fontSize:7,
        fontWeight:'200',
        paddingTop:5,
        paddingLeft:10
    },
    commentDescription:{
        fontSize:9,
        fontWeight:'300',
        paddingTop:5,
        paddingLeft:10
    },
    container: {
        flex:7,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        width: largura/1.2,
        height:altura,
        alignSelf:'center'
        
    },
    containerMaster:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        width:largura,
        height:altura,
    }
}) 