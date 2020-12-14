import { StyleSheet, Dimensions } from 'react-native';
import { gray, green, purple } from '../../theme/colorPalette';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    backgroundColor: gray.iron(),
    width,
    // backgroundColor: gray.shark(),
    flex: 1,
  },
  containerHeader: {
    flex: 0.1,
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
    flex: 0.4,
    width: width / 2.1,
    alignSelf: 'center',
    marginTop: '-9%',
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
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: width / 1.7,
  },
  menuBarTab: {
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBarTabText: {
    color: gray.iron(),
    fontSize: 12,
  },
  bodyPlants: {
    width: width / 1.2,
    alignSelf: 'center',
    padding: 10,
    flex: 0.35,
  },
  bodyPlantsTitle: {
    color: gray.shark(),
    fontSize: 16,
    marginBottom: 10,
  },
  userDiv: {
    padding: 5,
    width: width / 4.5,
    alignItems: 'center',
  },
  UserImg: {
    width: width / 5,
    height: width / 5,
  },
  userName: {
    fontSize: 12,
    textAlign: 'center',
  },
  bodyTopics: {
    width: width / 1.2,
    alignSelf: 'center',
    padding: 0,
    flex: 0.65,
  },
  TopicDivContainer: {
    width: width / 1.2,
    alignSelf: 'center',
    marginVertical: '3%',
    height: height / 3.8,
  },
  TopicImg: {
    width: '100%',
    height: height / 3.8,
    alignSelf: 'center',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  TopicDescriptionDiv: {
    width: '100%',
    flex: 0.42,
    backgroundColor: green.darkFern(),
    opacity: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
  TopicCommentsDiv: {
    width: '100%',
    flex: 0.18,
    backgroundColor: green.zuccini(),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  TopicUsername: {
    color: gray.iron(),
    fontWeight: '400',
    fontSize: 13,
  },
  TopicTitle: {
    color: gray.iron(),
    fontWeight: 'bold',
    fontSize: 13,
  },
  TopicDescription: {
    color: gray.iron(),
    fontWeight: '500',
    fontSize: 10,
  },

  ButtonBackground: {
    position: 'absolute',
    zIndex: 0,
    marginTop: height / 1.2,
    marginLeft: width / 1.35,
    width: width / 5,
    height: width / 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: purple.lightWisteria(0.3),
  },
  ButtonDiv: {
    width: width / 6.8,
    height: width / 6.8,
    borderRadius: 100,
    backgroundColor: gray.shark(),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
