import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E0F5',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
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
  camera: {
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
  buttonFlip: {
    marginRight: 20,
  },
  botoesConteinerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#E5C2EB',
    height: largura / 12,
    width: largura / 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonActived: {
    backgroundColor: '#28E269',
    height: largura / 12,
    width: largura / 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  result: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2E0F5',
  },
  imagem: {
    height: (altura * 1) / 4,
    width: largura - largura / 25,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 20,
    marginVertical: largura / 20,
    alignSelf: 'flex-start',
    marginHorizontal: largura / 50,
  },
  lista: {
    backgroundColor: '#E5C2EB',
    marginVertical: largura / 60,
    marginHorizontal: largura / 50,
    borderRadius: 20,
  },
  textList: {
    marginVertical: largura / 240,
    marginHorizontal: largura / 50,
  },
});

export default styles;
