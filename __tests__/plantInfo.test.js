import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import PlantCardInfo from '../src/screen/cardPlant/plantInfo/myPlantCard';
import styles from '../src/screen/cardPlant/plantInfo/style';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<PlantCardInfo />);

describe('<PlantCardInfo />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(22);
    expect(wrapper.find('Text').length).toBe(26);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerBody);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.bodyTopics);
    expect(wrapper.find('View').at(4)).toHaveStyle(styles.bodyDescription);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.descriptionContainer);
    expect(wrapper.find('View').at(10)).toHaveStyle(styles.bodyInfo);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.basicContainer);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.basicContainerDiv);
    expect(wrapper.find('View').at(16)).toHaveStyle(styles.basicContainerDiv);
    expect(wrapper.find('View').at(18)).toHaveStyle(styles.bodyPlants);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.bodyPlantsTitle);
    expect(wrapper.find('Text').at(2)).toHaveStyle(
      styles.descriptionContainerText
    );
    expect(wrapper.find('Text').at(6)).toHaveStyle(styles.bodyPlantsTitle);
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.basicTitle);
    expect(wrapper.find('Text').at(10)).toHaveStyle(styles.basicContainerText);
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(styles.button);
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('horizontal');
  });
});
