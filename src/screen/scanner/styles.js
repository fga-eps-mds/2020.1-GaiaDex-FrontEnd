import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2E0F5',
        justifyContent: 'center',
    },
    loadingContainer: {
        zIndex: 5000,
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: largura,
        height: altura,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    camera:{
        flex: 6,
    },
    botoesConteinerTop: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginTop: 20,
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    botaoFlip: {
        marginRight: 20,
    },
    botoesConteinerBottom: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    result: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    imagem: { 
        height: altura*1/3, 
        width: largura - 40,
        borderRadius: 20,
        marginHorizontal: 20,
    }
});

export default styles;