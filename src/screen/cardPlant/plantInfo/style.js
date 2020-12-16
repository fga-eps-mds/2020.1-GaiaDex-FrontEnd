import { StyleSheet, Dimensions } from 'react-native';
import { gray, purple } from '../../../theme/colorPalette';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    backgroundColor: gray.iron(),
    width,
    // backgroundColor: gray.shark(),
    flex: 0.8,
  },
  containerHeader: {
    flex: 0.15,
    backgroundColor: gray.shark(),
    width,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerPlant: {
    flex: 0.3,
    backgroundColor: gray.shark(),
    flexDirection: 'column',
  },
  plantImg: {
    flex: 0.5,
    width: width / 2.1,
    alignSelf: 'center',
    marginTop: '-15%',
  },
  plantInfo: {
    backgroundColor: gray.shark(),
    width: width / 1.3,
    flex: 0.25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  plantInfoTitle: {
    flex: 0.6,
    color: gray.iron(),
    fontSize: 23,
  },
  plantInfoStats: {
    flex: 0.4,
    flexDirection: 'row',
    width: width / 1.3,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  plantInfoDiv: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  plantInfoText: {
    color: gray.iron(),
    fontSize: 10,
  },
  plantText: {
    backgroundColor: gray.shark(),
    flex: 0.375,
    width: width / 1.3,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantTextDescription: {
    color: gray.iron(),
    textAlign: 'left',
    padding: '4%',
    fontSize: 10,
  },
  containerBody: {
    flex: 0.6,
    backgroundColor: purple.frenchLilacLighter(),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bodyPlants: {
    width: width / 1.1,
    alignSelf: 'center',
    padding: 10,
    flex: 0.28,
  },
  bodyPlantsTitle: {
    color: gray.shark(),
    fontSize: 16,
    marginBottom: 10,
  },
  userDiv: {
    padding: 5,
    width: width / 5,
    alignItems: 'center',
  },
  UserImg: {
    width: width / 6,
    height: width / 6,
  },
  userName: {
    fontSize: 12,
    textAlign: 'center',
  },
  bodyTopics: {
    width: width / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-around',
    flex: 0.75,
  },
  bodyDescription: {
    flex: 0.45,
  },
  descriptionContainer: {
    flex: 0.7,
    width: width / 1.25,
    padding: 5,
    backgroundColor: gray.iron(),
    borderWidth: 1,
    borderColor: gray.grayChateau(),
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  descriptionContainerTextOpen: {
    flex: 1,
    width: width / 1.25,
    padding: 5,
    backgroundColor: gray.iron(),
    borderWidth: 1,
    borderColor: gray.grayChateau(),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 20,
    width: width / 1.25,
    backgroundColor: gray.iron(),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: gray.grayChateau(),
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  descriptionContainerText: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'left',
  },
  bodyInfo: {
    flex: 0.4,
  },
  basicContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  basicContainerDiv: {
    fontSize: 8,
    fontWeight: '300',
    textAlign: 'left',
    width: width / 2.6,
    borderWidth: 1,
    borderColor: gray.grayChateau(),
    backgroundColor: gray.iron(),
    borderRadius: 5,
    padding: 10,
    justifyContent: 'space-around',
  },
  basicTitle: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  basicContainerText: {
    fontSize: 8,
    fontWeight: '300',
    textAlign: 'left',
  },
});

export default styles;
