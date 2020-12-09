import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2E0F5',
    // paddingTop: Constants.statusBarHeight,
  },
  editView: {
    backgroundColor: '#F2E0F5',
    width: (largura * 4) / 5,
    height: (altura * 2) / 9,
    marginTop: (altura * 5) / 36,
    marginLeft: largura / 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 50,
    paddingHorizontal: largura / 25,
    paddingVertical: altura / 90,
    justifyContent: 'space-between',
  },
  editTitle: {
    fontSize: 17,
  },
  editTextInput: {
    height: 40,
    width: (largura * 4) / 5 - (largura * 2) / 25,
    borderBottomColor: '#38143E',
    borderBottomWidth: 1,
  },
  editButton: {
    fontSize: 14,
    color: '#0582CA',
    marginLeft: (largura * 9) / 125,
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
    flex: 0.25,
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
    width: largura / 3,
    flex: 1,
    flexDirection: 'column-reverse',
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: 'rgba(52, 9, 37, 0.91)',
  },
  FavoritePlantImg: {
    width: '100%',
    resizeMode: 'cover',
    flexDirection: 'column-reverse',
    flex: 1,
    justifyContent: 'space-between',
  },
  plantInfo: {
    backgroundColor: 'rgba(52, 9, 37, 0.91)',
    flex: 0.3,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: largura / 3,
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
    alignSelf: 'center',
    width: largura / 1.1,
    flex: 0.4,
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
    width: largura / 3.8,
    height: altura / 6,
    flexDirection: 'column-reverse',
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: 'brown',
  },
  myplantInfo: {
    backgroundColor: 'rgba(52, 9, 37, 0.91)',
    flex: 0.3,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: largura / 3.8,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  plantText: {
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
    color: '#F2E0F5',
  },
});
export default styles;
