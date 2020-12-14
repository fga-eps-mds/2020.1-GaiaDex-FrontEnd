import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';

const { height, width } = Dimensions.get('screen');

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
    width,
    height,
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
    height: width / 12,
    width: width / 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonActived: {
    backgroundColor: '#28E269',
    height: width / 12,
    width: width / 6,
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
    height: (height * 1) / 4,
    width: width - width / 25,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 20,
    marginVertical: width / 20,
    alignSelf: 'flex-start',
    marginHorizontal: width / 50,
  },
  lista: {
    backgroundColor: '#E5C2EB',
    marginVertical: width / 60,
    marginHorizontal: width / 50,
    borderRadius: 20,
  },
  textList: {
    marginVertical: width / 240,
    marginHorizontal: width / 50,
  },
});

export default styles;
