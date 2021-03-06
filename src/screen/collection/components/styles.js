import { StyleSheet, Dimensions } from 'react-native';
import { gray, green, highlight, purple } from '../../../theme/colorPalette';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: purple.frenchLilacLighter(),
  },
  header: {
    flex: 0.25,
    flexDirection: 'column',
    width: width / 1.1,
    alignSelf: 'center',
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    flex: 0.6,
  },
  headerTitle: {
    width: width / 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitleText: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 5,
  },
  body: {
    flex: 0.7,
    alignItems: 'center',
    paddingBottom: 20,
  },
  plant: {
    flex: 0.45,
    maxHeight: height / 3,
    width: width / 1.2,
    flexDirection: 'row',
    marginBottom: '10%',
  },
  plantBackground: {
    flex: 1,
  },
  plantDescription: {
    flex: 1,
    backgroundColor: green.mountainMeadow(),
    fontWeight: '600',
    height: '50%',
    alignSelf: 'center',
    marginTop: '10%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  plantDescriptionTitle: {
    fontSize: 14,
    color: gray.iron(),
    paddingBottom: 5,
    textAlign: 'center',
  },
  plantDescriptionText: {
    fontSize: 12,
    color: gray.iron(),
    textAlign: 'center',
  },
  plantButtonDiv: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    alignSelf: 'flex-start',
    margin: 5,
    marginTop: '4%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  plantButton: {
    width: '45%',
    height: '80%',
    backgroundColor: 'orange',
    alignSelf: 'flex-start',
    margin: 5,
    marginTop: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    width: '45%',
    height: '80%',
    backgroundColor: highlight.cinnabar(),
    alignSelf: 'flex-start',
    margin: 5,
    marginTop: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    fontSize: 12,
    color: gray.iron(),
  },
});
export default styles;
