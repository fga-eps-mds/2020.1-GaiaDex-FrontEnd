import { StyleSheet, Dimensions } from 'react-native';
import { gray, green, purple } from '../../theme/colorPalette';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  // menuBar
  mbContainer: {
    width,
    height: height / 11,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  mbContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    padding: 1,
    backgroundColor: green.mountainMeadow(),
    width: width / 1.1,
    flex: 0.67,
    alignSelf: 'center',
    borderRadius: 30,
  },
  mbIcons: {
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  mbCameraIcon: {
    backgroundColor: green.mountainMeadow(),
    borderColor: gray.shark(),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 7,
    width: width / 7,
    borderWidth: 2,
    borderRadius: 30,
  },
  mbCameraDiv: {
    backgroundColor: purple.frenchLilacLighter(),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    marginBottom: 60,
    height: height / 13,
    borderRadius: 30,
  },
});
export default styles;
