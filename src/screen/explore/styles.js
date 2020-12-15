import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { gray, purple } from '../../theme/colorPalette';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: purple.frenchLilacLighter(),
    paddingTop: Constants.statusBarHeight,
  },
  exploreContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width / 1.1,
    flex: 0.22,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  exploreText: {
    fontSize: 40,
    fontWeight: '600',
    color: gray.outerSpace(),
  },
  popularContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: width / 1.1,
    flex: 0.35,
    justifyContent: 'flex-start',
  },
  popularTabs: {
    flexDirection: 'row',
    flex: 0.2,
  },
  popularTab: {
    fontSize: 22,
    fontWeight: '400',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: gray.shark(),
  },
  popularContent: {
    flex: 0.8,
  },
  FavoritePlant: {
    width: width / 2.7,
    height: height / 4,
    flexDirection: 'column-reverse',
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: purple.grapeDark(0.9),
  },
  FavoritePlantImg: {
    width: '100%',
    resizeMode: 'cover',
    flexDirection: 'column-reverse',
    flex: 1,
  },
  plantInfo: {
    backgroundColor: purple.grapeDark(0.9),
    flex: 0.2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: width / 2.7,
    alignSelf: 'center',
  },
  myPlantsContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: width / 1.1,
    flex: 0.3,
    justifyContent: 'flex-start',
  },
  myPlantsText: {
    paddingTop: 30,
    color: gray.outerSpace(),
    fontSize: 26,
    fontWeight: '600',
  },
  myplantPlant: {
    marginTop: 10,
    height: height / 6,
    width: width / 4.5,
    flexDirection: 'column-reverse',
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: 'brown',
  },
  myplantInfo: {
    backgroundColor: purple.grapeDark(0.9),
    flex: 0.3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: width / 4.5,
    alignSelf: 'center',
  },
  plantText: {
    padding: 5,
    textAlign: 'center',
    fontSize: 10,
    color: gray.iron(),
  },
});
export default styles;
