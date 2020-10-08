import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container : {
        //backgroundColor : '#FF0000',
    },
    icon : {
        color: '#FCEFF9'
    },
    icon2 : {
        color: '#FCEFF9',
        marginRight: 10,
    },
    header :{
        flexDirection: 'row',
        justifyContent : 'space-between',
        height : 60,
        paddingTop: 30,
        alignItems : 'center',
        backgroundColor : 'rgba(0,0,0,0)',
        paddingHorizontal : 10,
    },
    imagem:{
        width:largura,
        height: altura*5/11 + 25,
    },
    view:{
        width:largura,
        alignItems:'center',
        height:altura,
        backgroundColor: '#FFFFFF'
    },
    background:{
       width:largura,
       height: altura*6/11,
       //marginTop:-25,
       justifyContent: 'center',
       backgroundColor:'#FCEFF9',
       //borderRadius:25,
       zIndex:1
    },
    backgroundMenu:{
        width:largura,
       height: altura*6/11,
       //marginTop:altura*1/80,
       //justifyContent: 'center',
       backgroundColor:'#FCEFF9',
       //borderRadius:25,
       zIndex:1
     },
    ItemTopLeft:{
        margin:1,
        width:(largura-100)/2,
        height:(largura-130)/2,
        borderTopLeftRadius:10,
    },
    ItemTopRight:{
        margin:1,
        width:(largura-100)/2,
        height:(largura-130)/2,
        borderTopRightRadius:10,
    },
    ItemBottomLeft:{
        margin:1,
        width:(largura-100)/2,
        height:(largura-130)/2,
        borderBottomLeftRadius:10,
    },
    ItemBottomRight:{
        margin:1,
        width:(largura-100)/2,
        height:(largura-130)/2,
        borderBottomRightRadius:10,

    },
    TabContainer:{
        marginTop : altura*1/80,
        width:largura-96,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor:'#FCEFF9',
        flexWrap:'wrap',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        borderRadius:10,       
    },
    buttonForum:{
        marginTop:altura*1/80,   
    },
    plantText:{
        color:'white',
        fontSize:20,
        textAlign:'left',
        marginLeft:largura/15,
        fontStyle:"italic",
       
        
    },
    plantCommonname:{
        color:'white',
        fontSize:35,
        textAlign:'left',
        marginLeft:largura/15,
        marginTop:largura/10,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
        
    },
    plantLikes:{
        color:'white',
        fontSize:20,
        textAlign:'right',
        marginRight:largura/15,
       
        
       
    },
    plantLikesBanner:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'flex-end',
        backgroundColor:'rgba(1,1,1,0.4)',
        marginTop:largura/5,
        height:largura/15,
    },
    iconButton:{
        width:(largura)/8,
        height:(altura)/20,
        marginRight:-20,
    },
    usage:{
        marginTop:altura*1/80,
        marginBottom:altura*1/6,
        margin:(largura/12),
        
    },
    tabNavigator:{
        backgroundColor:'#FCEFF9',
    }
});

export default styles;