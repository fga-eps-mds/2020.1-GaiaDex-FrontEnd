import { StyleSheet, Dimensions } from 'react-native';
import { gray, green, purple } from '../../theme/colorPalette';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  framePerfil: {
    // paddingTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: gray.shark(),
    // justifyContent: "center",
  },
  perfilTextView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width / 1.2,
  },
  perfilText: {
    fontSize: height / 20,
    color: gray.iron(),
    fontWeight: '500',
  },
  vector: {
    // alignSelf:"center",
    marginTop: 10,
    height: (height * 4) / 11,
    width,
  },
  photoView: {
    marginLeft: width / 2 - (width * 3) / 16,
    marginTop: (height * 2) / 11 - (width * 3) / 16 - (width * 1) / 8,
  },
  photo: {
    height: (width * 3) / 8,
    width: (width * 3) / 8,
    borderRadius: (width * 3) / 16,
  },
  name: {
    marginTop: (width * 3) / 8 + 7,
    color: gray.iron(),
    fontSize: 13,
    textAlign: 'center',
  },
  frameDown: {
    flex: 1,
    backgroundColor: purple.frenchLilacLighter(),
  },
  sumary: {
    position: 'absolute',
    backgroundColor: green.mountainMeadow(),
    width: (width * 10) / 11,
    height: height / 9,
    marginHorizontal: (width - (width * 10) / 11) / 2,
    marginTop: height / 2 - height / 9,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  sumaryComponents: {
    height: height / 11,
    width: (width * 10) / 33,
    paddingTop: 25,
    alignItems: 'center',
  },
  minhasAtividades: {
    marginTop: 50,
    marginLeft: (width - (width * 10) / 11) / 2,
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    height: height * (5 / 61),
    marginHorizontal: (width - (width * 10) / 11) / 2,
    borderRadius: 5,
    marginBottom: 10,
    padding: 6,
    justifyContent: 'space-between',
  },
  plantItem: {
    backgroundColor: green.magicMint(),
  },
  topicItem: {
    backgroundColor: purple.lightWisteriaLighter(),
  },
  time: {
    fontSize: 10,
    color: gray.shark(0.3),
  },
  list: {
    marginTop: 10,
    height: height / 4,
  },
});
// ruan@outlook.com.br
export default styles;
