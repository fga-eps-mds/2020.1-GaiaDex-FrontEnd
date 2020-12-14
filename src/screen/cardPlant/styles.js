import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    backgroundColor: '#D6DADF',
    width: largura,
    // backgroundColor: '#242528',
    flex: 1,
  },
  containerHeader: {
    flex: 0.1,
    backgroundColor: '#242528',
    width: largura,
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
    backgroundColor: '#242528',
    flexDirection: 'column',
  },
  plantImg: {
    flex: 0.4,
    width: largura / 2.1,
    alignSelf: 'center',
    marginTop: '-9%',
  },
  plantInfo: {
    backgroundColor: '#242528',
    width: largura / 1.3,
    flex: 0.25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  plantInfoTitle: {
    flex: 0.6,
    color: '#D6DADF',
    fontSize: 23,
  },
  plantInfoStats: {
    flex: 0.4,
    flexDirection: 'row',
    width: largura / 1.3,
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
    color: '#D6DADF',
    fontSize: 10,
  },
  plantText: {
    backgroundColor: '#242528',
    flex: 0.375,
    width: largura / 1.3,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantTextDescription: {
    color: '#D6DADF',
    textAlign: 'left',
    padding: '4%',
    fontSize: 10,
  },
  containerBody: {
    flex: 0.6,
    backgroundColor: '#F9F6F4',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: largura / 1.7,
  },
  menuBarTab: {
    width: largura / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBarTabText: {
    color: 'white',
    fontSize: 12,
  },
  bodyPlants: {
    width: largura / 1.2,
    alignSelf: 'center',
    padding: 10,
    flex: 0.35,
  },
  bodyPlantsTitle: {
    color: '#242528',
    fontSize: 16,
    marginBottom: 10,
  },
  userDiv: {
    padding: 5,
    width: largura / 4.5,
    alignItems: 'center',
  },
  UserImg: {
    width: largura / 5,
    height: largura / 5,
  },
  userName: {
    fontSize: 12,
    textAlign: 'center',
  },
  bodyTopics: {
    width: largura / 1.2,
    alignSelf: 'center',
    padding: 0,
    flex: 0.65,
  },
  TopicDivContainer: {
    width: largura / 1.2,
    alignSelf: 'center',
    marginVertical: '3%',
    height: altura / 3.8,
  },
  TopicImg: {
    width: '100%',
    height: altura / 3.8,
    alignSelf: 'center',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  TopicDescriptionDiv: {
    width: '100%',
    flex: 0.42,
    backgroundColor: '#0B5B28',
    opacity: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
  TopicCommentsDiv: {
    width: '100%',
    flex: 0.18,
    backgroundColor: '#063718',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  TopicUsername: {
    color: '#D6DADF',
    fontWeight: '400',
    fontSize: 13,
  },
  TopicTitle: {
    color: '#D6DADF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  TopicDescription: {
    color: '#D6DADF',
    fontWeight: '500',
    fontSize: 10,
  },

  ButtonBackground: {
    position: 'absolute',
    zIndex: 0,
    marginTop: altura / 1.2,
    marginLeft: largura / 1.35,
    width: largura / 5,
    height: largura / 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  ButtonDiv: {
    width: largura / 6.8,
    height: largura / 6.8,
    borderRadius: 100,
    backgroundColor: '#242528',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
