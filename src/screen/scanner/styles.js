import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { gray, green, purple } from '../../theme/colorPalette';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple.frenchLilacLighter(),
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
    backgroundColor: gray.shark(0.5),
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
    backgroundColor: purple.frenchLilacMedium(),
    height: width / 12,
    width: width / 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonActived: {
    backgroundColor: green.pastelGreen(),
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
    backgroundColor: purple.frenchLilacLighter(),
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
    backgroundColor: purple.frenchLilacMedium(),
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
