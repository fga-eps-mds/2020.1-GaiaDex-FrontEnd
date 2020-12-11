import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2E0F5',
    paddingTop: Constants.statusBarHeight,
  },
  exploreContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: largura / 1.1,
    flex: 0.22,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  exploreText: {
    fontSize: 40,
    fontWeight: '600',
    color: '#31353A',
  },
  popularContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: largura / 1.1,
    flex: 0.32,
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
    textDecorationColor: '#000',
  },
  popularContent: {
    flex: 0.8,
  },
  FavoritePlant: {
    width: largura / 2.7,
    flex: 1,
    flexDirection: 'column-reverse',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(52, 9, 37, 0.91)',
    marginRight: 15,
    backgroundColor: 'rgba(52, 9, 37, 0.91)',
  },
  FavoritePlantImg: {
    width: '100%',
    resizeMode: 'cover',
    flexDirection: 'column-reverse',
    flex: 1,
  },
  plantInfo: {
    backgroundColor: 'rgba(52, 9, 37, 0.91)',
    flex: 0.3,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: largura / 2.7,
    alignSelf: 'center',
  },
  plantText: {
    padding: 5,
    fontSize: 13,
    color: 'white',
  },
  myPlantsContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: largura / 1.1,
    flex: 0.26,
    justifyContent: 'flex-start',
  },
  myPlantsText: {
    paddingTop: 30,
    color: '#31353A',
    fontSize: 26,
    fontWeight: '600',
  },
  myplantPlant: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(52, 9, 37, 0.91)',
    width: largura / 4.5,
    flexDirection: 'column-reverse',
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: 'brown',
  },
  myplantInfo: {
    backgroundColor: 'rgba(52, 9, 37, 0.91)',
    flex: 0.4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: largura / 4.5,
    alignSelf: 'center',
  },
  plantText: {
    padding: 5,
    fontSize: 13,
    color: 'white',
  },
});
export default styles;
