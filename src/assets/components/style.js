import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  // menuBar
  mbContainer: {
    width: largura,
    height: altura / 11,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  mbContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    padding: 1,
    backgroundColor: '#19BB53',
    width: largura / 1.1,
    flex: 0.67,
    alignSelf: 'center',
    borderRadius: 30,
  },
  mbIcons: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 5,
  },
  mbCameraIcon: {
    backgroundColor: '#19BB53',
    borderColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: largura / 7,
    width: largura / 7,
    borderWidth: 2,
    borderRadius: 30,
  },
  mbCameraDiv: {
    backgroundColor: '#F2E0F5',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    marginBottom: 60,
    height: altura / 13,
    borderRadius: 30,
  },
});
export default styles;
