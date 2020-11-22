import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    pHeaderContainer: {
        backgroundColor:'black',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        height:altura/10,
    },
    pHeaderDiv: {
        paddingTop:12,
        flex:1,
    },
    pHeaderTitle:{
        color:'white',
        fontSize:18,
        textAlign:'center',
    },
    pHeaderSaveIcon:{
        alignSelf:'flex-end',
        marginRight:10,
    },
    pConfigDiv:{
        flexDirection:'column',
        flex:1
    },
    pConfigUserDiv:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        flex:0.25,
        borderBottomWidth:0.8, 
    },
    pUserProfilePic:{
        backgroundColor:'#DCDADB',
        height:altura/6.5,
        width:altura/6.5,
        borderRadius:55,
    },
    pConfigNotificationsDiv:{
        flex:0.55,
        borderBottomWidth:0.8,
        padding:10,
    },
    pcNotification:{
        flexDirection: 'column',
    },
    pcNotificationItem:{
        paddingVertical:10,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    pcNotificationText:{
        fontSize:16,

    },
    pConfigTitle:{
        fontSize:25,
        padding:10,
    },
    pConfigPoliticsDiv:{
        flex:0.20
    },
});
export default styles;