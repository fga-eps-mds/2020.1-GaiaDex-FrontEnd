import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;
const styles = StyleSheet.create({
 container:{
     flex:1,
     flexDirection:'column',
 },
 header:{
     flex: 0.25,
     flexDirection:'column',
     width: largura/1.1,
     alignSelf: 'center',
 },
 headerIcon:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-start',
    flex: 0.6
 },
 headerTitle:{
    width: largura/1.2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
 },
 headerTitleText:{
    fontSize: 35,
    fontWeight:'600',
    paddingLeft: 5,
 },
 body:{
    flex:0.7,
    alignItems: 'center',
    paddingBottom: 20,
 },
 plant:{
    flex: 0.45,
    width: largura/1.2,
    flexDirection: 'row',
    marginBottom: '10%'
 },
 plantBackground: {
    flex: 1,
    backgroundColor: 'green',
 }, 
 plantDescription:{
    flex: 1,
    backgroundColor: '#59A44D',
    fontWeight: '600',
    height: '40%',
    alignSelf: 'center',
    marginTop: '25%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
 },
 plantDescriptionTitle: {
    fontSize: 17,
    color:'white',
    paddingBottom: 5,
    textAlign: 'center'
 },
 plantDescriptionText:{
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
 },
 plantButton: {
    width: '45%',
    height: '45%',
    backgroundColor: 'orange',
    alignSelf: 'flex-start',
    margin: 5,
    marginTop: '10%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
 }
});
export default styles;
