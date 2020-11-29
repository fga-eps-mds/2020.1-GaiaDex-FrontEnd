import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;
const styles = StyleSheet.create({
 container:{
     flex:1,
     flexDirection:'column',
     backgroundColor:'black'
 },
 header:{
     flex:0.2,
     flexDirection:'column',
     backgroundColor:'blue'
 },
 headerIcon:{
    alignSelf:'flex-start',
 },
 headerTitle:{
    flexDirection:'row',
    justifyContent:'space-between'
 },
 headerTitleText:{
    fontSize:30,
    fontWeight:'600'
 },
 body:{
     flex:0.8,
     backgroundColor:'blue'
 }
});
export default styles;
