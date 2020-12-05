import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#F2E0F5',
    paddingTop: Constants.statusBarHeight,
  },
  forumContainer:{
    flexDirection: 'row',
    alignSelf:"center",
    width:largura/1.1,
    flex:0.20,
    justifyContent:"space-between",
    alignContent:'center',
    alignItems:'center',
  },
  forumText:{
    fontSize:40,
    fontWeight:'600',
    color:'#31353A',
    
  },
  myforumsContainer:{
    flexDirection: 'column',
    alignSelf:"center",
    width:largura/1.1,
    flex:0.28,
    justifyContent:"flex-start",
  },
  myforumsTabs:{
    flexDirection:"row",
    justifyContent:'space-between',
    flex:0.2,
    paddingRight:10,
  },
  myforumsTab:{
    fontSize:22,
    fontWeight:'400',
    color:'#31353A',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  myforumsContent:{
    flex:0.8,
  },
  FavoritePlant:{
    width:largura/4,
    height:largura/3.5,
    flexDirection:'column',
    marginRight:15,
    marginTop:15,
  },
  FavoriteTopicImg:{
    flex:0.95,
    width:'100%',
    alignSelf:"center",
    borderRadius:60,
    backgroundColor:'black',
  },
  FavoriteTopicText:{
    fontSize:8,
    color:'#31353A',
    fontWeight:'bold',
    textAlign:'center',
  },
  plantInfo:{
    backgroundColor:'rgba(52, 9, 37, 0.91)',
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    width:largura/2.7,
    alignSelf:'center',
  },
  plantText: {
    padding:5,
    fontSize:13,
    color:'white',
  },
  topPostContainer:{
    flexDirection: 'column',
    alignSelf:"center",
    width:largura/1.1,
    flex:0.4,
    justifyContent:'flex-end',
  },
  topPostText:{
    paddingTop:20,
    color:'#31353A',
    fontSize:26,
    fontWeight:'600',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  topPostPlant:{
    marginTop:15,
    height:altura/3.6,
    width:largura/1.1,
    flexDirection:'column-reverse',
    borderRadius:30,
    
  },
  topPostInfo:{
    backgroundColor:'rgba(27, 116, 33, 0.91)',
    flex:0.6,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    width:largura/1.1,
    alignSelf:'center',
  },
  topPostBack:{
    borderRadius:20,
    marginVertical:10,
    backgroundColor:'rgba(27, 116, 33, 0.91)',
    flex:1,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    width:largura/1.1,
    alignSelf:'center',
  },
  postTitle: {
    padding:5,
    flex:0.2,
    fontSize:16,
    color:'white',
  },
  postDescription: {
    padding:5,
    flex:0.2,
    fontSize:12,
    color:'white',
  },
  postData: {
    padding:6,
    flex:0.2,
    fontSize:8,
    color:'white',
  },
  posStatus:{
    flex:0.7,
    paddingHorizontal:15,
    flexDirection:'row',
    backgroundColor:'rgba(12, 54, 18, 0.96)',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    justifyContent:'space-between',
    alignItems:'center',
  },
  postLikes:{
    flex:0.4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  

});
export default styles;
