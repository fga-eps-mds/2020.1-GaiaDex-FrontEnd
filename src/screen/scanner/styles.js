import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2E0F5',
        justifyContent: 'center',
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
    }
});

export default styles;